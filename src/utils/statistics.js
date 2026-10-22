// Academic Audit Statistical Computations Engine

export function calculateMean(numbers) {
  if (!numbers || numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return Number((sum / numbers.length).toFixed(2));
}

export function calculateMedian(numbers) {
  if (!numbers || numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0) {
    return Number(sorted[mid].toFixed(2));
  }
  return Number(((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2));
}

export function calculateStandardDeviation(numbers) {
  if (!numbers || numbers.length <= 1) return 0;
  const mean = calculateMean(numbers);
  const squaredDiffs = numbers.map(val => Math.pow(val - mean, 2));
  const variance = squaredDiffs.reduce((acc, val) => acc + val, 0) / (numbers.length - 1);
  return Number(Math.sqrt(variance).toFixed(2));
}

// Compute Audit summary for a specific Class (SE/TE/BE) and optional Semester (e.g. Sem 3, Sem 4, etc.)
export function computeClassAuditSummary(students, targetClass = "ALL", targetSem = "ALL") {
  let filtered = students;

  if (targetClass !== "ALL") {
    filtered = filtered.filter(s => {
      if (targetClass === "SE") return s.semesterResults?.[3] || s.semesterResults?.[4] || s.class === "SE";
      if (targetClass === "TE") return s.semesterResults?.[5] || s.semesterResults?.[6] || s.class === "TE";
      if (targetClass === "BE") return s.semesterResults?.[7] || s.semesterResults?.[8] || s.class === "BE";
      return s.class === targetClass;
    });
  }

  if (targetSem !== "ALL") {
    const sNum = Number(targetSem);
    filtered = filtered.filter(s => s.semesterResults && s.semesterResults[sNum]);
  }

  const totalCount = filtered.length;
  if (totalCount === 0) {
    return {
      class: targetClass,
      semester: targetSem,
      isSpecificSem: targetSem !== "ALL",
      totalCount: 0,
      passCount: 0,
      passPercentage: 0,
      distinctionCount: 0,
      distinctionPercentage: 0,
      firstClassCount: 0,
      secondClassCount: 0,
      passClassCount: 0,
      backlogStudentsCount: 0,
      backlogPercentage: 0,
      meanCGPA: 0,
      medianCGPA: 0,
      stdDevCGPA: 0,
      highestCGPA: 0,
      lowestCGPA: 0,
      topRankers: [],
      atRiskCount: 0,
      atRiskStudents: [],
      genderStats: {
        maleCount: 0,
        femaleCount: 0,
        malePassRate: 0,
        femalePassRate: 0
      }
    };
  }

  // If specific semester is chosen, compute term SGPA instead of cumulative CGPA
  const isSpecificSem = targetSem !== "ALL";
  const sNum = Number(targetSem);

  const scoreValues = isSpecificSem
    ? filtered.map(s => s.semesterResults[sNum]?.sgpa || 0)
    : filtered.map(s => s.cgpa);

  const meanCGPA = calculateMean(scoreValues);
  const medianCGPA = calculateMedian(scoreValues);
  const stdDevCGPA = calculateStandardDeviation(scoreValues);

  // Distinction / Class breakdown
  let distinctionCount = 0;
  let firstClassCount = 0;
  let secondClassCount = 0;
  let passClassCount = 0;
  let backlogStudentsCount = 0;

  filtered.forEach(s => {
    const score = isSpecificSem ? s.semesterResults[sNum]?.sgpa || 0 : s.cgpa;
    const backlogs = isSpecificSem ? s.semesterResults[sNum]?.backlogs || 0 : s.activeBacklogs;

    if (backlogs > 0) {
      backlogStudentsCount++;
    } else if (score >= 7.5) {
      distinctionCount++;
    } else if (score >= 6.5) {
      firstClassCount++;
    } else if (score >= 5.0) {
      secondClassCount++;
    } else {
      passClassCount++;
    }
  });

  const passCount = totalCount - backlogStudentsCount;
  const passPercentage = Number(((passCount / totalCount) * 100).toFixed(1));
  const distinctionPercentage = Number(((distinctionCount / totalCount) * 100).toFixed(1));

  // Top 5 Rankers in this scope
  const topRankers = [...filtered]
    .sort((a, b) => {
      const scoreA = isSpecificSem ? a.semesterResults[sNum]?.sgpa || 0 : a.cgpa;
      const scoreB = isSpecificSem ? b.semesterResults[sNum]?.sgpa || 0 : b.cgpa;
      return scoreB - scoreA || b.attendance - a.attendance;
    })
    .slice(0, 5);

  // At-risk students
  const atRiskStudents = [...filtered]
    .filter(s => {
      const backlogs = isSpecificSem ? s.semesterResults[sNum]?.backlogs || 0 : s.activeBacklogs;
      const score = isSpecificSem ? s.semesterResults[sNum]?.sgpa || 0 : s.cgpa;
      return backlogs > 0 || score < 6.0;
    })
    .sort((a, b) => {
      const scoreA = isSpecificSem ? a.semesterResults[sNum]?.sgpa || 0 : a.cgpa;
      const scoreB = isSpecificSem ? b.semesterResults[sNum]?.sgpa || 0 : b.cgpa;
      return scoreA - scoreB;
    });

  // Gender statistics
  const males = filtered.filter(s => s.gender === "Male");
  const females = filtered.filter(s => s.gender === "Female");
  const malePassedStudents = males.filter(s => (isSpecificSem ? (s.semesterResults[sNum]?.backlogs || 0) === 0 : s.activeBacklogs === 0));
  const femalePassedStudents = females.filter(s => (isSpecificSem ? (s.semesterResults[sNum]?.backlogs || 0) === 0 : s.activeBacklogs === 0));
  const malePassRate = males.length 
    ? Number(((malePassedStudents.length / males.length) * 100).toFixed(1)) 
    : 0;
  const femalePassRate = females.length 
    ? Number(((femalePassedStudents.length / females.length) * 100).toFixed(1)) 
    : 0;

  return {
    class: targetClass,
    semester: targetSem,
    isSpecificSem,
    totalCount,
    passCount,
    passPercentage,
    distinctionCount,
    distinctionPercentage,
    firstClassCount,
    secondClassCount,
    passClassCount,
    backlogStudentsCount,
    backlogPercentage: Number(((backlogStudentsCount / totalCount) * 100).toFixed(1)),
    meanCGPA,
    medianCGPA,
    stdDevCGPA,
    highestCGPA: Math.max(...scoreValues),
    lowestCGPA: Math.min(...scoreValues),
    topRankers,
    atRiskCount: atRiskStudents.length,
    atRiskStudents,
    genderStats: {
      maleCount: males.length,
      femaleCount: females.length,
      malePassedCount: malePassedStudents.length,
      femalePassedCount: femalePassedStudents.length,
      malePassRate,
      femalePassRate
    }
  };
}

// Compute Comparative Matrix between SE, TE, and BE
export function computeClassComparison(students) {
  const classes = ["SE", "TE", "BE"];
  return classes.map(c => computeClassAuditSummary(students, c, "ALL"));
}

// Odd Semester vs Even Semester Comparison per Year
export function computeOddEvenComparison(students, targetClass = "SE") {
  const semPairs = {
    SE: { oddSem: 3, evenSem: 4, oddLabel: "Sem 3 (Odd)", evenLabel: "Sem 4 (Even)" },
    TE: { oddSem: 5, evenSem: 6, oddLabel: "Sem 5 (Odd)", evenLabel: "Sem 6 (Even)" },
    BE: { oddSem: 7, evenSem: 8, oddLabel: "Sem 7 (Odd)", evenLabel: "Sem 8 (Even)" }
  };

  const pair = semPairs[targetClass] || semPairs.SE;
  const oddAudit = computeSemesterAudit(students, pair.oddSem);
  const evenAudit = computeSemesterAudit(students, pair.evenSem);

  return {
    year: targetClass,
    odd: {
      semNumber: pair.oddSem,
      label: pair.oddLabel,
      audit: oddAudit
    },
    even: {
      semNumber: pair.evenSem,
      label: pair.evenLabel,
      audit: evenAudit
    }
  };
}

// Compute Semester-wise Audit Trends
export function computeSemesterAudit(students, semNumber) {
  const semesterKey = Number(semNumber);
  const relevantStudents = students.filter(s => s.semesterResults && s.semesterResults[semesterKey]);
  
  if (relevantStudents.length === 0) return null;

  const totalStudents = relevantStudents.length;
  const semSgpas = relevantStudents.map(s => s.semesterResults[semesterKey].sgpa);
  const meanSGPA = calculateMean(semSgpas);
  const medianSGPA = calculateMedian(semSgpas);
  const stdDevSGPA = calculateStandardDeviation(semSgpas);

  const passedStudents = relevantStudents.filter(s => s.semesterResults[semesterKey].backlogs === 0);
  const passPercentage = Number(((passedStudents.length / totalStudents) * 100).toFixed(1));

  // Subject performance breakdown in this semester
  const subjectCodeSet = new Set();
  relevantStudents.forEach(stu => {
    const semData = stu.semesterResults?.[semesterKey] || stu.semesterResults?.[String(semNumber)];
    if (semData?.subjects) {
      Object.keys(semData.subjects).forEach(c => subjectCodeSet.add(c));
    }
  });
  const subjectCodes = Array.from(subjectCodeSet);
  
  const subjectStats = subjectCodes.map(subCode => {
    // Locate metadata from any student that enrolled in this subject
    let subMeta = null;
    for (const stu of relevantStudents) {
      const semData = stu.semesterResults?.[semesterKey] || stu.semesterResults?.[String(semNumber)];
      if (semData?.subjects?.[subCode]) {
        subMeta = semData.subjects[subCode];
        break;
      }
    }

    const enrolledStudents = relevantStudents.filter(s => {
      const semData = s.semesterResults?.[semesterKey] || s.semesterResults?.[String(semNumber)];
      return semData?.subjects?.[subCode] !== undefined;
    });

    const enrolledCount = enrolledStudents.length || totalStudents;
    const scores = enrolledStudents.map(s => {
      const semData = s.semesterResults?.[semesterKey] || s.semesterResults?.[String(semNumber)];
      return semData?.subjects?.[subCode]?.marks || 0;
    });

    const maxMark = scores.length > 0 ? Math.max(...scores) : 0;
    const minMark = scores.length > 0 ? Math.min(...scores) : 0;
    const meanMarks = calculateMean(scores);

    const fails = enrolledStudents.filter(s => {
      const semData = s.semesterResults?.[semesterKey] || s.semesterResults?.[String(semNumber)];
      const subj = semData?.subjects?.[subCode];
      return subj?.grade === "F" || subj?.isBacklog;
    }).length;

    const subPassRate = Number((((enrolledCount - fails) / enrolledCount) * 100).toFixed(1));

    // Grade breakdown
    const grades = { O: 0, "A+": 0, A: 0, "B+": 0, B: 0, C: 0, F: 0 };
    enrolledStudents.forEach(s => {
      const semData = s.semesterResults?.[semesterKey] || s.semesterResults?.[String(semNumber)];
      const g = semData?.subjects?.[subCode]?.grade;
      if (grades[g] !== undefined) grades[g]++;
    });

    const maxMarks = subMeta?.maxMarks || 100;
    const meanPercentage = Number(((meanMarks / maxMarks) * 100).toFixed(1));

    return {
      code: subCode,
      name: subMeta?.subjectName || subCode,
      short: subMeta?.short || subCode,
      faculty: subMeta?.faculty || "N/A",
      credits: subMeta?.credits || 3,
      maxMarks,
      meanMarks,
      meanPercentage,
      highestMark: maxMark,
      lowestMark: minMark,
      stdDev: calculateStandardDeviation(scores),
      fails,
      passPercentage: subPassRate,
      grades,
      difficultyCategory: subPassRate >= 92 ? "High Scoring" : subPassRate >= 80 ? "Moderate" : "Critical / Remedial"
    };
  });

  return {
    semesterNumber: semesterKey,
    totalStudents,
    passCount: passedStudents.length,
    failCount: totalStudents - passedStudents.length,
    passPercentage,
    meanSGPA,
    medianSGPA,
    stdDevSGPA,
    highestSGPA: Math.max(...semSgpas),
    lowestSGPA: Math.min(...semSgpas),
    subjectStats
  };
}

// Automated Diagnostic Insights Engine
export function generateAuditInsights(students) {
  const insights = [];
  const comparison = computeClassComparison(students);
  const seSummary = comparison.find(c => c.class === "SE");
  const teSummary = comparison.find(c => c.class === "TE");
  const beSummary = comparison.find(c => c.class === "BE");

  // 1. Department Overview Insight
  const overall = computeClassAuditSummary(students, "ALL", "ALL");
  if (overall) {
    insights.push({
      id: "INSIGHT_DEPT_OVERVIEW",
      type: "positive",
      category: "Department Benchmark",
      title: "Overall Department Academic Health",
      description: `CSE-IoT has an overall pass rate of ${overall.passPercentage}% with an average CGPA of ${overall.meanCGPA}/10 across SE, TE, and BE.`,
      action: "Maintain current student mentoring ratios (1:15) and active lab sessions."
    });
  }

  // 2. Class Progression Comparison
  if (seSummary && teSummary && seSummary.totalCount > 0 && teSummary.totalCount > 0) {
    const diff = Number((teSummary.meanCGPA - seSummary.meanCGPA).toFixed(2));
    if (diff < -0.3) {
      insights.push({
        id: "INSIGHT_SE_TE_DIP",
        type: "warning",
        category: "Progression Audit",
        title: "SE to TE Transition Drop Detected",
        description: `Average performance drops by ${Math.abs(diff)} grade points from SE (${seSummary.meanCGPA}) to TE (${teSummary.meanCGPA}). Core embedded and networking subjects present a steeper learning curve.`,
        action: "Organize pre-semester bridge courses and hands-on RTOS hardware bootcamps for TE students."
      });
    } else {
      insights.push({
        id: "INSIGHT_TE_PROGRESSION",
        type: "positive",
        category: "Progression Audit",
        title: "Positive Year-on-Year Progression",
        description: `TE students maintain strong retention with ${teSummary.passPercentage}% clearance and solid hands-on project performance.`,
        action: "Encourage industry hackathons and research paper submissions."
      });
    }
  }

  // 3. Final Year (BE) Placement & Project Readiness
  if (beSummary && beSummary.totalCount > 0) {
    insights.push({
      id: "INSIGHT_BE_EXCELLENCE",
      type: "positive",
      category: "Final Year Audit",
      title: "BE Cohort Capstone & Industry Readiness",
      description: `BE leads with a ${beSummary.distinctionPercentage}% distinction rate and ${beSummary.meanCGPA} mean CGPA. Capstone Phase-I & II show high technical competency in AI/IoT and Smart Systems.`,
      action: "Facilitate patent filing and startup incubation for top 5 capstone projects."
    });
  }

  // 4. Critical Subject Identification Across All Semesters
  const allSems = [3, 4, 5, 6, 7, 8];
  const criticalSubjects = [];
  allSems.forEach(sNum => {
    const semData = computeSemesterAudit(students, sNum);
    if (semData && semData.subjectStats) {
      semData.subjectStats.forEach(subj => {
        if (subj.passPercentage < 82) {
          criticalSubjects.push({ ...subj, semester: sNum });
        }
      });
    }
  });

  if (criticalSubjects.length > 0) {
    criticalSubjects.forEach(cSub => {
      insights.push({
        id: `INSIGHT_SUBJ_${cSub.code}`,
        type: "danger",
        category: "Subject-Level Audit",
        title: `High Remedial Requirement: ${cSub.name} (${cSub.short})`,
        description: `In Semester ${cSub.semester}, ${cSub.short} recorded a pass rate of only ${cSub.passPercentage}% (${cSub.fails} student backlogs) with average score ${cSub.meanMarks}/100.`,
        action: `Faculty (${cSub.faculty}) to conduct 12 hours of extra tutorial sessions and targeted question bank drilling before backlog exams.`
      });
    });
  }

  // 5. At-Risk Mentoring Recommendation
  if (overall && overall.atRiskCount > 0) {
    insights.push({
      id: "INSIGHT_MENTORING",
      type: "warning",
      category: "Student Mentoring",
      title: `${overall.atRiskCount} Students Identified for Intensive Remedial Mentoring`,
      description: `${overall.atRiskCount} students currently hold 1+ backlogs or CGPA below 6.0.`,
      action: "Assign dedicated faculty mentors to conduct weekly progress tracking and parent-teacher meetings."
    });
  }

  return insights;
}
