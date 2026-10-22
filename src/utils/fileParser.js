import * as XLSX from 'xlsx';
import { getGradeInfo, INITIAL_STUDENTS, SUBJECT_METADATA } from '../data/mockData';

// Parse uploaded Excel or CSV file
export function parseUploadedFile(file, targetBatch = "2024-2028", targetSemester = 4, cohortStudents = []) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (!jsonData || jsonData.length < 2) {
          throw new Error("File is empty or missing data rows.");
        }

        const headers = jsonData[0].map(h => String(h || '').trim());
        const rows = jsonData.slice(1);

        // Identify demographic vs subject columns
        const demoKeywords = ['roll', 'seat', 'prn', 'name', 'student', 'class', 'gender', 'sex', 'attendance', 'att %'];
        const subjectCols = [];
        let rollColIdx = 0;
        let nameColIdx = 1;
        let classColIdx = 2;
        let genderColIdx = 3;
        let attendanceColIdx = -1;

        headers.forEach((h, colIdx) => {
          const lower = h.toLowerCase();
          if (lower.includes('roll') || lower.includes('seat')) rollColIdx = colIdx;
          else if (lower.includes('name') || lower.includes('student')) nameColIdx = colIdx;
          else if (lower.includes('class')) classColIdx = colIdx;
          else if (lower.includes('gender') || lower.includes('sex')) genderColIdx = colIdx;
          else if (lower.includes('attend')) attendanceColIdx = colIdx;
          else if (h.length > 0 && !demoKeywords.some(k => lower.includes(k))) {
            subjectCols.push({ index: colIdx, name: h });
          }
        });

        // Fallback for subject columns if headers didn't match keyword heuristics
        if (subjectCols.length === 0) {
          for (let c = 5; c < headers.length; c++) {
            if (headers[c]) subjectCols.push({ index: c, name: headers[c] });
          }
        }

        // Map uploaded rows
        const uploadedRows = [];
        rows.forEach((row, idx) => {
          if (!row || row.length === 0 || (!row[rollColIdx] && !row[nameColIdx])) return;

          const rawRoll = String(row[rollColIdx] || '').trim();
          const rawName = String(row[nameColIdx] || '').trim();
          const rawClass = String(row[classColIdx] || (targetSemester <= 4 ? "SE" : targetSemester <= 6 ? "TE" : "BE")).toUpperCase().trim();
          const rawGender = genderColIdx !== -1 && row[genderColIdx] ? String(row[genderColIdx]).trim() : '';
          const rawAttendance = attendanceColIdx !== -1 && !isNaN(Number(row[attendanceColIdx])) ? Number(row[attendanceColIdx]) : 85;

          let rawTotalMarks = 0;
          let subjectCount = 0;
          let backlogs = 0;
          const subjectScores = {};

          subjectCols.forEach((col, sIdx) => {
            const mark = Number(row[col.index]);
            if (!isNaN(mark) && mark >= 0) {
              const maxMark = col.name.includes('50') ? 50 : col.name.includes('25') ? 25 : col.name.includes('75') ? 75 : 100;
              const grade = getGradeInfo(mark, maxMark);
              if (grade.grade === "F") backlogs++;
              rawTotalMarks += mark;
              subjectCount++;

              const cleanSubName = col.name.replace(/\s*\[.*?\]|\s*\(.*?\)/g, '').trim();
              const subCode = `SUB_${targetSemester}_${sIdx + 1}`;

              subjectScores[subCode] = {
                subjectName: cleanSubName || col.name,
                short: cleanSubName.substring(0, 10),
                credits: maxMark <= 25 ? 1 : maxMark <= 50 ? 2 : 3,
                marks: mark,
                maxMarks: maxMark,
                grade: grade.grade,
                points: grade.points,
                isBacklog: grade.grade === "F"
              };
            }
          });

          const avgMark = subjectCount > 0 ? (rawTotalMarks / subjectCount) : (65 + (idx % 25));
          const calculatedCgpa = Number(((avgMark / 10) * 0.95 + 0.5).toFixed(2));
          const boundedCgpa = Math.min(10.0, Math.max(3.0, calculatedCgpa));

          uploadedRows.push({
            rowIndex: idx,
            rollNo: rawRoll,
            name: rawName,
            class: rawClass,
            gender: rawGender,
            attendance: rawAttendance,
            cgpa: boundedCgpa,
            backlogs,
            subjectScores,
            avgMark
          });
        });

        // Determine effective cohort
        const batchCohort = (cohortStudents && cohortStudents.length > 0)
          ? cohortStudents.filter(s => s.batch === targetBatch)
          : (targetBatch === "2024-2028" ? INITIAL_STUDENTS.filter(s => s.batch === "2024-2028") : []);

        const parsedStudents = [];

        if (targetBatch === "2024-2028" && batchCohort.length > 0) {
          // BATCH 2024-2028: EXACT COHORT & GENDER PRESERVATION
          // Count will NOT increase (always exactly 63 students)
          // Male count (44) and Female count (19) remain strictly preserved
          // Only academic marks, semester results, and CGPA are updated!
          batchCohort.forEach((existingStudent, cIdx) => {
            // Find match in uploadedRows by roll number, seat number, name, or sequence index
            const match = uploadedRows.find(u => 
              (u.rollNo && (u.rollNo.toUpperCase() === existingStudent.rollNo.toUpperCase() || (existingStudent.seatNo && u.rollNo.toUpperCase() === existingStudent.seatNo.toUpperCase()))) ||
              (u.name && existingStudent.name && u.name.trim().toLowerCase() === existingStudent.name.trim().toLowerCase())
            ) || (cIdx < uploadedRows.length ? uploadedRows[cIdx] : null);

            if (match && Object.keys(match.subjectScores).length > 0) {
              const currentSem = Number(targetSemester) || 4;
              let sEarned = 0;
              let sCredits = 0;
              let sBacklogs = 0;

              Object.values(match.subjectScores).forEach(subj => {
                sEarned += subj.points * subj.credits;
                sCredits += subj.credits;
                if (subj.isBacklog) sBacklogs++;
              });

              const semSgpa = sCredits > 0 ? Number((sEarned / sCredits).toFixed(2)) : match.cgpa;
              const newSemResult = {
                semesterNumber: currentSem,
                sgpa: semSgpa,
                earnedCredits: sEarned,
                totalCredits: sCredits || 21,
                backlogs: sBacklogs,
                status: sBacklogs === 0 ? (semSgpa >= 7.5 ? "Distinction" : "First Class") : "ATKT / Fail",
                subjects: match.subjectScores
              };

              const mergedSemesterResults = {
                ...(existingStudent.semesterResults || {}),
                [currentSem]: newSemResult
              };

              // Recalculate cumulative CGPA & backlogs
              let totalEarned = 0;
              let totalCreds = 0;
              let totalActiveBacklogs = 0;
              Object.values(mergedSemesterResults).forEach(sem => {
                const creds = sem.totalCredits || 21;
                const earned = sem.earnedCredits || (sem.sgpa * creds);
                totalEarned += earned;
                totalCreds += creds;
                if (sem.subjects) {
                  Object.values(sem.subjects).forEach(subj => {
                    if (subj.isBacklog || subj.grade === "F") totalActiveBacklogs++;
                  });
                } else if (sem.backlogs) {
                  totalActiveBacklogs += sem.backlogs;
                }
              });

              const overallCgpa = totalCreds > 0 ? Number((totalEarned / totalCreds).toFixed(2)) : semSgpa;
              let tier = "First Class";
              if (totalActiveBacklogs > 0) tier = "At-Risk (Backlogs)";
              else if (overallCgpa >= 8.5) tier = "Outstanding";
              else if (overallCgpa >= 7.5) tier = "Distinction";
              else if (overallCgpa >= 6.0) tier = "First Class";
              else tier = "Pass Class";

              parsedStudents.push({
                ...existingStudent,
                attendance: match.attendance || existingStudent.attendance,
                activeBacklogs: totalActiveBacklogs,
                cgpa: overallCgpa,
                performanceTier: tier,
                semesterResults: mergedSemesterResults,
                domainScores: {
                  hardwareEmbedded: Math.round(match.avgMark * 0.9),
                  iotNetworking: Math.round(match.avgMark * 0.95),
                  softwareProgramming: Math.round(match.avgMark * 1.0),
                  cloudDataAnalytics: Math.round(match.avgMark * 0.88),
                  cyberSecurity: Math.round(match.avgMark * 0.85)
                }
              });
            } else {
              // No new marks uploaded for this student: retain existing data completely
              parsedStudents.push(existingStudent);
            }
          });
        } else {
          // Other batches or custom cohorts
          uploadedRows.forEach((u, idx) => {
            const currentSem = Number(targetSemester) || 4;
            parsedStudents.push({
              id: `STU_${u.rollNo || idx}`,
              rollNo: u.rollNo || `24IOT${String(idx + 1).padStart(3, '0')}`,
              seatNo: u.rollNo || `24IOT${String(idx + 1).padStart(3, '0')}`,
              prn: `722SE99${String(idx + 1).padStart(3, '0')}`,
              name: u.name || `Student ${idx + 1}`,
              gender: u.gender || (idx % 2 === 0 ? "Female" : "Male"),
              batch: targetBatch,
              class: u.class || "SE",
              attendance: u.attendance,
              activeBacklogs: u.backlogs,
              cgpa: u.cgpa,
              performanceTier: u.backlogs > 0 ? "At-Risk (Backlogs)" : u.cgpa >= 8.5 ? "Outstanding" : u.cgpa >= 7.5 ? "Distinction" : "First Class",
              semesterResults: {
                [currentSem]: {
                  semesterNumber: currentSem,
                  sgpa: u.cgpa,
                  backlogs: u.backlogs,
                  status: u.backlogs === 0 ? "Pass" : "ATKT / Fail",
                  subjects: u.subjectScores
                }
              },
              domainScores: {
                hardwareEmbedded: Math.round(u.avgMark * 0.9),
                iotNetworking: Math.round(u.avgMark * 0.95),
                softwareProgramming: Math.round(u.avgMark * 1.0),
                cloudDataAnalytics: Math.round(u.avgMark * 0.88),
                cyberSecurity: Math.round(u.avgMark * 0.85)
              }
            });
          });
        }

        const maleCount = parsedStudents.filter(s => s.gender === "Male").length;
        const femaleCount = parsedStudents.filter(s => s.gender === "Female").length;

        resolve({
          fileName: file.name,
          studentCount: parsedStudents.length,
          maleCount,
          femaleCount,
          isCohortPreserved: targetBatch === "2024-2028",
          students: parsedStudents
        });
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = (err) => reject(err);
    reader.readAsArrayBuffer(file);
  });
}

// Download Academic Audit Excel Workbook
export function exportAcademicAuditExcel(students, departmentInfo) {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Executive Summary
  const seList = students.filter(s => s.class === "SE");
  const teList = students.filter(s => s.class === "TE");
  const beList = students.filter(s => s.class === "BE");

  const summaryRows = [
    ["DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING (IoT) - ACADEMIC AUDIT REPORT"],
    ["Academic Year", departmentInfo.academicYear],
    ["Generated On", new Date().toLocaleString()],
    ["Total Enrolled Students", students.length],
    [],
    ["Class", "Total Students", "Cleared / Passed", "Pass %", "Distinction Count", "Backlog Count", "Mean CGPA"],
    [
      "SE (Second Year)",
      seList.length,
      seList.filter(s => s.activeBacklogs === 0).length,
      `${((seList.filter(s => s.activeBacklogs === 0).length / (seList.length || 1)) * 100).toFixed(1)}%`,
      seList.filter(s => s.cgpa >= 7.5 && s.activeBacklogs === 0).length,
      seList.filter(s => s.activeBacklogs > 0).length,
      (seList.reduce((a, s) => a + s.cgpa, 0) / (seList.length || 1)).toFixed(2)
    ],
    [
      "TE (Third Year)",
      teList.length,
      teList.filter(s => s.activeBacklogs === 0).length,
      `${((teList.filter(s => s.activeBacklogs === 0).length / (teList.length || 1)) * 100).toFixed(1)}%`,
      teList.filter(s => s.cgpa >= 7.5 && s.activeBacklogs === 0).length,
      teList.filter(s => s.activeBacklogs > 0).length,
      (teList.reduce((a, s) => a + s.cgpa, 0) / (teList.length || 1)).toFixed(2)
    ],
    [
      "BE (Final Year)",
      beList.length,
      beList.filter(s => s.activeBacklogs === 0).length,
      `${((beList.filter(s => s.activeBacklogs === 0).length / (beList.length || 1)) * 100).toFixed(1)}%`,
      beList.filter(s => s.cgpa >= 7.5 && s.activeBacklogs === 0).length,
      beList.filter(s => s.activeBacklogs > 0).length,
      (beList.reduce((a, s) => a + s.cgpa, 0) / (beList.length || 1)).toFixed(2)
    ]
  ];
  const wsSummary = XLSX.utils.aoa_to_sheet(summaryRows);
  XLSX.utils.book_append_sheet(wb, wsSummary, "Executive Summary");

  // Sheet 2: Complete Student Directory
  const studentRows = [
    ["Roll No", "PRN", "Name", "Class", "Gender", "Attendance %", "CGPA", "Active Backlogs", "Performance Status"]
  ];
  students.forEach(s => {
    studentRows.push([
      s.rollNo,
      s.prn,
      s.name,
      s.class,
      s.gender,
      `${s.attendance}%`,
      s.cgpa,
      s.activeBacklogs,
      s.performanceTier
    ]);
  });
  const wsStudents = XLSX.utils.aoa_to_sheet(studentRows);
  XLSX.utils.book_append_sheet(wb, wsStudents, "Student Roster");

  // Sheet 3: At-Risk Students for Mentoring
  const atRiskRows = [
    ["ACADEMIC AUDIT - AT-RISK STUDENTS REQUIRING REMEDIAL ACTION"],
    ["Roll No", "Name", "Class", "CGPA", "Backlogs Count", "Attendance %", "Recommended Action"]
  ];
  students.filter(s => s.activeBacklogs > 0 || s.cgpa < 6.0).forEach(s => {
    atRiskRows.push([
      s.rollNo,
      s.name,
      s.class,
      s.cgpa,
      s.activeBacklogs,
      `${s.attendance}%`,
      s.activeBacklogs > 2 ? "Urgent Parent Meeting & Backlog Coaching" : "Assign Faculty Mentor & Tutorial Extra Classes"
    ]);
  });
  const wsAtRisk = XLSX.utils.aoa_to_sheet(atRiskRows);
  XLSX.utils.book_append_sheet(wb, wsAtRisk, "At-Risk Mentoring List");

  // Write and download
  XLSX.writeFile(wb, `CSE_IoT_Academic_Audit_${departmentInfo.academicYear.replace("-", "_")}.xlsx`);
}

// Download Sample Template for Data Ingestion
export function downloadSampleTemplate(targetClass = "SE", targetBatch = "2024-2028", targetSemester = 4, cohortStudents = []) {
  const wb = XLSX.utils.book_new();

  // If Batch 2024-2028, pre-populate with the 63 enrolled students and relevant semester subjects
  const batchCohort = (cohortStudents && cohortStudents.length > 0)
    ? cohortStudents.filter(s => s.batch === targetBatch)
    : (targetBatch === "2024-2028" ? INITIAL_STUDENTS.filter(s => s.batch === "2024-2028") : []);

  const semSubjects = SUBJECT_METADATA[`${targetClass}-SEM${targetSemester}`] || [];

  if (targetBatch === "2024-2028" && batchCohort.length > 0) {
    const subjectHeaders = semSubjects.length > 0
      ? semSubjects.map(s => `${s.name} [${s.code}] (Max ${s.maxMarks || 100})`)
      : ["Subject 1 (Marks 0-100)", "Subject 2 (Marks 0-100)", "Subject 3 (Marks 0-100)", "Subject 4 (Marks 0-100)", "Subject 5 (Marks 0-100)"];

    const sampleHeaders = [
      "Roll No",
      "Student Name",
      "Class (SE/TE/BE)",
      "Gender (Male/Female)",
      "Attendance Percentage",
      ...subjectHeaders
    ];

    const sampleData = [sampleHeaders];

    batchCohort.forEach(s => {
      const semData = s.semesterResults?.[targetSemester];
      const marksCols = semSubjects.map(sub => {
        if (semData?.subjects?.[sub.code]) {
          return semData.subjects[sub.code].marks;
        }
        return Math.floor(70 + Math.random() * 25);
      });

      sampleData.push([
        s.rollNo,
        s.name,
        s.class || targetClass,
        s.gender,
        s.attendance || 88,
        ...marksCols
      ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(sampleData);
    XLSX.utils.book_append_sheet(wb, ws, `Batch_${targetBatch}_Sem${targetSemester}`);
    XLSX.writeFile(wb, `CSE_IoT_Batch_2024_2028_Sem${targetSemester}_Enrolled_Cohort_Template.xlsx`);
  } else {
    const sampleHeaders = [
      "Roll No",
      "Student Name",
      "Class (SE/TE/BE)",
      "Gender (Male/Female)",
      "Attendance Percentage",
      "Subject 1 (Marks 0-100)",
      "Subject 2 (Marks 0-100)",
      "Subject 3 (Marks 0-100)",
      "Subject 4 (Marks 0-100)",
      "Subject 5 (Marks 0-100)"
    ];

    const sampleData = [
      sampleHeaders,
      [`${targetClass === "SE" ? "24IOT" : targetClass === "TE" ? "23IOT" : "22IOT"}001`, "Aarav Sharma", targetClass, "Male", 92, 85, 78, 90, 88, 92],
      [`${targetClass === "SE" ? "24IOT" : targetClass === "TE" ? "23IOT" : "22IOT"}002`, "Ananya Patil", targetClass, "Female", 88, 72, 65, 80, 74, 85],
      [`${targetClass === "SE" ? "24IOT" : targetClass === "TE" ? "23IOT" : "22IOT"}003`, "Rohan Deshmukh", targetClass, "Male", 74, 42, 35, 50, 48, 60],
    ];

    const ws = XLSX.utils.aoa_to_sheet(sampleData);
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, `CSE_IoT_Result_Template_${targetClass}.xlsx`);
  }
}
