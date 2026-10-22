import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import OverviewDashboard from './components/OverviewDashboard';
import ClassComparison from './components/ClassComparison';
import SemesterAnalysis from './components/SemesterAnalysis';
import SubjectAnalysis from './components/SubjectAnalysis';
import StudentExplorer from './components/StudentExplorer';
import StudentProfileModal from './components/StudentProfileModal';
import InsightsDrawer from './components/InsightsDrawer';
import AuditReportModal from './components/AuditReportModal';
import DataUploadModal from './components/DataUploadModal';
import BatchModal from './components/BatchModal';
import AccessDeniedModal from './components/AccessDeniedModal';
import LoginPage, { PRESET_USERS } from './components/LoginPage';
import StudentPersonalDashboard from './components/StudentPersonalDashboard';
import { INITIAL_STUDENTS, DEFAULT_BATCHES, DEPARTMENT_INFO, getGradeInfo, SUBJECT_METADATA } from './data/mockData';
import { exportAcademicAuditExcel } from './utils/fileParser';
import { generateAuditInsights } from './utils/statistics';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Master Student Dataset
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem('audit_students_data_se_ay_2025_2026');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]?.semesterResults && (parsed[0].semesterResults[3] || parsed[0].semesterResults[4])) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Failed to parse saved students:", e);
    }
    return INITIAL_STUDENTS;
  });

  // Academic Batches
  const [batches, setBatches] = useState(() => {
    const saved = localStorage.getItem('audit_batches_data_v2');
    return saved ? JSON.parse(saved) : DEFAULT_BATCHES;
  });

  // Selected Active Batch
  const [selectedBatch, setSelectedBatch] = useState('2024-2028');

  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('audit_auth_user') || localStorage.getItem('audit_auth_user_v2');
    return saved ? JSON.parse(saved) : PRESET_USERS.hod;
  });

  const [selectedClass, setSelectedClass] = useState('SE');
  const [selectedSemester, setSelectedSemester] = useState('ALL');
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [isAccessDeniedModalOpen, setIsAccessDeniedModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync students data to localStorage
  useEffect(() => {
    localStorage.setItem('audit_students_data_se_ay_2025_2026', JSON.stringify(students));
  }, [students]);

  // Sync batches to localStorage
  useEffect(() => {
    localStorage.setItem('audit_batches_data_v2', JSON.stringify(batches));
  }, [batches]);

  // Trigger temporary notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Add new batch handler
  const handleAddBatch = (newBatch) => {
    setBatches(prev => [...prev, newBatch]);
    setSelectedBatch(newBatch.id);
    setSelectedClass(newBatch.class);
    setSelectedSemester('ALL');
    triggerToast(`Added & activated ${newBatch.name} (${newBatch.yearLabel})`);
  };

  // Delete/remove custom batch handler
  const handleDeleteBatch = (batchId) => {
    setBatches(prev => prev.filter(b => b.id !== batchId));
    if (selectedBatch === batchId) {
      setSelectedBatch('2024-2028');
      setSelectedClass('SE');
    }
    triggerToast(`Removed batch ${batchId}`);
  };

  // Login handler
  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('audit_auth_user', JSON.stringify(user));
    triggerToast(`Logged in as ${user.name} (${user.role})`);
  };

  // Logout handler
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('audit_auth_user');
  };

  // Student Registration Handler (Roll No, Year, Password, Name)
  const handleRegisterStudent = ({ name, rollNo, class: studentClass, _password }) => {
    let existingStudent = students.find(s => s.rollNo.toUpperCase() === rollNo.toUpperCase());

    if (!existingStudent) {
      const sems = studentClass === 'SE' ? [3, 4] : studentClass === 'TE' ? [3, 4, 5, 6] : [3, 4, 5, 6, 7, 8];
      const semesterResults = {};
      let totalEarned = 0;
      let totalCreds = 0;

      sems.forEach(sNum => {
        const subjects = SUBJECT_METADATA[`${studentClass}-SEM${sNum}`] || [];
        const subjectScores = {};
        let sEarned = 0;
        let sCreds = 0;

        subjects.forEach(subj => {
          const marks = 75 + Math.floor(Math.random() * 18);
          const gInfo = getGradeInfo(marks);
          subjectScores[subj.code] = {
            subjectName: subj.name,
            short: subj.short,
            credits: subj.credits,
            faculty: subj.faculty,
            marks,
            maxMarks: 100,
            grade: gInfo.grade,
            points: gInfo.points,
            isBacklog: false
          };
          sEarned += gInfo.points * subj.credits;
          sCreds += subj.credits;
        });

        const sgpa = Number((sEarned / (sCreds || 1)).toFixed(2));
        semesterResults[sNum] = {
          semesterNumber: sNum,
          sgpa,
          earnedCredits: sEarned,
          totalCredits: sCreds,
          backlogs: 0,
          status: 'Distinction',
          subjects: subjectScores
        };
        totalEarned += sEarned;
        totalCreds += sCreds;
      });

      const cgpa = Number((totalEarned / (totalCreds || 1)).toFixed(2));

      const newStudent = {
        id: `STU_${rollNo}`,
        rollNo,
        prn: `722${studentClass}9988${Math.floor(100 + Math.random() * 899)}`,
        name,
        gender: 'Not Specified',
        batch: selectedBatch !== 'ALL' ? selectedBatch : '2024-2028',
        class: studentClass,
        attendance: 88,
        activeBacklogs: 0,
        cgpa,
        performanceTier: cgpa >= 8.5 ? 'Outstanding' : 'Distinction',
        semesterResults,
        domainScores: {
          hardwareEmbedded: 84,
          iotNetworking: 86,
          softwareProgramming: 90,
          cloudDataAnalytics: 82,
          cyberSecurity: 80
        }
      };

      setStudents(prev => [newStudent, ...prev]);
      existingStudent = newStudent;
    }

    const userSession = {
      id: existingStudent.id,
      name: existingStudent.name,
      rollNo: existingStudent.rollNo,
      class: existingStudent.class,
      email: `${existingStudent.rollNo.toLowerCase()}@cseiot.edu`,
      role: 'Student',
      roleLabel: `Undergraduate Student (${existingStudent.class})`,
      designation: `Roll: ${existingStudent.rollNo} (${existingStudent.class} Engineering)`,
      canUpload: false,
      canExport: false,
      avatar: existingStudent.name.split(' ').map(n => n[0]).join('').slice(0, 2)
    };

    setCurrentUser(userSession);
    localStorage.setItem('audit_auth_user', JSON.stringify(userSession));
    triggerToast(`Account created! Welcome to your personal performance portal, ${name}.`);
  };

  // Switch to HOD role directly from Access Denied Modal
  const handleSwitchToHOD = () => {
    const hodUser = PRESET_USERS.hod;
    setCurrentUser(hodUser);
    localStorage.setItem('audit_auth_user', JSON.stringify(hodUser));
    setIsAccessDeniedModalOpen(false);
    triggerToast(`Switched account to ${hodUser.name} (HOD / Author)`);
    setIsUploadModalOpen(true);
  };

  // Protected Upload Handler
  const handleAttemptUpload = () => {
    if (currentUser?.canUpload) {
      setIsUploadModalOpen(true);
    } else {
      setIsAccessDeniedModalOpen(true);
    }
  };

  // Reset to original dataset
  const handleResetData = () => {
    if (!currentUser?.canUpload) {
      setIsAccessDeniedModalOpen(true);
      return;
    }
    const freshData = INITIAL_STUDENTS;
    setStudents(freshData);
    setBatches(DEFAULT_BATCHES);
    setSelectedBatch('2024-2028');
    setSelectedClass('SE');
    setSelectedSemester('ALL');
    triggerToast("Reset to official SE 2024-2028 gazette dataset (63 students).");
  };

  // Delete individual student record (HOD / Author only)
  const handleDeleteStudent = (studentIdOrRollNo) => {
    if (!currentUser?.canUpload && currentUser?.role !== 'HOD / Author') {
      setIsAccessDeniedModalOpen(true);
      return;
    }
    const target = students.find(s => s.id === studentIdOrRollNo || s.rollNo === studentIdOrRollNo);
    if (!target) return;

    setStudents(prev => prev.filter(s => s.id !== target.id && s.rollNo !== target.rollNo));
    if (selectedStudent && (selectedStudent.id === target.id || selectedStudent.rollNo === target.rollNo)) {
      setSelectedStudent(null);
    }
    triggerToast(`Permanently deleted student record for ${target.name} (${target.rollNo}).`);
  };

  // Helper to open student modal in-place without redirecting away from current dashboard
  const handleSelectStudent = (stu) => {
    setSelectedStudent(stu);
  };

  // Handle uploaded data with cohort & gender preservation for batch 2024-2028
  const handleDataUploaded = (newStudents, targetBatch = '2024-2028') => {
    setStudents(prev => {
      const others = prev.filter(s => s.batch !== targetBatch);
      let updatedBatchStudents;

      if (targetBatch === '2024-2028') {
        // Enrolled cohort for Batch 2024-2028: strictly preserve existing student roster & gender count (44M / 19F)
        let currentCohort = prev.filter(s => s.batch === '2024-2028');
        if (currentCohort.length === 0) {
          currentCohort = INITIAL_STUDENTS.filter(s => s.batch === '2024-2028');
        }

        updatedBatchStudents = currentCohort.map((existing, idx) => {
          // Match by Roll No, Seat No, PRN, Name, or sequence index
          const match = newStudents.find(n =>
            (n.rollNo && (n.rollNo.toUpperCase() === existing.rollNo.toUpperCase() || (existing.seatNo && n.rollNo.toUpperCase() === existing.seatNo.toUpperCase()))) ||
            (n.seatNo && (n.seatNo.toUpperCase() === existing.rollNo.toUpperCase() || (existing.seatNo && n.seatNo.toUpperCase() === existing.seatNo.toUpperCase()))) ||
            (n.prn && existing.prn && n.prn.toUpperCase() === existing.prn.toUpperCase()) ||
            (n.name && existing.name && n.name.trim().toLowerCase() === existing.name.trim().toLowerCase())
          ) || (idx < newStudents.length ? newStudents[idx] : null);

          if (!match) {
            return existing; // Keep existing record intact if not in uploaded file
          }

          // Merge semester results
          const mergedSemResults = {
            ...(existing.semesterResults || {}),
            ...(match.semesterResults || {})
          };

          // Recalculate cumulative CGPA & backlogs across all semesters
          const allSems = Object.values(mergedSemResults);
          let totalEarned = 0;
          let totalCreds = 0;
          let totalActiveBacklogs = 0;

          allSems.forEach(sem => {
            const creds = sem.totalCredits || 21;
            const earned = sem.earnedCredits || ((sem.sgpa || 0) * creds);
            totalEarned += earned;
            totalCreds += creds;

            if (sem.subjects) {
              Object.values(sem.subjects).forEach(subj => {
                if (subj.isBacklog || subj.grade === 'F') totalActiveBacklogs++;
              });
            } else if (sem.backlogs) {
              totalActiveBacklogs += sem.backlogs;
            }
          });

          const calculatedCgpa = totalCreds > 0 ? Number((totalEarned / totalCreds).toFixed(2)) : (match.cgpa || existing.cgpa);

          let performanceTier = 'First Class';
          if (totalActiveBacklogs > 0) performanceTier = 'At-Risk (Backlogs)';
          else if (calculatedCgpa >= 8.5) performanceTier = 'Outstanding';
          else if (calculatedCgpa >= 7.5) performanceTier = 'Distinction';
          else if (calculatedCgpa >= 6.0) performanceTier = 'First Class';
          else performanceTier = 'Pass Class';

          return {
            ...existing,
            // STRICTLY PRESERVE DEMOGRAPHIC IDENTITY & GENDER
            id: existing.id,
            rollNo: existing.rollNo,
            seatNo: existing.seatNo || existing.rollNo,
            prn: existing.prn,
            name: existing.name,
            gender: existing.gender, // 44 Male / 19 Female remain completely unchanged
            batch: '2024-2028',
            class: existing.class || 'SE',
            // UPDATE ACADEMIC TRANSCRIPTS AND PERFORMANCE
            attendance: match.attendance !== undefined ? match.attendance : existing.attendance,
            activeBacklogs: totalActiveBacklogs,
            cgpa: calculatedCgpa,
            performanceTier,
            semesterResults: mergedSemResults,
            domainScores: match.domainScores || existing.domainScores
          };
        });
      } else {
        updatedBatchStudents = newStudents;
      }

      return [...others, ...updatedBatchStudents];
    });

    setBatches(prev => prev.map(b => b.id === targetBatch ? { ...b, isRealData: true } : b));
    setSelectedBatch(targetBatch);

    if (targetBatch === '2024-2028') {
      triggerToast("Results updated for Batch 2024–2028. Total cohort (63) and demographics (44M / 19F) preserved.");
    } else {
      triggerToast(`Successfully loaded ${newStudents.length} student records for ${targetBatch}.`);
    }
  };

  // Handle Excel export
  const handleExportExcel = () => {
    exportAcademicAuditExcel(students, DEPARTMENT_INFO);
    triggerToast("Academic Audit Excel workbook downloaded.");
  };

  // If not authenticated, render Login Page
  if (!currentUser) {
    return (
      <LoginPage
        onLogin={handleLogin}
        onRegisterStudent={handleRegisterStudent}
        allStudents={students}
      />
    );
  }

  const isStudentRole = currentUser.role === 'Student';
  const currentStudentData = isStudentRole
    ? (students.find(s => s.rollNo === currentUser.rollNo || s.id === currentUser.id) || students[0])
    : null;

  const insightsCount = generateAuditInsights(students).filter(i => i.type === 'danger').length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        onOpenUpload={handleAttemptUpload}
        onExportExcel={handleExportExcel}
        onOpenReport={() => setIsReportModalOpen(true)}
        onResetData={handleResetData}
        totalStudents={students.length}
        auditInsightsCount={insightsCount}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* If Logged in as Student -> Render Private Student Dashboard */}
        {isStudentRole ? (
          <StudentPersonalDashboard
            student={currentStudentData}
            allStudents={students}
          />
        ) : (
          /* If Logged in as HOD or Faculty -> Render Branch-Wide Academic Audit */
          <>
            {/* Faculty Read-Only Banner */}
            {currentUser.role === 'Course Faculty' && (
              <div className="mb-4 p-3 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-xs text-indigo-200 flex items-center justify-between shadow-sm">
                <span>
                  Viewing Department Academic Audit in <strong>Course Faculty Mode</strong> (Read-only Analytics).
                </span>
                <span className="text-[11px] text-slate-400">Result uploading is reserved for HOD / Author</span>
              </div>
            )}

            {/* Department Tab Views */}
            {activeTab === 'overview' && (
              <OverviewDashboard
                students={students}
                selectedClass={selectedClass}
                setSelectedClass={setSelectedClass}
                selectedSemester={selectedSemester}
                setSelectedSemester={setSelectedSemester}
                onSelectStudent={handleSelectStudent}
                onNavigateTab={(tab) => setActiveTab(tab)}
                batches={batches}
                selectedBatch={selectedBatch}
                setSelectedBatch={setSelectedBatch}
                onOpenBatchModal={() => setIsBatchModalOpen(true)}
              />
            )}

            {activeTab === 'class-comparison' && (
              <ClassComparison
                students={students}
                onSelectStudent={handleSelectStudent}
                batches={batches}
                selectedBatch={selectedBatch}
                setSelectedBatch={setSelectedBatch}
              />
            )}

            {activeTab === 'semester-analysis' && (
              <SemesterAnalysis
                students={students}
                onSelectSubject={() => setActiveTab('subject-analysis')}
                batches={batches}
                selectedBatch={selectedBatch}
                setSelectedBatch={setSelectedBatch}
              />
            )}

            {activeTab === 'subject-analysis' && (
              <SubjectAnalysis
                students={students}
                batches={batches}
                selectedBatch={selectedBatch}
                setSelectedBatch={setSelectedBatch}
                onSelectStudent={handleSelectStudent}
              />
            )}

            {activeTab === 'students' && (
              <StudentExplorer
                students={students}
                selectedStudent={selectedStudent}
                onSelectStudent={(stu) => setSelectedStudent(stu)}
                onCloseStudentModal={() => setSelectedStudent(null)}
                batches={batches}
                currentUser={currentUser}
                onDeleteStudent={handleDeleteStudent}
              />
            )}

            {activeTab === 'insights' && (
              <InsightsDrawer
                students={students}
                onNavigateTab={(tab) => setActiveTab(tab)}
              />
            )}
          </>
        )}
      </main>

      {/* Modals */}
      {isUploadModalOpen && (
        <DataUploadModal
          onDataUploaded={handleDataUploaded}
          onClose={() => setIsUploadModalOpen(false)}
          batches={batches}
          defaultBatch={selectedBatch !== 'ALL' ? selectedBatch : '2024-2028'}
          allStudents={students}
        />
      )}

      {isBatchModalOpen && (
        <BatchModal
          isOpen={isBatchModalOpen}
          onClose={() => setIsBatchModalOpen(false)}
          batches={batches}
          onAddBatch={handleAddBatch}
          onDeleteBatch={handleDeleteBatch}
          selectedBatch={selectedBatch}
          setSelectedBatch={setSelectedBatch}
        />
      )}

      {isAccessDeniedModalOpen && (
        <AccessDeniedModal
          role={currentUser.role}
          onClose={() => setIsAccessDeniedModalOpen(false)}
          onSwitchToHOD={handleSwitchToHOD}
        />
      )}

      {isReportModalOpen && (
        <AuditReportModal
          students={students}
          onClose={() => setIsReportModalOpen(false)}
        />
      )}

      {/* Student 360° Profile Modal (accessible in-place from any card or dashboard) */}
      {selectedStudent && (
        <StudentProfileModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
          isHOD={currentUser?.role === 'HOD / Author'}
          onDeleteStudent={handleDeleteStudent}
        />
      )}

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-slate-900 border border-sky-500/40 text-white text-xs shadow-2xl flex items-center space-x-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 bg-slate-950/80 text-center text-xs text-slate-500 no-print">
        <p>
          CSE–IoT Department Academic Audit & Outcome Attainment Portal • Quality Assurance & Accreditation System
        </p>
      </footer>
    </div>
  );
}
