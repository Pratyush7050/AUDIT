// SIES GRADUATE SCHOOL OF TECHNOLOGY (AUTONOMOUS)
// Department of Computer Science & Engineering (IoT & CS including BCT)
// Multi-Batch Academic Dataset

export const DEFAULT_BATCHES = [
  {
    "id": "2024-2028",
    "name": "Batch 2024–2028",
    "academicYears": "SE to BE (2024-2028)",
    "entryYear": 2024,
    "gradYear": 2028,
    "activeSemesters": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "currentSemester": 4,
    "description": "4-Year Cohort covering SE (Sem 3 & 4), TE (Sem 5 & 6), and BE (Sem 7 & 8). Official Sem 3 and Sem 4 gazettes loaded.",
    "isRealData": true,
    "scheme": "R-24 (Autonomous)"
  },
  {
    "id": "2023-2027",
    "name": "Batch 2023–2027",
    "academicYears": "SE to BE (2023-2027)",
    "entryYear": 2023,
    "gradYear": 2027,
    "activeSemesters": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "currentSemester": 6,
    "description": "4-Year Cohort covering SE (Sem 3 & 4), TE (Sem 5 & 6), and BE (Sem 7 & 8).",
    "isRealData": false,
    "scheme": "R-24 / R-19"
  },
  {
    "id": "2022-2026",
    "name": "Batch 2022–2026",
    "academicYears": "SE to BE (2022-2026)",
    "entryYear": 2022,
    "gradYear": 2026,
    "activeSemesters": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "currentSemester": 8,
    "description": "4-Year Cohort covering SE (Sem 3 & 4), TE (Sem 5 & 6), and BE (Sem 7 & 8).",
    "isRealData": false,
    "scheme": "R-19 (Autonomous)"
  },
  {
    "id": "2025-2029",
    "name": "Batch 2025–2029",
    "academicYears": "SE to BE (2025-2029)",
    "entryYear": 2025,
    "gradYear": 2029,
    "activeSemesters": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "currentSemester": 4,
    "description": "Upcoming 4-Year Cohort covering SE to BE.",
    "isRealData": false,
    "scheme": "R-24 (Autonomous)"
  }
];

export const DEPARTMENT_INFO = {
  name: "Department of Computer Science & Engineering (IoT & CS including BCT)",
  code: "CSE-IoT & CS(BCT)",
  institution: "SIES Graduate School of Technology (Autonomous)",
  collegeCode: "690",
  academicYear: "2025-2026",
  hodName: "Dr. Aparna Bannore",
  auditDate: "May 2026",
  batchInfo: {
    SE: { year: "Second Year (SE)", entryYear: "2024-2028", currentSem: 4, pastSems: [3, 4] },
    TE: { year: "Third Year (TE)", entryYear: "2023-2027", currentSem: 6, pastSems: [3, 4, 5, 6] },
    BE: { year: "Final Year (BE)", entryYear: "2022-2026", currentSem: 8, pastSems: [3, 4, 5, 6, 7, 8] }
  }
};

export const SUBJECT_METADATA = {
  "SE-SEM3": [
  {
    "code": "CSEC301",
    "name": "Applied Mathematics III",
    "short": "AM-III",
    "credits": 3,
    "faculty": "Prof. Applied Math",
    "maxMarks": 100
  },
  {
    "code": "CSEC302",
    "name": "Data Structures and Algorithms",
    "short": "DSA",
    "credits": 3,
    "faculty": "Prof. DSA Faculty",
    "maxMarks": 100
  },
  {
    "code": "CSEC303",
    "name": "Discrete Structure and Automata Theory",
    "short": "DSAT",
    "credits": 3,
    "faculty": "Prof. Automata Theory",
    "maxMarks": 100
  },
  {
    "code": "CSEC304",
    "name": "Database Management System",
    "short": "DBMS",
    "credits": 3,
    "faculty": "Prof. DBMS Faculty",
    "maxMarks": 100
  },
  {
    "code": "CSEC305",
    "name": "Computer Organization and Architecture",
    "short": "COA",
    "credits": 2,
    "faculty": "Prof. COA Faculty",
    "maxMarks": 75
  },
  {
    "code": "CSEC306",
    "name": "Engineering Economics",
    "short": "Engg-Econ",
    "credits": 2,
    "faculty": "Prof. Economics",
    "maxMarks": 50
  },
  {
    "code": "CSEL301",
    "name": "Data Structures and Algorithms Lab",
    "short": "DSA Lab",
    "credits": 1,
    "faculty": "DSA Lab In-charge",
    "maxMarks": 50
  },
  {
    "code": "CSEL302",
    "name": "Database Management System Lab",
    "short": "DBMS Lab",
    "credits": 1,
    "faculty": "DBMS Lab In-charge",
    "maxMarks": 50
  },
  {
    "code": "CSEL303",
    "name": "Computer Organization and Architecture Lab",
    "short": "COA Lab",
    "credits": 1,
    "faculty": "COA Lab In-charge",
    "maxMarks": 25
  },
  {
    "code": "CSEL304",
    "name": "Skill Base Lab Course (Python Programming)",
    "short": "Python Lab",
    "credits": 2,
    "faculty": "Python Lab In-charge",
    "maxMarks": 50
  },
  {
    "code": "CSEM301",
    "name": "Mini Project 1 A",
    "short": "Mini Proj 1A",
    "credits": 1,
    "faculty": "Project Coordinator",
    "maxMarks": 50
  }
],
  "SE-SEM4": [
  {
    "code": "CSEC401",
    "name": "Applied Mathematics IV",
    "short": "AM-IV",
    "credits": 3,
    "faculty": "Prof. Mathematics",
    "maxMarks": 100
  },
  {
    "code": "CSEC402",
    "name": "Operating System",
    "short": "OS",
    "credits": 3,
    "faculty": "Prof. Operating System",
    "maxMarks": 100
  },
  {
    "code": "CSEC403",
    "name": "Computer Network",
    "short": "CN",
    "credits": 3,
    "faculty": "Prof. Computer Network",
    "maxMarks": 100
  },
  {
    "code": "CSEC404",
    "name": "Critical Thinking and Design",
    "short": "CTD",
    "credits": 2,
    "faculty": "Prof. Design Thinking",
    "maxMarks": 75
  },
  {
    "code": "MDMC40X1",
    "name": "Multidisciplinary Minor Course 1 (MDM 1)",
    "short": "MDM-1",
    "credits": 3,
    "faculty": "Department Elective Faculty",
    "maxMarks": 100
  },
  {
    "code": "CSEL401",
    "name": "Operating System Lab",
    "short": "OS Lab",
    "credits": 1,
    "faculty": "OS Lab In-charge",
    "maxMarks": 50
  },
  {
    "code": "CSEL402",
    "name": "Computer Network Lab",
    "short": "CN Lab",
    "credits": 1,
    "faculty": "CN Lab In-charge",
    "maxMarks": 50
  },
  {
    "code": "CSEL403",
    "name": "Skill Base Lab Course (Web Technology)",
    "short": "Web Tech Lab",
    "credits": 2,
    "faculty": "Web Tech In-charge",
    "maxMarks": 50
  },
  {
    "code": "CSEL404",
    "name": "Value Education Course (UHV)",
    "short": "UHV",
    "credits": 2,
    "faculty": "UHV Coordinator",
    "maxMarks": 50
  },
  {
    "code": "CSEM401",
    "name": "Mini Project 1 B",
    "short": "Mini Proj 1B",
    "credits": 1,
    "faculty": "Project Coordinator",
    "maxMarks": 50
  }
]
};

export function getGradeInfo(marks, maxMarks = 100) {
  const pct = (marks / maxMarks) * 100;
  if (pct >= 85) return { grade: "O", points: 10, label: "Outstanding" };
  if (pct >= 75) return { grade: "A+", points: 9, label: "Excellent" };
  if (pct >= 70) return { grade: "A", points: 8, label: "Very Good" };
  if (pct >= 60) return { grade: "B+", points: 7, label: "Good" };
  if (pct >= 50) return { grade: "B", points: 6, label: "Above Average" };
  if (pct >= 45) return { grade: "C", points: 5, label: "Pass" };
  if (pct >= 40) return { grade: "P", points: 4, label: "Pass" };
  return { grade: "F", points: 0, label: "Fail / Backlog" };
}

export const INITIAL_STUDENTS = [
  {
    "id": "STU_124AX001",
    "rollNo": "124AX001",
    "seatNo": "124AX001",
    "prn": "626154001",
    "name": "ACHARYA ANANYA MOHAN ANASUYA",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 93,
    "activeBacklogs": 0,
    "cgpa": 9.6,
    "totalMarks": 2592,
    "maxTotalMarks": 1475,
    "percentage": 81.52,
    "earnedCredits": 21,
    "earnedCreditPoints": 193,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 10,
        "earnedCredits": 220,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 90,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 90,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 87,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 90,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 63,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 47,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 47,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.19,
        "earnedCredits": 193,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 93,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 62,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 84,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 74,
      "iotNetworking": 68,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 84,
      "cyberSecurity": 93
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX003",
    "rollNo": "124AX003",
    "seatNo": "124AX003",
    "prn": "626154002",
    "name": "ADITYA ANANDKRISHNAN KALAIVANI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 93,
    "activeBacklogs": 0,
    "cgpa": 8.67,
    "totalMarks": 2293,
    "maxTotalMarks": 1475,
    "percentage": 77.93,
    "earnedCredits": 21,
    "earnedCreditPoints": 186,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.5,
        "earnedCredits": 187,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 58,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 51,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 47,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 24,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.86,
        "earnedCredits": 186,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 53,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 62,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 77,
      "iotNetworking": 66,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 85,
      "cyberSecurity": 53
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX004",
    "rollNo": "124AX004",
    "seatNo": "124AX004",
    "prn": "626154003",
    "name": "THORAT ADITYA RAHUL RUPALI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 95,
    "activeBacklogs": 0,
    "cgpa": 9.67,
    "totalMarks": 2445,
    "maxTotalMarks": 1475,
    "percentage": 81.52,
    "earnedCredits": 21,
    "earnedCreditPoints": 201,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.77,
        "earnedCredits": 215,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 89,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 87,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 60,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.57,
        "earnedCredits": 201,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 83,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 52,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 88,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 83,
      "iotNetworking": 82,
      "softwareProgramming": 84,
      "cloudDataAnalytics": 88,
      "cyberSecurity": 78
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX005",
    "rollNo": "124AX005",
    "seatNo": "124AX005",
    "prn": "626154004",
    "name": "ANSARI RUSHAN ASLAM TARANNUM",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 95,
    "activeBacklogs": 0,
    "cgpa": 9.47,
    "totalMarks": 2477,
    "maxTotalMarks": 1475,
    "percentage": 77.24,
    "earnedCredits": 21,
    "earnedCreditPoints": 187,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 10,
        "earnedCredits": 220,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 88,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 86,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 60,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 48,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.9,
        "earnedCredits": 187,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 49,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 82,
      "iotNetworking": 77,
      "softwareProgramming": 80,
      "cloudDataAnalytics": 79,
      "cyberSecurity": 66
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX006",
    "rollNo": "124AX006",
    "seatNo": "124AX006",
    "prn": "626154005",
    "name": "ARGADE JAYANT ROHIDAS ARCHANA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 95,
    "activeBacklogs": 0,
    "cgpa": 8.26,
    "totalMarks": 2157,
    "maxTotalMarks": 1475,
    "percentage": 73.66,
    "earnedCredits": 21,
    "earnedCreditPoints": 177,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.09,
        "earnedCredits": 178,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 56,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 43,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.43,
        "earnedCredits": 177,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 38,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 73,
      "iotNetworking": 71,
      "softwareProgramming": 88,
      "cloudDataAnalytics": 72,
      "cyberSecurity": 77
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX007",
    "rollNo": "124AX007",
    "seatNo": "124AX007",
    "prn": "626154006",
    "name": "ATIKSH KARTHIK SANGAMESWARAN GAURI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 9.51,
    "totalMarks": 2459,
    "maxTotalMarks": 1475,
    "percentage": 84.28,
    "earnedCredits": 21,
    "earnedCreditPoints": 201,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.45,
        "earnedCredits": 208,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 90,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 60,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 47,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.57,
        "earnedCredits": 201,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 84,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 89,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 60,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 91,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 47,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 84,
      "iotNetworking": 89,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 91,
      "cyberSecurity": 65
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX008",
    "rollNo": "124AX008",
    "seatNo": "124AX008",
    "prn": "626154007",
    "name": "BANSODE DEVANSHU HARI SUSHMA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 89,
    "activeBacklogs": 0,
    "cgpa": 6.98,
    "totalMarks": 1919,
    "maxTotalMarks": 1475,
    "percentage": 60.69,
    "earnedCredits": 21,
    "earnedCreditPoints": 139,
    "result": "P",
    "performanceTier": "First Class",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.32,
        "earnedCredits": 161,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 49,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 56,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 40,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 19,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 6.62,
        "earnedCredits": 139,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 49,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 44,
            "maxMarks": 100,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 40,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 48,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 61,
      "iotNetworking": 44,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 48,
      "cyberSecurity": 49
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX010",
    "rollNo": "124AX010",
    "seatNo": "124AX010",
    "prn": "626154008",
    "name": "CHAUDHARY ANISH PRADEEP HEMA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 91,
    "activeBacklogs": 0,
    "cgpa": 7.44,
    "totalMarks": 2010,
    "maxTotalMarks": 1475,
    "percentage": 64.97,
    "earnedCredits": 21,
    "earnedCreditPoints": 155,
    "result": "P",
    "performanceTier": "First Class",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.5,
        "earnedCredits": 165,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 55,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 62,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 40,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 18,
            "maxMarks": 25,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 31,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.38,
        "earnedCredits": 155,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 54,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 52,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 51,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 54,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 61,
      "iotNetworking": 52,
      "softwareProgramming": 80,
      "cloudDataAnalytics": 54,
      "cyberSecurity": 54
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX011",
    "rollNo": "124AX011",
    "seatNo": "124AX011",
    "prn": "626154009",
    "name": "CHORMALE SAIPREM PRASHANT SHAMAL",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 96,
    "activeBacklogs": 0,
    "cgpa": 9.12,
    "totalMarks": 2362,
    "maxTotalMarks": 1475,
    "percentage": 79.59,
    "earnedCredits": 21,
    "earnedCreditPoints": 192,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.09,
        "earnedCredits": 200,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 84,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 51,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.14,
        "earnedCredits": 192,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 60,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 88,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 71,
      "iotNetworking": 63,
      "softwareProgramming": 88,
      "cloudDataAnalytics": 88,
      "cyberSecurity": 76
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX012",
    "rollNo": "124AX012",
    "seatNo": "124AX012",
    "prn": "626154010",
    "name": "DANT VAISHNAVI VAIBHAV KALYANI",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 97,
    "activeBacklogs": 0,
    "cgpa": 9.49,
    "totalMarks": 2429,
    "maxTotalMarks": 1475,
    "percentage": 80.97,
    "earnedCredits": 21,
    "earnedCreditPoints": 200,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.45,
        "earnedCredits": 208,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 92,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 58,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 20,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.52,
        "earnedCredits": 200,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 54,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 84,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 77,
      "iotNetworking": 81,
      "softwareProgramming": 88,
      "cloudDataAnalytics": 84,
      "cyberSecurity": 77
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX013",
    "rollNo": "124AX013",
    "seatNo": "124AX013",
    "prn": "626154011",
    "name": "DESAI NISHAAD KALPAK KANCHAN",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 89,
    "activeBacklogs": 0,
    "cgpa": 7.33,
    "totalMarks": 2013,
    "maxTotalMarks": 1475,
    "percentage": 65.38,
    "earnedCredits": 21,
    "earnedCreditPoints": 152,
    "result": "P",
    "performanceTier": "First Class",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.41,
        "earnedCredits": 163,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 58,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 39,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 20,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.24,
        "earnedCredits": 152,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 52,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 41,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 52,
      "iotNetworking": 57,
      "softwareProgramming": 82,
      "cloudDataAnalytics": 65,
      "cyberSecurity": 57
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX014",
    "rollNo": "124AX014",
    "seatNo": "124AX014",
    "prn": "626154012",
    "name": "DESAI PRIYA SANJAY SAYUKTA",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 88,
    "activeBacklogs": 3,
    "cgpa": 5.51,
    "totalMarks": 1683,
    "maxTotalMarks": 1475,
    "percentage": 54.21,
    "earnedCredits": 15,
    "earnedCreditPoints": 104,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 6.05,
        "earnedCredits": 133,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Pass",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 41,
            "maxMarks": 100,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 56,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 46,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 56,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 36,
            "maxMarks": 75,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 18,
            "maxMarks": 25,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 104,
        "totalCredits": 21,
        "backlogs": 3,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 51,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 34,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 39,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 36,
            "maxMarks": 75,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 53,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 32,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 34,
      "iotNetworking": 39,
      "softwareProgramming": 74,
      "cloudDataAnalytics": 53,
      "cyberSecurity": 51
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX015",
    "rollNo": "124AX015",
    "seatNo": "124AX015",
    "prn": "626154013",
    "name": "DESAI PUSHKAR RAHUL RASHMI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 8.88,
    "totalMarks": 2370,
    "maxTotalMarks": 1475,
    "percentage": 76.14,
    "earnedCredits": 21,
    "earnedCreditPoints": 183,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.05,
        "earnedCredits": 199,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 87,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 53,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.71,
        "earnedCredits": 183,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 50,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 59,
      "iotNetworking": 76,
      "softwareProgramming": 84,
      "cloudDataAnalytics": 82,
      "cyberSecurity": 71
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX017",
    "rollNo": "124AX017",
    "seatNo": "124AX017",
    "prn": "626154014",
    "name": "DEVKAR NIMISH SHARAD KAMLA",
    "gender": "Male",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 95,
    "activeBacklogs": 0,
    "cgpa": 8.88,
    "totalMarks": 2344,
    "maxTotalMarks": 1475,
    "percentage": 75.86,
    "earnedCredits": 21,
    "earnedCreditPoints": 182,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.09,
        "earnedCredits": 200,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 58,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 89,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 83,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 49,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.67,
        "earnedCredits": 182,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 53,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 69,
      "iotNetworking": 72,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 80,
      "cyberSecurity": 71
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX018",
    "rollNo": "124AX018",
    "seatNo": "124AX018",
    "prn": "626154015",
    "name": "DONGRE ARJUN SUJIT ANITA",
    "gender": "Male",
    "class": "SE",
    "elective": "Cost Management [MDM-1]",
    "attendance": 87,
    "activeBacklogs": 8,
    "cgpa": 2.95,
    "totalMarks": 1186,
    "maxTotalMarks": 1475,
    "percentage": 37.79,
    "earnedCredits": 10,
    "earnedCreditPoints": 62,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 0,
        "earnedCredits": 65,
        "totalCredits": 22,
        "backlogs": 4,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 52,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 21,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 39,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 21,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 16,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 25,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 23,
            "maxMarks": 50,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 11,
            "maxMarks": 25,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 21,
            "maxMarks": 50,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 62,
        "totalCredits": 21,
        "backlogs": 4,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 19,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 21,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 20,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 20,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 23,
            "maxMarks": 50,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 25,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 26,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 30,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 21,
      "iotNetworking": 20,
      "softwareProgramming": 52,
      "cloudDataAnalytics": 57,
      "cyberSecurity": 19
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX019",
    "rollNo": "124AX019",
    "seatNo": "124AX019",
    "prn": "626154016",
    "name": "DUNDLE AYUSH SHASHIKANT RAJESHWARI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 89,
    "activeBacklogs": 0,
    "cgpa": 7.26,
    "totalMarks": 1933,
    "maxTotalMarks": 1475,
    "percentage": 65.1,
    "earnedCredits": 21,
    "earnedCreditPoints": 151,
    "result": "P",
    "performanceTier": "First Class",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.32,
        "earnedCredits": 161,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 46,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 55,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 41,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 20,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.19,
        "earnedCredits": 151,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 54,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 58,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 41,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 54,
      "iotNetworking": 58,
      "softwareProgramming": 82,
      "cloudDataAnalytics": 63,
      "cyberSecurity": 59
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX020",
    "rollNo": "124AX020",
    "seatNo": "124AX020",
    "prn": "626154017",
    "name": "ELAVARASI PADMA",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 92,
    "activeBacklogs": 0,
    "cgpa": 8.35,
    "totalMarks": 2284,
    "maxTotalMarks": 1475,
    "percentage": 72.14,
    "earnedCredits": 21,
    "earnedCreditPoints": 163,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.91,
        "earnedCredits": 196,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 50,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.76,
        "earnedCredits": 163,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 51,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 59,
      "iotNetworking": 68,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 69,
      "cyberSecurity": 68
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX021",
    "rollNo": "124AX021",
    "seatNo": "124AX021",
    "prn": "626154018",
    "name": "GHADGE PRIYANSI VINOD MANISHA",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 93,
    "activeBacklogs": 0,
    "cgpa": 8.58,
    "totalMarks": 2230,
    "maxTotalMarks": 1475,
    "percentage": 74.21,
    "earnedCredits": 21,
    "earnedCreditPoints": 177,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.73,
        "earnedCredits": 192,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 62,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 60,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.43,
        "earnedCredits": 177,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 64,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 64,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 50,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 64,
      "iotNetworking": 74,
      "softwareProgramming": 84,
      "cloudDataAnalytics": 77,
      "cyberSecurity": 64
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX022",
    "rollNo": "124AX022",
    "seatNo": "124AX022",
    "prn": "626154019",
    "name": "GIFTWINSTON SUNDARSINGH BEULAH GRACE",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 93,
    "activeBacklogs": 0,
    "cgpa": 7.91,
    "totalMarks": 2160,
    "maxTotalMarks": 1475,
    "percentage": 68.69,
    "earnedCredits": 21,
    "earnedCreditPoints": 160,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.18,
        "earnedCredits": 180,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 49,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.62,
        "earnedCredits": 160,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 58,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 62,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 49,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 58,
      "iotNetworking": 62,
      "softwareProgramming": 80,
      "cloudDataAnalytics": 59,
      "cyberSecurity": 66
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX023",
    "rollNo": "124AX023",
    "seatNo": "124AX023",
    "prn": "626154020",
    "name": "JADHAV KALYANI YUVRAJ REKHA",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 96,
    "activeBacklogs": 0,
    "cgpa": 9.26,
    "totalMarks": 2358,
    "maxTotalMarks": 1475,
    "percentage": 79.03,
    "earnedCredits": 21,
    "earnedCreditPoints": 192,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.36,
        "earnedCredits": 206,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 86,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 49,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.14,
        "earnedCredits": 192,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 60,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 83,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 74,
      "iotNetworking": 65,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 83,
      "cyberSecurity": 77
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX024",
    "rollNo": "124AX024",
    "seatNo": "124AX024",
    "prn": "626154021",
    "name": "JADHAV MADHURA KALPESH MANISHA",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 95,
    "activeBacklogs": 0,
    "cgpa": 9.95,
    "totalMarks": 2613,
    "maxTotalMarks": 1475,
    "percentage": 88.97,
    "earnedCredits": 21,
    "earnedCreditPoints": 210,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.91,
        "earnedCredits": 218,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 96,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 93,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 87,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 66,
            "maxMarks": 75,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 10,
        "earnedCredits": 210,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 97,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 91,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 68,
            "maxMarks": 75,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 86,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 91,
      "iotNetworking": 85,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 86,
      "cyberSecurity": 97
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX025",
    "rollNo": "124AX025",
    "seatNo": "124AX025",
    "prn": "626154022",
    "name": "KADAM ANANYA NAMDEV JANHAVI",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 92,
    "activeBacklogs": 0,
    "cgpa": 8.74,
    "totalMarks": 2306,
    "maxTotalMarks": 1475,
    "percentage": 74.34,
    "earnedCredits": 21,
    "earnedCreditPoints": 177,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.05,
        "earnedCredits": 199,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 45,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.43,
        "earnedCredits": 177,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 49,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 61,
      "iotNetworking": 71,
      "softwareProgramming": 82,
      "cloudDataAnalytics": 79,
      "cyberSecurity": 66
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX026",
    "rollNo": "124AX026",
    "seatNo": "124AX026",
    "prn": "626154023",
    "name": "KEERTHANA C M",
    "gender": "Female",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 97,
    "activeBacklogs": 0,
    "cgpa": 10,
    "totalMarks": 2707,
    "maxTotalMarks": 1475,
    "percentage": 89.1,
    "earnedCredits": 21,
    "earnedCreditPoints": 210,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 10,
        "earnedCredits": 220,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 94,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 92,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 86,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 95,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 69,
            "maxMarks": 75,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 47,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 48,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 24,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 10,
        "earnedCredits": 210,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 95,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 91,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 64,
            "maxMarks": 75,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 88,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 91,
      "iotNetworking": 85,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 88,
      "cyberSecurity": 95
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX027",
    "rollNo": "124AX027",
    "seatNo": "124AX027",
    "prn": "626154024",
    "name": "KHAN MOHAMMED SAARIF MOHD ZAHID FIDQUS",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 93,
    "activeBacklogs": 0,
    "cgpa": 7.81,
    "totalMarks": 2064,
    "maxTotalMarks": 1475,
    "percentage": 69.1,
    "earnedCredits": 21,
    "earnedCreditPoints": 161,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.95,
        "earnedCredits": 175,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 42,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 18,
            "maxMarks": 25,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.67,
        "earnedCredits": 161,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 52,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 44,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 66,
      "iotNetworking": 73,
      "softwareProgramming": 70,
      "cloudDataAnalytics": 76,
      "cyberSecurity": 52
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX028",
    "rollNo": "124AX028",
    "seatNo": "124AX028",
    "prn": "626154025",
    "name": "KHANNA MANASI MANOJ SEEMA",
    "gender": "Female",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 96,
    "activeBacklogs": 0,
    "cgpa": 9.02,
    "totalMarks": 2380,
    "maxTotalMarks": 1475,
    "percentage": 76.28,
    "earnedCredits": 21,
    "earnedCreditPoints": 180,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.45,
        "earnedCredits": 208,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 61,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.57,
        "earnedCredits": 180,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 52,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 83,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 70,
      "iotNetworking": 61,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 83,
      "cyberSecurity": 66
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX029",
    "rollNo": "124AX029",
    "seatNo": "124AX029",
    "prn": "626154026",
    "name": "KOKATE PRATYUSH ATUL SANGEETA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 89,
    "activeBacklogs": 0,
    "cgpa": 7.14,
    "totalMarks": 1917,
    "maxTotalMarks": 1475,
    "percentage": 63.31,
    "earnedCredits": 21,
    "earnedCreditPoints": 145,
    "result": "P",
    "performanceTier": "First Class",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.36,
        "earnedCredits": 162,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 60,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 55,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 64,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 34,
            "maxMarks": 75,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 20,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 6.9,
        "earnedCredits": 145,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 48,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 38,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 48,
      "iotNetworking": 59,
      "softwareProgramming": 80,
      "cloudDataAnalytics": 59,
      "cyberSecurity": 59
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX030",
    "rollNo": "124AX030",
    "seatNo": "124AX030",
    "prn": "626154027",
    "name": "KOLI ANKUSH KRISH",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 90,
    "activeBacklogs": 1,
    "cgpa": 6.81,
    "totalMarks": 1917,
    "maxTotalMarks": 1475,
    "percentage": 62.07,
    "earnedCredits": 18,
    "earnedCreditPoints": 134,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.23,
        "earnedCredits": 159,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 52,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 60,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 64,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 42,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 18,
            "maxMarks": 25,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 134,
        "totalCredits": 21,
        "backlogs": 1,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 64,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 41,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 35,
            "maxMarks": 75,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 32,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 41,
      "iotNetworking": 61,
      "softwareProgramming": 78,
      "cloudDataAnalytics": 63,
      "cyberSecurity": 64
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX032",
    "rollNo": "124AX032",
    "seatNo": "124AX032",
    "prn": "626154028",
    "name": "LATHIKA VARSHINI SENTHIL KUMAR",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 92,
    "activeBacklogs": 0,
    "cgpa": 7.21,
    "totalMarks": 1978,
    "maxTotalMarks": 1475,
    "percentage": 65.93,
    "earnedCredits": 21,
    "earnedCreditPoints": 154,
    "result": "P",
    "performanceTier": "First Class",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.09,
        "earnedCredits": 156,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 43,
            "maxMarks": 100,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 67,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 54,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 18,
            "maxMarks": 25,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.33,
        "earnedCredits": 154,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 52,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 46,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 72,
      "iotNetworking": 52,
      "softwareProgramming": 74,
      "cloudDataAnalytics": 65,
      "cyberSecurity": 57
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX033",
    "rollNo": "124AX033",
    "seatNo": "124AX033",
    "prn": "626154029",
    "name": "MAHAJAN MEHUL PANKAJ BHARATI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 8.07,
    "totalMarks": 2144,
    "maxTotalMarks": 1475,
    "percentage": 71.03,
    "earnedCredits": 21,
    "earnedCreditPoints": 170,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.05,
        "earnedCredits": 177,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 47,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 19,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.1,
        "earnedCredits": 170,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 64,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 46,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 67,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 31,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 72,
      "iotNetworking": 73,
      "softwareProgramming": 80,
      "cloudDataAnalytics": 67,
      "cyberSecurity": 64
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX035",
    "rollNo": "124AX035",
    "seatNo": "124AX035",
    "prn": "626154030",
    "name": "MENDON PRATHAM UMESH KAVITHA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 1,
    "cgpa": 7.79,
    "totalMarks": 2222,
    "maxTotalMarks": 1475,
    "percentage": 66.48,
    "earnedCredits": 18,
    "earnedCreditPoints": 141,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.82,
        "earnedCredits": 194,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 88,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 67,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 40,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 141,
        "totalCredits": 21,
        "backlogs": 1,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 47,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 52,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 47,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 47,
      "iotNetworking": 52,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 70,
      "cyberSecurity": 59
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX036",
    "rollNo": "124AX036",
    "seatNo": "124AX036",
    "prn": "626154031",
    "name": "MHATRE CHINMAYEE SHASHANK SWAPNALI",
    "gender": "Female",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 92,
    "activeBacklogs": 0,
    "cgpa": 9.26,
    "totalMarks": 2399,
    "maxTotalMarks": 1475,
    "percentage": 76.83,
    "earnedCredits": 21,
    "earnedCreditPoints": 188,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.55,
        "earnedCredits": 210,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 86,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 59,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.95,
        "earnedCredits": 188,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 56,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 84,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 76,
      "iotNetworking": 63,
      "softwareProgramming": 84,
      "cloudDataAnalytics": 84,
      "cyberSecurity": 71
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX037",
    "rollNo": "124AX037",
    "seatNo": "124AX037",
    "prn": "626154032",
    "name": "MHATRE JAY PRAMOD MADHURI",
    "gender": "Male",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 8.93,
    "totalMarks": 2318,
    "maxTotalMarks": 1475,
    "percentage": 80.14,
    "earnedCredits": 21,
    "earnedCreditPoints": 192,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.73,
        "earnedCredits": 192,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 54,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.14,
        "earnedCredits": 192,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 87,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 54,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 88,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 74,
      "iotNetworking": 87,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 88,
      "cyberSecurity": 76
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX038",
    "rollNo": "124AX038",
    "seatNo": "124AX038",
    "prn": "626154033",
    "name": "MISHRA SANGINI VINOD GUDDI",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 9.26,
    "totalMarks": 2376,
    "maxTotalMarks": 1475,
    "percentage": 78.62,
    "earnedCredits": 21,
    "earnedCreditPoints": 189,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.5,
        "earnedCredits": 209,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 44,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9,
        "earnedCredits": 189,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 83,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 63,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 70,
      "iotNetworking": 73,
      "softwareProgramming": 88,
      "cloudDataAnalytics": 66,
      "cyberSecurity": 83
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX039",
    "rollNo": "124AX039",
    "seatNo": "124AX039",
    "prn": "626154034",
    "name": "MUDELA MANISH KUNDAN SINGH KAMLA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 8.37,
    "totalMarks": 2227,
    "maxTotalMarks": 1475,
    "percentage": 72.55,
    "earnedCredits": 21,
    "earnedCreditPoints": 172,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.55,
        "earnedCredits": 188,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 83,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 50,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 20,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.19,
        "earnedCredits": 172,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 52,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 72,
      "iotNetworking": 66,
      "softwareProgramming": 76,
      "cloudDataAnalytics": 76,
      "cyberSecurity": 73
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX040",
    "rollNo": "124AX040",
    "seatNo": "124AX040",
    "prn": "626154035",
    "name": "MUGIL SANTHIYA DHARMARAJ",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 93,
    "activeBacklogs": 1,
    "cgpa": 6.56,
    "totalMarks": 1836,
    "maxTotalMarks": 1475,
    "percentage": 62.48,
    "earnedCredits": 21,
    "earnedCreditPoints": 145,
    "result": "P",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 0,
        "earnedCredits": 137,
        "totalCredits": 22,
        "backlogs": 1,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 32,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 56,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 47,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 19,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 6.9,
        "earnedCredits": 145,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 49,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 56,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 50,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 41,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 56,
      "iotNetworking": 50,
      "softwareProgramming": 72,
      "cloudDataAnalytics": 69,
      "cyberSecurity": 49
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX041",
    "rollNo": "124AX041",
    "seatNo": "124AX041",
    "prn": "626154036",
    "name": "NADAR ALAN PAUL JOSHUVA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 84,
    "activeBacklogs": 9,
    "cgpa": 2.72,
    "totalMarks": 1188,
    "maxTotalMarks": 1475,
    "percentage": 40.14,
    "earnedCredits": 12,
    "earnedCreditPoints": 56,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 0,
        "earnedCredits": 61,
        "totalCredits": 22,
        "backlogs": 5,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 33,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 21,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 43,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 31,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 20,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 25,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 25,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 24,
            "maxMarks": 50,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 11,
            "maxMarks": 25,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 26,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 56,
        "totalCredits": 21,
        "backlogs": 4,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 27,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 41,
            "maxMarks": 100,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 42,
            "maxMarks": 100,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 27,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 39,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 12,
            "maxMarks": 50,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 27,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 26,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 22,
            "maxMarks": 50,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 28,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 41,
      "iotNetworking": 42,
      "softwareProgramming": 52,
      "cloudDataAnalytics": 39,
      "cyberSecurity": 27
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX043",
    "rollNo": "124AX043",
    "seatNo": "124AX043",
    "prn": "626154037",
    "name": "NISHANTH CHAKKARAVARTHI PARAMESWARI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 92,
    "activeBacklogs": 0,
    "cgpa": 8.4,
    "totalMarks": 2235,
    "maxTotalMarks": 1475,
    "percentage": 73.24,
    "earnedCredits": 21,
    "earnedCreditPoints": 172,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.59,
        "earnedCredits": 189,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 86,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 53,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 19,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.19,
        "earnedCredits": 172,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 62,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 53,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 74,
      "iotNetworking": 62,
      "softwareProgramming": 78,
      "cloudDataAnalytics": 78,
      "cyberSecurity": 65
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX044",
    "rollNo": "124AX044",
    "seatNo": "124AX044",
    "prn": "626154038",
    "name": "PATIL MAHESH PRADEEP SUVARNA",
    "gender": "Male",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 93,
    "activeBacklogs": 0,
    "cgpa": 8.65,
    "totalMarks": 2308,
    "maxTotalMarks": 1475,
    "percentage": 73.79,
    "earnedCredits": 21,
    "earnedCreditPoints": 175,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.95,
        "earnedCredits": 197,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 58,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.33,
        "earnedCredits": 175,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 62,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 41,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 69,
      "iotNetworking": 73,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 76,
      "cyberSecurity": 62
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX045",
    "rollNo": "124AX045",
    "seatNo": "124AX045",
    "prn": "626154039",
    "name": "PATIL ROHAN MAHESH MANSI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 95,
    "activeBacklogs": 0,
    "cgpa": 8.65,
    "totalMarks": 2239,
    "maxTotalMarks": 1475,
    "percentage": 79.17,
    "earnedCredits": 21,
    "earnedCreditPoints": 189,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.32,
        "earnedCredits": 183,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 47,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 51,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9,
        "earnedCredits": 189,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 83,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 86,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 52,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 83,
      "iotNetworking": 86,
      "softwareProgramming": 88,
      "cloudDataAnalytics": 78,
      "cyberSecurity": 65
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX046",
    "rollNo": "124AX046",
    "seatNo": "124AX046",
    "prn": "626154040",
    "name": "PATIL RUSHI SANTOSH",
    "gender": "Male",
    "class": "SE",
    "elective": "Cost Management [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 3,
    "cgpa": 6.58,
    "totalMarks": 2006,
    "maxTotalMarks": 1475,
    "percentage": 66.9,
    "earnedCredits": 15,
    "earnedCreditPoints": 126,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 0,
        "earnedCredits": 157,
        "totalCredits": 22,
        "backlogs": 1,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 36,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 48,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 126,
        "totalCredits": 21,
        "backlogs": 2,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 44,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 67,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 48,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 52,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 67,
      "iotNetworking": 48,
      "softwareProgramming": 78,
      "cloudDataAnalytics": 72,
      "cyberSecurity": 44
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX047",
    "rollNo": "124AX047",
    "seatNo": "124AX047",
    "prn": "626154041",
    "name": "PAWAR VINAYAK RAJAN KAMAL",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 9.49,
    "totalMarks": 2481,
    "maxTotalMarks": 1475,
    "percentage": 86.48,
    "earnedCredits": 21,
    "earnedCreditPoints": 206,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.18,
        "earnedCredits": 202,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 93,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 62,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.81,
        "earnedCredits": 206,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 94,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 89,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 89,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 58,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 89,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 89,
      "iotNetworking": 89,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 89,
      "cyberSecurity": 94
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX048",
    "rollNo": "124AX048",
    "seatNo": "124AX048",
    "prn": "626154042",
    "name": "RAMASUBRAMANIAN SABARISH SHANKAR ANURADHA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 91,
    "activeBacklogs": 0,
    "cgpa": 7.95,
    "totalMarks": 2126,
    "maxTotalMarks": 1475,
    "percentage": 67.31,
    "earnedCredits": 21,
    "earnedCreditPoints": 157,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.41,
        "earnedCredits": 185,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 44,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 20,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.48,
        "earnedCredits": 157,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 62,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 47,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 62,
      "iotNetworking": 57,
      "softwareProgramming": 70,
      "cloudDataAnalytics": 69,
      "cyberSecurity": 70
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX049",
    "rollNo": "124AX049",
    "seatNo": "124AX049",
    "prn": "626154043",
    "name": "RISHINANDAN MADHAVAN",
    "gender": "Male",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 8.98,
    "totalMarks": 2345,
    "maxTotalMarks": 1475,
    "percentage": 79.31,
    "earnedCredits": 21,
    "earnedCreditPoints": 190,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.91,
        "earnedCredits": 196,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 48,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 56,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.05,
        "earnedCredits": 190,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 57,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 71,
      "iotNetworking": 76,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 81,
      "cyberSecurity": 68
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX050",
    "rollNo": "124AX050",
    "seatNo": "124AX050",
    "prn": "626154044",
    "name": "SHETTY ESHAAN DAYANAND USHA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 8.09,
    "totalMarks": 2109,
    "maxTotalMarks": 1475,
    "percentage": 74.9,
    "earnedCredits": 21,
    "earnedCreditPoints": 176,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.82,
        "earnedCredits": 172,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 55,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 67,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 56,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 18,
            "maxMarks": 25,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.38,
        "earnedCredits": 176,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 95,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 62,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 53,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 70,
      "iotNetworking": 62,
      "softwareProgramming": 72,
      "cloudDataAnalytics": 72,
      "cyberSecurity": 95
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX051",
    "rollNo": "124AX051",
    "seatNo": "124AX051",
    "prn": "626154045",
    "name": "SHETTY TRISHA SURESH",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 96,
    "activeBacklogs": 0,
    "cgpa": 9.07,
    "totalMarks": 2333,
    "maxTotalMarks": 1475,
    "percentage": 77.66,
    "earnedCredits": 21,
    "earnedCreditPoints": 184,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.36,
        "earnedCredits": 206,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 53,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.76,
        "earnedCredits": 184,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 57,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 79,
      "iotNetworking": 74,
      "softwareProgramming": 78,
      "cloudDataAnalytics": 73,
      "cyberSecurity": 78
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX052",
    "rollNo": "124AX052",
    "seatNo": "124AX052",
    "prn": "626154046",
    "name": "SHINDE VEDANT DEEPAK SUJATA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 92,
    "activeBacklogs": 0,
    "cgpa": 9.02,
    "totalMarks": 2320,
    "maxTotalMarks": 1475,
    "percentage": 79.17,
    "earnedCredits": 21,
    "earnedCreditPoints": 188,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 9.09,
        "earnedCredits": 200,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 47,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.95,
        "earnedCredits": 188,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 54,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 70,
      "iotNetworking": 85,
      "softwareProgramming": 84,
      "cloudDataAnalytics": 68,
      "cyberSecurity": 78
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX053",
    "rollNo": "124AX053",
    "seatNo": "124AX053",
    "prn": "626154047",
    "name": "SHOOR SOHAM PRASHANT JYOTI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 86,
    "activeBacklogs": 6,
    "cgpa": 4.14,
    "totalMarks": 1308,
    "maxTotalMarks": 1475,
    "percentage": 47.59,
    "earnedCredits": 15,
    "earnedCreditPoints": 89,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 0,
        "earnedCredits": 89,
        "totalCredits": 22,
        "backlogs": 4,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 13,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 25,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 46,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 22,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 24,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 28,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 27,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 15,
            "maxMarks": 25,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 89,
        "totalCredits": 21,
        "backlogs": 2,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 32,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 45,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 21,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 33,
            "maxMarks": 75,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 56,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 30,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 30,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 28,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 45,
      "iotNetworking": 21,
      "softwareProgramming": 68,
      "cloudDataAnalytics": 56,
      "cyberSecurity": 32
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX054",
    "rollNo": "124AX054",
    "seatNo": "124AX054",
    "prn": "626154048",
    "name": "SHRINIVASAN PALANI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 86,
    "activeBacklogs": 6,
    "cgpa": 3.37,
    "totalMarks": 1280,
    "maxTotalMarks": 1475,
    "percentage": 40.83,
    "earnedCredits": 13,
    "earnedCreditPoints": 66,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 0,
        "earnedCredits": 79,
        "totalCredits": 22,
        "backlogs": 3,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 35,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 26,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 48,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 41,
            "maxMarks": 100,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 16,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 31,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 29,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 25,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 12,
            "maxMarks": 25,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 27,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 66,
        "totalCredits": 21,
        "backlogs": 3,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 36,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 27,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 50,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 13,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 43,
            "maxMarks": 100,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 26,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 27,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 24,
            "maxMarks": 50,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 22,
            "maxMarks": 50,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 28,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 27,
      "iotNetworking": 50,
      "softwareProgramming": 48,
      "cloudDataAnalytics": 43,
      "cyberSecurity": 36
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX055",
    "rollNo": "124AX055",
    "seatNo": "124AX055",
    "prn": "626154049",
    "name": "SINGH KAUTILYA RAJESH SONAL",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 96,
    "activeBacklogs": 0,
    "cgpa": 9.23,
    "totalMarks": 2370,
    "maxTotalMarks": 1475,
    "percentage": 82.76,
    "earnedCredits": 21,
    "earnedCreditPoints": 200,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.95,
        "earnedCredits": 197,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 52,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.52,
        "earnedCredits": 200,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 90,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 88,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 53,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 84,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 88,
      "iotNetworking": 70,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 84,
      "cyberSecurity": 90
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX056",
    "rollNo": "124AX056",
    "seatNo": "124AX056",
    "prn": "626154050",
    "name": "THAKUR KRITIKA KALYANSINGH ANJANA",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 94,
    "activeBacklogs": 0,
    "cgpa": 7.63,
    "totalMarks": 1980,
    "maxTotalMarks": 1475,
    "percentage": 70.34,
    "earnedCredits": 21,
    "earnedCreditPoints": 168,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.27,
        "earnedCredits": 160,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "First Class",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 55,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 47,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 41,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 20,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8,
        "earnedCredits": 168,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 64,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 43,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 65,
      "iotNetworking": 63,
      "softwareProgramming": 82,
      "cloudDataAnalytics": 71,
      "cyberSecurity": 64
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX057",
    "rollNo": "124AX057",
    "seatNo": "124AX057",
    "prn": "626154051",
    "name": "THOPATE DHRUV HITESH AMISHA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 92,
    "activeBacklogs": 0,
    "cgpa": 8.58,
    "totalMarks": 2213,
    "maxTotalMarks": 1475,
    "percentage": 79.31,
    "earnedCredits": 21,
    "earnedCreditPoints": 189,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.18,
        "earnedCredits": 180,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 67,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 71,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 56,
            "maxMarks": 75,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 20,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9,
        "earnedCredits": 189,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 91,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 49,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 79,
      "iotNetworking": 79,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 76,
      "cyberSecurity": 91
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX058",
    "rollNo": "124AX058",
    "seatNo": "124AX058",
    "prn": "626154052",
    "name": "THORAT PARAS PRAVIN SUJATA",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 92,
    "activeBacklogs": 0,
    "cgpa": 8.35,
    "totalMarks": 2216,
    "maxTotalMarks": 1475,
    "percentage": 72.28,
    "earnedCredits": 21,
    "earnedCreditPoints": 175,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.36,
        "earnedCredits": 184,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 46,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 32,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 20,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.33,
        "earnedCredits": 175,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 51,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 45,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 51,
      "iotNetworking": 63,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 82,
      "cyberSecurity": 78
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX059",
    "rollNo": "124AX059",
    "seatNo": "124AX059",
    "prn": "626154053",
    "name": "VAISHYA RISHABH RAMASHANKAR SHIVKUMARI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 89,
    "activeBacklogs": 3,
    "cgpa": 6.16,
    "totalMarks": 1853,
    "maxTotalMarks": 1475,
    "percentage": 53.66,
    "earnedCredits": 15,
    "earnedCreditPoints": 99,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 0,
        "earnedCredits": 166,
        "totalCredits": 22,
        "backlogs": 1,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 45,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 31,
            "maxMarks": 75,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 30,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 18,
            "maxMarks": 25,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 99,
        "totalCredits": 21,
        "backlogs": 2,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 45,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 36,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 38,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 30,
            "maxMarks": 75,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 54,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 36,
      "iotNetworking": 38,
      "softwareProgramming": 72,
      "cloudDataAnalytics": 54,
      "cyberSecurity": 45
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX060",
    "rollNo": "124AX060",
    "seatNo": "124AX060",
    "prn": "626154054",
    "name": "VELAR SUDHAN RAMAIYAN",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 88,
    "activeBacklogs": 6,
    "cgpa": 3.7,
    "totalMarks": 1349,
    "maxTotalMarks": 1475,
    "percentage": 46.62,
    "earnedCredits": 16,
    "earnedCreditPoints": 87,
    "result": "F",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 0,
        "earnedCredits": 72,
        "totalCredits": 22,
        "backlogs": 4,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 39,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 33,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 48,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 22,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 20,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 30,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 29,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 15,
            "maxMarks": 25,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 30,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 0,
        "earnedCredits": 87,
        "totalCredits": 21,
        "backlogs": 2,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 51,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 49,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 48,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 25,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 32,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 28,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 27,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 26,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 22,
            "maxMarks": 50,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 30,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 49,
      "iotNetworking": 48,
      "softwareProgramming": 52,
      "cloudDataAnalytics": 32,
      "cyberSecurity": 51
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX061",
    "rollNo": "124AX061",
    "seatNo": "124AX061",
    "prn": "626154055",
    "name": "VISHWAKARMA VISHAL RAMBABU AMARAWATI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 97,
    "activeBacklogs": 0,
    "cgpa": 9.72,
    "totalMarks": 2503,
    "maxTotalMarks": 1475,
    "percentage": 82.48,
    "earnedCredits": 21,
    "earnedCreditPoints": 198,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 10,
        "earnedCredits": 220,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 85,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 84,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 64,
            "maxMarks": 75,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.43,
        "earnedCredits": 198,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 89,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 86,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 61,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 65,
      "iotNetworking": 86,
      "softwareProgramming": 90,
      "cloudDataAnalytics": 76,
      "cyberSecurity": 89
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX062",
    "rollNo": "124AX062",
    "seatNo": "124AX062",
    "prn": "626154056",
    "name": "YADAV SURESH KUMAR SAMYDURAI",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 90,
    "activeBacklogs": 0,
    "cgpa": 7.67,
    "totalMarks": 2026,
    "maxTotalMarks": 1475,
    "percentage": 69.66,
    "earnedCredits": 21,
    "earnedCreditPoints": 165,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.5,
        "earnedCredits": 165,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 60,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 63,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 44,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 19,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.86,
        "earnedCredits": 165,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 60,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 48,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 60,
      "iotNetworking": 70,
      "softwareProgramming": 78,
      "cloudDataAnalytics": 65,
      "cyberSecurity": 77
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_124AX063",
    "rollNo": "124AX063",
    "seatNo": "124AX063",
    "prn": "626154057",
    "name": "YANU LEENO TOMI VELANGANNI",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 91,
    "activeBacklogs": 0,
    "cgpa": 7.72,
    "totalMarks": 2086,
    "maxTotalMarks": 1475,
    "percentage": 69.66,
    "earnedCredits": 21,
    "earnedCreditPoints": 167,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 7.5,
        "earnedCredits": 165,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 57,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 67,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 51,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 37,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 7.95,
        "earnedCredits": 167,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 66,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 55,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 41,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 38,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 55,
      "iotNetworking": 77,
      "softwareProgramming": 76,
      "cloudDataAnalytics": 73,
      "cyberSecurity": 66
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_225AX064",
    "rollNo": "225AX064",
    "seatNo": "225AX064",
    "prn": "626154058",
    "name": "CHANDEKAR SIDDHI SANJAY",
    "gender": "Female",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 95,
    "activeBacklogs": 0,
    "cgpa": 9.19,
    "totalMarks": 2310,
    "maxTotalMarks": 1475,
    "percentage": 84,
    "earnedCredits": 21,
    "earnedCreditPoints": 201,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.82,
        "earnedCredits": 194,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 58,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 78,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 43,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.57,
        "earnedCredits": 201,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 84,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 95,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 64,
            "maxMarks": 75,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 83,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 47,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 84,
      "iotNetworking": 95,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 83,
      "cyberSecurity": 61
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_225AX065",
    "rollNo": "225AX065",
    "seatNo": "225AX065",
    "prn": "626154059",
    "name": "GIRI PREETAM DILIPKUMAR",
    "gender": "Male",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 96,
    "activeBacklogs": 0,
    "cgpa": 9.09,
    "totalMarks": 2327,
    "maxTotalMarks": 1475,
    "percentage": 79.72,
    "earnedCredits": 21,
    "earnedCreditPoints": 197,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.82,
        "earnedCredits": 194,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 86,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 44,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.38,
        "earnedCredits": 197,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 81,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 60,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 77,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 76,
      "iotNetworking": 73,
      "softwareProgramming": 88,
      "cloudDataAnalytics": 77,
      "cyberSecurity": 81
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_225AX066",
    "rollNo": "225AX066",
    "seatNo": "225AX066",
    "prn": "626154060",
    "name": "JAGTAP AYUSH SANTOSH",
    "gender": "Male",
    "class": "SE",
    "elective": "Advanced Data Structure [MDM-1]",
    "attendance": 96,
    "activeBacklogs": 0,
    "cgpa": 9.14,
    "totalMarks": 2415,
    "maxTotalMarks": 1475,
    "percentage": 79.03,
    "earnedCredits": 21,
    "earnedCreditPoints": 196,
    "result": "P",
    "performanceTier": "Outstanding",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.95,
        "earnedCredits": 197,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 93,
            "maxMarks": 100,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 65,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 59,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 48,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 23,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 44,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 9.33,
        "earnedCredits": 196,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 79,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 82,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 41,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 47,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 82,
      "iotNetworking": 75,
      "softwareProgramming": 94,
      "cloudDataAnalytics": 80,
      "cyberSecurity": 79
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_225AX067",
    "rollNo": "225AX067",
    "seatNo": "225AX067",
    "prn": "626154061",
    "name": "NADAR AJAY AMARKANNAN",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 87,
    "activeBacklogs": 3,
    "cgpa": 4.84,
    "totalMarks": 1551,
    "maxTotalMarks": 1475,
    "percentage": 54.21,
    "earnedCredits": 21,
    "earnedCreditPoints": 127,
    "result": "P",
    "performanceTier": "At-Risk (Backlogs)",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 0,
        "earnedCredits": 81,
        "totalCredits": 22,
        "backlogs": 3,
        "status": "ATKT / Fail",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 43,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 37,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 59,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 40,
            "maxMarks": 100,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 33,
            "maxMarks": 75,
            "grade": "P",
            "points": 4,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 29,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 28,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 16,
            "maxMarks": 25,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 29,
            "maxMarks": 50,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 6.05,
        "earnedCredits": 127,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Pass",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 45,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 51,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 54,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 25,
            "maxMarks": 75,
            "grade": "F",
            "points": 0,
            "isBacklog": true
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 47,
            "maxMarks": 100,
            "grade": "C",
            "points": 5,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 33,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 35,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 36,
            "maxMarks": 50,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 34,
            "maxMarks": 50,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 51,
      "iotNetworking": 54,
      "softwareProgramming": 70,
      "cloudDataAnalytics": 47,
      "cyberSecurity": 45
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_225AX068",
    "rollNo": "225AX068",
    "seatNo": "225AX068",
    "prn": "626154062",
    "name": "PEDNEKAR ROHAN NITIN",
    "gender": "Male",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 93,
    "activeBacklogs": 0,
    "cgpa": 8.81,
    "totalMarks": 2293,
    "maxTotalMarks": 1475,
    "percentage": 77.93,
    "earnedCredits": 21,
    "earnedCreditPoints": 186,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.77,
        "earnedCredits": 193,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 73,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 80,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 52,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 22,
            "maxMarks": 25,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.86,
        "earnedCredits": 186,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 74,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 60,
            "maxMarks": 75,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 75,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 43,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 74,
      "iotNetworking": 72,
      "softwareProgramming": 86,
      "cloudDataAnalytics": 75,
      "cyberSecurity": 69
    },
    "batch": "2024-2028"
  },
  {
    "id": "STU_225AX069",
    "rollNo": "225AX069",
    "seatNo": "225AX069",
    "prn": "626154063",
    "name": "SANKPAL AAKANKSHA SUSHANT",
    "gender": "Female",
    "class": "SE",
    "elective": "Artificial Intelligence [MDM-1]",
    "attendance": 93,
    "activeBacklogs": 0,
    "cgpa": 8.26,
    "totalMarks": 2149,
    "maxTotalMarks": 1475,
    "percentage": 73.79,
    "earnedCredits": 21,
    "earnedCreditPoints": 173,
    "result": "P",
    "performanceTier": "Distinction",
    "semesterResults": {
      "3": {
        "semesterNumber": 3,
        "sgpa": 8.27,
        "earnedCredits": 182,
        "totalCredits": 22,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC301": {
            "subjectName": "Applied Mathematics III",
            "short": "AM-III",
            "credits": 3,
            "faculty": "Prof. Applied Math",
            "marks": 50,
            "maxMarks": 100,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC302": {
            "subjectName": "Data Structures and Algorithms",
            "short": "DSA",
            "credits": 3,
            "faculty": "Prof. DSA Faculty",
            "marks": 68,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC303": {
            "subjectName": "Discrete Structure and Automata Theory",
            "short": "DSAT",
            "credits": 3,
            "faculty": "Prof. Automata Theory",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC304": {
            "subjectName": "Database Management System",
            "short": "DBMS",
            "credits": 3,
            "faculty": "Prof. DBMS Faculty",
            "marks": 76,
            "maxMarks": 100,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEC305": {
            "subjectName": "Computer Organization and Architecture",
            "short": "COA",
            "credits": 2,
            "faculty": "Prof. COA Faculty",
            "marks": 42,
            "maxMarks": 75,
            "grade": "B",
            "points": 6,
            "isBacklog": false
          },
          "CSEC306": {
            "subjectName": "Engineering Economics",
            "short": "Engg-Econ",
            "credits": 2,
            "faculty": "Prof. Economics",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          },
          "CSEL301": {
            "subjectName": "Data Structures and Algorithms Lab",
            "short": "DSA Lab",
            "credits": 1,
            "faculty": "DSA Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL302": {
            "subjectName": "Database Management System Lab",
            "short": "DBMS Lab",
            "credits": 1,
            "faculty": "DBMS Lab In-charge",
            "marks": 41,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL303": {
            "subjectName": "Computer Organization and Architecture Lab",
            "short": "COA Lab",
            "credits": 1,
            "faculty": "COA Lab In-charge",
            "marks": 21,
            "maxMarks": 25,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL304": {
            "subjectName": "Skill Base Lab Course (Python Programming)",
            "short": "Python Lab",
            "credits": 2,
            "faculty": "Python Lab In-charge",
            "marks": 40,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM301": {
            "subjectName": "Mini Project 1 A",
            "short": "Mini Proj 1A",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 45,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      },
      "4": {
        "semesterNumber": 4,
        "sgpa": 8.24,
        "earnedCredits": 173,
        "totalCredits": 21,
        "backlogs": 0,
        "status": "Distinction",
        "subjects": {
          "CSEC401": {
            "subjectName": "Applied Mathematics IV",
            "short": "AM-IV",
            "credits": 3,
            "faculty": "Prof. Mathematics",
            "marks": 72,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC402": {
            "subjectName": "Operating System",
            "short": "OS",
            "credits": 3,
            "faculty": "Prof. Operating System",
            "marks": 70,
            "maxMarks": 100,
            "grade": "A",
            "points": 8,
            "isBacklog": false
          },
          "CSEC403": {
            "subjectName": "Computer Network",
            "short": "CN",
            "credits": 3,
            "faculty": "Prof. Computer Network",
            "marks": 61,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEC404": {
            "subjectName": "Critical Thinking and Design",
            "short": "CTD",
            "credits": 2,
            "faculty": "Prof. Design Thinking",
            "marks": 52,
            "maxMarks": 75,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "MDMC40X1": {
            "subjectName": "Multidisciplinary Minor Course 1 (MDM 1)",
            "short": "MDM-1",
            "credits": 3,
            "faculty": "Department Elective Faculty",
            "marks": 69,
            "maxMarks": 100,
            "grade": "B+",
            "points": 7,
            "isBacklog": false
          },
          "CSEL401": {
            "subjectName": "Operating System Lab",
            "short": "OS Lab",
            "credits": 1,
            "faculty": "OS Lab In-charge",
            "marks": 39,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL402": {
            "subjectName": "Computer Network Lab",
            "short": "CN Lab",
            "credits": 1,
            "faculty": "CN Lab In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL403": {
            "subjectName": "Skill Base Lab Course (Web Technology)",
            "short": "Web Tech Lab",
            "credits": 2,
            "faculty": "Web Tech In-charge",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEL404": {
            "subjectName": "Value Education Course (UHV)",
            "short": "UHV",
            "credits": 2,
            "faculty": "UHV Coordinator",
            "marks": 42,
            "maxMarks": 50,
            "grade": "A+",
            "points": 9,
            "isBacklog": false
          },
          "CSEM401": {
            "subjectName": "Mini Project 1 B",
            "short": "Mini Proj 1B",
            "credits": 1,
            "faculty": "Project Coordinator",
            "marks": 46,
            "maxMarks": 50,
            "grade": "O",
            "points": 10,
            "isBacklog": false
          }
        }
      }
    },
    "domainScores": {
      "hardwareEmbedded": 70,
      "iotNetworking": 61,
      "softwareProgramming": 84,
      "cloudDataAnalytics": 69,
      "cyberSecurity": 72
    },
    "batch": "2024-2028"
  }
];

export function generateBatchData() {
  return INITIAL_STUDENTS;
}
