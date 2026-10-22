const fs = require('fs');

// SEMESTER 3 SUBJECTS
const SUBJECTS_SEM3 = [
  { code: "CSEC301", name: "Applied Mathematics III", short: "AM-III", credits: 3, faculty: "Prof. Applied Math", maxMarks: 100 },
  { code: "CSEC302", name: "Data Structures and Algorithms", short: "DSA", credits: 3, faculty: "Prof. DSA Faculty", maxMarks: 100 },
  { code: "CSEC303", name: "Discrete Structure and Automata Theory", short: "DSAT", credits: 3, faculty: "Prof. Automata Theory", maxMarks: 100 },
  { code: "CSEC304", name: "Database Management System", short: "DBMS", credits: 3, faculty: "Prof. DBMS Faculty", maxMarks: 100 },
  { code: "CSEC305", name: "Computer Organization and Architecture", short: "COA", credits: 2, faculty: "Prof. COA Faculty", maxMarks: 75 },
  { code: "CSEC306", name: "Engineering Economics", short: "Engg-Econ", credits: 2, faculty: "Prof. Economics", maxMarks: 50 },
  { code: "CSEL301", name: "Data Structures and Algorithms Lab", short: "DSA Lab", credits: 1, faculty: "DSA Lab In-charge", maxMarks: 50 },
  { code: "CSEL302", name: "Database Management System Lab", short: "DBMS Lab", credits: 1, faculty: "DBMS Lab In-charge", maxMarks: 50 },
  { code: "CSEL303", name: "Computer Organization and Architecture Lab", short: "COA Lab", credits: 1, faculty: "COA Lab In-charge", maxMarks: 25 },
  { code: "CSEL304", name: "Skill Base Lab Course (Python Programming)", short: "Python Lab", credits: 2, faculty: "Python Lab In-charge", maxMarks: 50 },
  { code: "CSEM301", name: "Mini Project 1 A", short: "Mini Proj 1A", credits: 1, faculty: "Project Coordinator", maxMarks: 50 }
];

// SEMESTER 4 SUBJECTS
const SUBJECTS_SEM4 = [
  { code: "CSEC401", name: "Applied Mathematics IV", short: "AM-IV", credits: 3, faculty: "Prof. Mathematics", maxMarks: 100 },
  { code: "CSEC402", name: "Operating System", short: "OS", credits: 3, faculty: "Prof. Operating System", maxMarks: 100 },
  { code: "CSEC403", name: "Computer Network", short: "CN", credits: 3, faculty: "Prof. Computer Network", maxMarks: 100 },
  { code: "CSEC404", name: "Critical Thinking and Design", short: "CTD", credits: 2, faculty: "Prof. Design Thinking", maxMarks: 75 },
  { code: "MDMC40X1", name: "Multidisciplinary Minor Course 1 (MDM 1)", short: "MDM-1", credits: 3, faculty: "Department Elective Faculty", maxMarks: 100 },
  { code: "CSEL401", name: "Operating System Lab", short: "OS Lab", credits: 1, faculty: "OS Lab In-charge", maxMarks: 50 },
  { code: "CSEL402", name: "Computer Network Lab", short: "CN Lab", credits: 1, faculty: "CN Lab In-charge", maxMarks: 50 },
  { code: "CSEL403", name: "Skill Base Lab Course (Web Technology)", short: "Web Tech Lab", credits: 2, faculty: "Web Tech In-charge", maxMarks: 50 },
  { code: "CSEL404", name: "Value Education Course (UHV)", short: "UHV", credits: 2, faculty: "UHV Coordinator", maxMarks: 50 },
  { code: "CSEM401", name: "Mini Project 1 B", short: "Mini Proj 1B", credits: 1, faculty: "Project Coordinator", maxMarks: 50 }
];

function getGradeInfo(marks, maxMarks = 100) {
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

// SEM 3 RAW RECORDS
const rawSem3 = [
  { roll: "124AX001", seat: "625253001", marks: { CSEC301: 90, CSEC302: 90, CSEC303: 87, CSEC304: 90, CSEC305: 63, CSEC306: 42, CSEL301: 47, CSEL302: 47, CSEL303: 23, CSEL304: 43, CSEM301: 45 }, total: 667, ec: 22, ecg: 220, sgpi: 10.00, result: "P" },
  { roll: "124AX003", seat: "625253002", marks: { CSEC301: 58, CSEC302: 68, CSEC303: 75, CSEC304: 77, CSEC305: 51, CSEC306: 45, CSEL301: 43, CSEL302: 47, CSEL303: 24, CSEL304: 42, CSEM301: 46 }, total: 576, ec: 22, ecg: 187, sgpi: 8.50, result: "P" },
  { roll: "124AX004", seat: "625253003", marks: { CSEC301: 89, CSEC302: 80, CSEC303: 87, CSEC304: 75, CSEC305: 60, CSEC306: 39, CSEL301: 41, CSEL302: 41, CSEL303: 21, CSEL304: 42, CSEM301: 43 }, total: 618, ec: 22, ecg: 215, sgpi: 9.77, result: "P" },
  { roll: "124AX005", seat: "625253004", marks: { CSEC301: 82, CSEC302: 88, CSEC303: 85, CSEC304: 86, CSEC305: 60, CSEC306: 48, CSEL301: 41, CSEL302: 42, CSEL303: 22, CSEL304: 41, CSEM301: 44 }, total: 639, ec: 22, ecg: 220, sgpi: 10.00, result: "P" },
  { roll: "124AX006", seat: "625253005", marks: { CSEC301: 66, CSEC302: 78, CSEC303: 74, CSEC304: 56, CSEC305: 43, CSEC306: 35, CSEL301: 41, CSEL302: 42, CSEL303: 21, CSEL304: 42, CSEM301: 43 }, total: 541, ec: 22, ecg: 178, sgpi: 8.09, result: "P" },
  { roll: "124AX007", seat: "625253006", marks: { CSEC301: 59, CSEC302: 90, CSEC303: 85, CSEC304: 81, CSEC305: 60, CSEC306: 47, CSEL301: 43, CSEL302: 45, CSEL303: 22, CSEL304: 40, CSEM301: 44 }, total: 616, ec: 22, ecg: 208, sgpi: 9.45, result: "P" },
  { roll: "124AX008", seat: "625253007", marks: { CSEC301: 49, CSEC302: 56, CSEC303: 69, CSEC304: 63, CSEC305: 40, CSEC306: 40, CSEL301: 39, CSEL302: 40, CSEL303: 19, CSEL304: 36, CSEM301: 42 }, total: 493, ec: 22, ecg: 161, sgpi: 7.32, result: "P" },
  { roll: "124AX010", seat: "625253008", marks: { CSEC301: 55, CSEC302: 74, CSEC303: 62, CSEC304: 69, CSEC305: 40, CSEC306: 45, CSEL301: 36, CSEL302: 38, CSEL303: 18, CSEL304: 31, CSEM301: 45 }, total: 513, ec: 22, ecg: 165, sgpi: 7.50, result: "P" },
  { roll: "124AX011", seat: "625253009", marks: { CSEC301: 69, CSEC302: 84, CSEC303: 81, CSEC304: 75, CSEC305: 51, CSEC306: 42, CSEL301: 44, CSEL302: 44, CSEL303: 21, CSEL304: 38, CSEM301: 46 }, total: 595, ec: 22, ecg: 200, sgpi: 9.09, result: "P" },
  { roll: "124AX012", seat: "625253010", marks: { CSEC301: 78, CSEC302: 79, CSEC303: 85, CSEC304: 92, CSEC305: 58, CSEC306: 40, CSEL301: 43, CSEL302: 40, CSEL303: 20, CSEL304: 36, CSEM301: 43 }, total: 614, ec: 22, ecg: 208, sgpi: 9.45, result: "P" },
  { roll: "124AX013", seat: "625253011", marks: { CSEC301: 58, CSEC302: 69, CSEC303: 68, CSEC304: 66, CSEC305: 39, CSEC306: 33, CSEL301: 41, CSEL302: 41, CSEL303: 20, CSEL304: 36, CSEM301: 42 }, total: 513, ec: 22, ecg: 163, sgpi: 7.41, result: "P" },
  { roll: "124AX014", seat: "625253012", marks: { CSEC301: 41, CSEC302: 56, CSEC303: 46, CSEC304: 56, CSEC305: 36, CSEC306: 34, CSEL301: 34, CSEL302: 33, CSEL303: 18, CSEL304: 33, CSEM301: 43 }, total: 430, ec: 22, ecg: 133, sgpi: 6.05, result: "P" },
  { roll: "124AX015", seat: "625253013", marks: { CSEC301: 74, CSEC302: 78, CSEC303: 87, CSEC304: 71, CSEC305: 53, CSEC306: 38, CSEL301: 46, CSEL302: 46, CSEL303: 23, CSEL304: 44, CSEM301: 46 }, total: 606, ec: 22, ecg: 199, sgpi: 9.05, result: "P" },
  { roll: "124AX017", seat: "625253014", marks: { CSEC301: 58, CSEC302: 89, CSEC303: 85, CSEC304: 83, CSEC305: 49, CSEC306: 41, CSEL301: 43, CSEL302: 44, CSEL303: 22, CSEL304: 38, CSEM301: 46 }, total: 598, ec: 22, ecg: 200, sgpi: 9.09, result: "P" },
  { roll: "124AX018", seat: "625253015", marks: { CSEC301: 52, CSEC302: 21, CSEC303: 39, CSEC304: 21, CSEC305: 16, CSEC306: 33, CSEL301: 25, CSEL302: 23, CSEL303: 11, CSEL304: 21, CSEM301: 42 }, backlogs: { CSEC302: true, CSEC303: true, CSEC304: true, CSEC305: true }, total: 304, ec: 11, ecg: 65, sgpi: 0, result: "F" },
  { roll: "124AX019", seat: "625253016", marks: { CSEC301: 46, CSEC302: 55, CSEC303: 65, CSEC304: 57, CSEC305: 41, CSEC306: 42, CSEL301: 39, CSEL302: 40, CSEL303: 20, CSEL304: 38, CSEM301: 44 }, total: 487, ec: 22, ecg: 161, sgpi: 7.32, result: "P" },
  { roll: "124AX020", seat: "625253017", marks: { CSEC301: 68, CSEC302: 78, CSEC303: 79, CSEC304: 78, CSEC305: 50, CSEC306: 43, CSEL301: 41, CSEL302: 43, CSEL303: 22, CSEL304: 41, CSEM301: 44 }, total: 587, ec: 22, ecg: 196, sgpi: 8.91, result: "P" },
  { roll: "124AX021", seat: "625253018", marks: { CSEC301: 59, CSEC302: 62, CSEC303: 80, CSEC304: 77, CSEC305: 60, CSEC306: 38, CSEL301: 42, CSEL302: 42, CSEL303: 21, CSEL304: 39, CSEM301: 43 }, total: 564, ec: 22, ecg: 192, sgpi: 8.73, result: "P" },
  { roll: "124AX022", seat: "625253019", marks: { CSEC301: 66, CSEC302: 69, CSEC303: 70, CSEC304: 70, CSEC305: 49, CSEC306: 45, CSEL301: 40, CSEL302: 43, CSEL303: 23, CSEL304: 35, CSEM301: 44 }, total: 554, ec: 22, ecg: 180, sgpi: 8.18, result: "P" },
  { roll: "124AX023", seat: "625253020", marks: { CSEC301: 70, CSEC302: 81, CSEC303: 82, CSEC304: 86, CSEC305: 49, CSEC306: 41, CSEL301: 41, CSEL302: 42, CSEL303: 21, CSEL304: 39, CSEM301: 43 }, total: 595, ec: 22, ecg: 206, sgpi: 9.36, result: "P" },
  { roll: "124AX024", seat: "625253021", marks: { CSEC301: 96, CSEC302: 93, CSEC303: 87, CSEC304: 81, CSEC305: 66, CSEC306: 41, CSEL301: 42, CSEL302: 43, CSEL303: 23, CSEL304: 39, CSEM301: 45 }, total: 656, ec: 22, ecg: 218, sgpi: 9.91, result: "P" },
  { roll: "124AX025", seat: "625253022", marks: { CSEC301: 68, CSEC302: 76, CSEC303: 80, CSEC304: 76, CSEC305: 45, CSEC306: 45, CSEL301: 46, CSEL302: 46, CSEL303: 23, CSEL304: 41, CSEM301: 43 }, total: 589, ec: 22, ecg: 199, sgpi: 9.05, result: "P" },
  { roll: "124AX026", seat: "625253023", marks: { CSEC301: 94, CSEC302: 92, CSEC303: 86, CSEC304: 95, CSEC305: 69, CSEC306: 46, CSEL301: 47, CSEL302: 48, CSEL303: 24, CSEL304: 43, CSEM301: 43 }, total: 687, ec: 22, ecg: 220, sgpi: 10.00, result: "P" },
  { roll: "124AX027", seat: "625253024", marks: { CSEC301: 61, CSEC302: 76, CSEC303: 77, CSEC304: 57, CSEC305: 42, CSEC306: 38, CSEL301: 35, CSEL302: 37, CSEL303: 18, CSEL304: 38, CSEM301: 42 }, total: 521, ec: 22, ecg: 175, sgpi: 7.95, result: "P" },
  { roll: "124AX028", seat: "625253025", marks: { CSEC301: 76, CSEC302: 80, CSEC303: 73, CSEC304: 76, CSEC305: 61, CSEC306: 44, CSEL301: 46, CSEL302: 46, CSEL303: 23, CSEL304: 41, CSEM301: 43 }, total: 609, ec: 22, ecg: 208, sgpi: 9.45, result: "P" },
  { roll: "124AX029", seat: "625253026", marks: { CSEC301: 57, CSEC302: 60, CSEC303: 55, CSEC304: 64, CSEC305: 34, CSEC306: 35, CSEL301: 40, CSEL302: 40, CSEL303: 20, CSEL304: 39, CSEM301: 42 }, total: 486, ec: 22, ecg: 162, sgpi: 7.36, result: "P" },
  { roll: "124AX030", seat: "625253027", marks: { CSEC301: 52, CSEC302: 60, CSEC303: 69, CSEC304: 64, CSEC305: 42, CSEC306: 36, CSEL301: 33, CSEL302: 39, CSEL303: 18, CSEL304: 35, CSEM301: 41 }, total: 489, ec: 22, ecg: 159, sgpi: 7.23, result: "P" },
  { roll: "124AX032", seat: "625253028", marks: { CSEC301: 43, CSEC302: 67, CSEC303: 74, CSEC304: 57, CSEC305: 54, CSEC306: 39, CSEL301: 34, CSEL302: 37, CSEL303: 18, CSEL304: 34, CSEM301: 43 }, total: 500, ec: 22, ecg: 156, sgpi: 7.09, result: "P" },
  { roll: "124AX033", seat: "625253029", marks: { CSEC301: 69, CSEC302: 71, CSEC303: 78, CSEC304: 70, CSEC305: 47, CSEC306: 33, CSEL301: 38, CSEL302: 39, CSEL303: 19, CSEL304: 35, CSEM301: 44 }, total: 543, ec: 22, ecg: 177, sgpi: 8.05, result: "P" },
  { roll: "124AX035", seat: "625253030", marks: { CSEC301: 88, CSEC302: 68, CSEC303: 80, CSEC304: 67, CSEC305: 40, CSEC306: 40, CSEL301: 43, CSEL302: 45, CSEL303: 22, CSEL304: 42, CSEM301: 45 }, total: 580, ec: 22, ecg: 194, sgpi: 8.82, result: "P" },
  { roll: "124AX036", seat: "625253031", marks: { CSEC301: 70, CSEC302: 85, CSEC303: 86, CSEC304: 82, CSEC305: 59, CSEC306: 38, CSEL301: 41, CSEL302: 45, CSEL303: 22, CSEL304: 41, CSEM301: 45 }, total: 614, ec: 22, ecg: 210, sgpi: 9.55, result: "P" },
  { roll: "124AX037", seat: "625253032", marks: { CSEC301: 68, CSEC302: 81, CSEC303: 78, CSEC304: 66, CSEC305: 54, CSEC306: 38, CSEL301: 39, CSEL302: 46, CSEL303: 23, CSEL304: 40, CSEM301: 46 }, total: 579, ec: 22, ecg: 192, sgpi: 8.73, result: "P" },
  { roll: "124AX038", seat: "625253033", marks: { CSEC301: 75, CSEC302: 80, CSEC303: 80, CSEC304: 82, CSEC305: 44, CSEC306: 43, CSEL301: 44, CSEL302: 46, CSEL303: 23, CSEL304: 41, CSEM301: 44 }, total: 602, ec: 22, ecg: 209, sgpi: 9.50, result: "P" },
  { roll: "124AX039", seat: "625253034", marks: { CSEC301: 63, CSEC302: 83, CSEC303: 69, CSEC304: 74, CSEC305: 50, CSEC306: 45, CSEL301: 40, CSEL302: 40, CSEL303: 20, CSEL304: 39, CSEM301: 44 }, total: 567, ec: 22, ecg: 188, sgpi: 8.55, result: "P" },
  { roll: "124AX040", seat: "625253035", marks: { CSEC301: 32, CSEC302: 56, CSEC303: 59, CSEC304: 57, CSEC305: 47, CSEC306: 39, CSEL301: 38, CSEL302: 38, CSEL303: 19, CSEL304: 34, CSEM301: 42 }, backlogs: { CSEC301: true }, total: 461, ec: 19, ecg: 137, sgpi: 0, result: "F" },
  { roll: "124AX041", seat: "625253036", marks: { CSEC301: 33, CSEC302: 21, CSEC303: 43, CSEC304: 31, CSEC305: 20, CSEC306: 25, CSEL301: 25, CSEL302: 24, CSEL303: 11, CSEL304: 26, CSEM301: 40 }, backlogs: { CSEC301: true, CSEC302: true, CSEC303: true, CSEC304: true, CSEC305: true }, total: 299, ec: 11, ecg: 61, sgpi: 0, result: "F" },
  { roll: "124AX043", seat: "625253037", marks: { CSEC301: 68, CSEC302: 71, CSEC303: 76, CSEC304: 86, CSEC305: 53, CSEC306: 35, CSEL301: 40, CSEL302: 40, CSEL303: 19, CSEL304: 36, CSEM301: 44 }, total: 568, ec: 22, ecg: 189, sgpi: 8.59, result: "P" },
  { roll: "124AX044", seat: "625253038", marks: { CSEC301: 66, CSEC302: 82, CSEC303: 76, CSEC304: 66, CSEC305: 58, CSEC306: 45, CSEL301: 44, CSEL302: 45, CSEL303: 23, CSEL304: 42, CSEM301: 44 }, total: 591, ec: 22, ecg: 197, sgpi: 8.95, result: "P" },
  { roll: "124AX045", seat: "625253039", marks: { CSEC301: 47, CSEC302: 70, CSEC303: 73, CSEC304: 85, CSEC305: 51, CSEC306: 44, CSEL301: 40, CSEL302: 41, CSEL303: 21, CSEL304: 37, CSEM301: 46 }, total: 555, ec: 22, ecg: 183, sgpi: 8.32, result: "P" },
  { roll: "124AX046", seat: "625253040", marks: { CSEC301: 36, CSEC302: 59, CSEC303: 63, CSEC304: 74, CSEC305: 48, CSEC306: 40, CSEL301: 40, CSEL302: 41, CSEL303: 21, CSEL304: 41, CSEM301: 44 }, backlogs: { CSEC301: true }, total: 507, ec: 19, ecg: 157, sgpi: 0, result: "F" },
  { roll: "124AX047", seat: "625253041", marks: { CSEC301: 68, CSEC302: 78, CSEC303: 73, CSEC304: 93, CSEC305: 62, CSEC306: 45, CSEL301: 44, CSEL302: 46, CSEL303: 22, CSEL304: 43, CSEM301: 44 }, total: 618, ec: 22, ecg: 202, sgpi: 9.18, result: "P" },
  { roll: "124AX048", seat: "625253042", marks: { CSEC301: 59, CSEC302: 75, CSEC303: 76, CSEC304: 76, CSEC305: 44, CSEC306: 38, CSEL301: 40, CSEL302: 40, CSEL303: 20, CSEL304: 36, CSEM301: 42 }, total: 546, ec: 22, ecg: 185, sgpi: 8.41, result: "P" },
  { roll: "124AX049", seat: "625253043", marks: { CSEC301: 48, CSEC302: 85, CSEC303: 79, CSEC304: 81, CSEC305: 56, CSEC306: 45, CSEL301: 45, CSEL302: 46, CSEL303: 22, CSEL304: 39, CSEM301: 44 }, total: 590, ec: 22, ecg: 196, sgpi: 8.91, result: "P" },
  { roll: "124AX050", seat: "625253044", marks: { CSEC301: 55, CSEC302: 67, CSEC303: 76, CSEC304: 61, CSEC305: 56, CSEC306: 38, CSEL301: 33, CSEL302: 37, CSEL303: 18, CSEL304: 38, CSEM301: 43 }, total: 522, ec: 22, ecg: 172, sgpi: 7.82, result: "P" },
  { roll: "124AX051", seat: "625253045", marks: { CSEC301: 71, CSEC302: 81, CSEC303: 75, CSEC304: 82, CSEC305: 53, CSEC306: 42, CSEL301: 39, CSEL302: 43, CSEL303: 21, CSEL304: 40, CSEM301: 43 }, total: 590, ec: 22, ecg: 206, sgpi: 9.36, result: "P" },
  { roll: "124AX052", seat: "625253046", marks: { CSEC301: 76, CSEC302: 80, CSEC303: 79, CSEC304: 75, CSEC305: 47, CSEC306: 36, CSEL301: 38, CSEL302: 42, CSEL303: 23, CSEL304: 40, CSEM301: 46 }, total: 582, ec: 22, ecg: 200, sgpi: 9.09, result: "P" },
  { roll: "124AX053", seat: "625253047", marks: { CSEC301: 13, CSEC302: 25, CSEC303: 46, CSEC304: 22, CSEC305: 24, CSEC306: 40, CSEL301: 28, CSEL302: 27, CSEL303: 15, CSEL304: 35, CSEM301: 46 }, backlogs: { CSEC301: true, CSEC302: true, CSEC304: true, CSEC305: true }, total: 321, ec: 11, ecg: 89, sgpi: 0, result: "F" },
  { roll: "124AX054", seat: "625253048", marks: { CSEC301: 35, CSEC302: 26, CSEC303: 48, CSEC304: 41, CSEC305: 16, CSEC306: 31, CSEL301: 29, CSEL302: 25, CSEL303: 12, CSEL304: 27, CSEM301: 38 }, backlogs: { CSEC301: true, CSEC302: true, CSEC305: true }, total: 328, ec: 14, ecg: 79, sgpi: 0, result: "F" },
  { roll: "124AX055", seat: "625253049", marks: { CSEC301: 79, CSEC302: 80, CSEC303: 73, CSEC304: 70, CSEC305: 52, CSEC306: 38, CSEL301: 44, CSEL302: 44, CSEL303: 22, CSEL304: 43, CSEM301: 45 }, total: 590, ec: 22, ecg: 197, sgpi: 8.95, result: "P" },
  { roll: "124AX056", seat: "625253050", marks: { CSEC301: 55, CSEC302: 47, CSEC303: 72, CSEC304: 57, CSEC305: 41, CSEC306: 38, CSEL301: 39, CSEL302: 41, CSEL303: 20, CSEL304: 37, CSEM301: 43 }, total: 490, ec: 22, ecg: 160, sgpi: 7.27, result: "P" },
  { roll: "124AX057", seat: "625253051", marks: { CSEC301: 57, CSEC302: 67, CSEC303: 63, CSEC304: 71, CSEC305: 56, CSEC306: 40, CSEL301: 44, CSEL302: 45, CSEL303: 20, CSEL304: 40, CSEM301: 43 }, total: 546, ec: 22, ecg: 180, sgpi: 8.18, result: "P" },
  { roll: "124AX058", seat: "625253052", marks: { CSEC301: 73, CSEC302: 78, CSEC303: 69, CSEC304: 74, CSEC305: 46, CSEC306: 32, CSEL301: 43, CSEL302: 44, CSEL303: 20, CSEL304: 40, CSEM301: 45 }, total: 564, ec: 22, ecg: 184, sgpi: 8.36, result: "P" },
  { roll: "124AX059", seat: "625253053", marks: { CSEC301: 61, CSEC302: 65, CSEC303: 76, CSEC304: 45, CSEC305: 31, CSEC306: 40, CSEL301: 30, CSEL302: 39, CSEL303: 18, CSEL304: 40, CSEM301: 43 }, backlogs: { CSEC304: true }, total: 488, ec: 19, ecg: 166, sgpi: 0, result: "F" },
  { roll: "124AX060", seat: "625253054", marks: { CSEC301: 39, CSEC302: 33, CSEC303: 48, CSEC304: 22, CSEC305: 20, CSEC306: 33, CSEL301: 30, CSEL302: 29, CSEL303: 15, CSEL304: 30, CSEM301: 38 }, backlogs: { CSEC301: true, CSEC302: true, CSEC304: true, CSEC305: true }, total: 337, ec: 11, ecg: 72, sgpi: 0, result: "F" },
  { roll: "124AX061", seat: "625253055", marks: { CSEC301: 80, CSEC302: 85, CSEC303: 81, CSEC304: 84, CSEC305: 64, CSEC306: 45, CSEL301: 42, CSEL302: 45, CSEL303: 23, CSEL304: 43, CSEM301: 43 }, total: 635, ec: 22, ecg: 220, sgpi: 10.00, result: "P" },
  { roll: "124AX062", seat: "625253056", marks: { CSEC301: 60, CSEC302: 68, CSEC303: 70, CSEC304: 63, CSEC305: 44, CSEC306: 33, CSEL301: 38, CSEL302: 38, CSEL303: 19, CSEL304: 35, CSEM301: 39 }, total: 507, ec: 22, ecg: 165, sgpi: 7.50, result: "P" },
  { roll: "124AX063", seat: "625253057", marks: { CSEC301: 57, CSEC302: 67, CSEC303: 69, CSEC304: 68, CSEC305: 51, CSEC306: 37, CSEL301: 38, CSEL302: 38, CSEL303: 21, CSEL304: 37, CSEM301: 44 }, total: 527, ec: 22, ecg: 165, sgpi: 7.50, result: "P" },
  { roll: "225AX064", seat: "625253058", marks: { CSEC301: 58, CSEC302: 80, CSEC303: 78, CSEC304: 75, CSEC305: 43, CSEC306: 45, CSEL301: 40, CSEL302: 41, CSEL303: 21, CSEL304: 41, CSEM301: 45 }, total: 567, ec: 22, ecg: 194, sgpi: 8.82, result: "P" },
  { roll: "225AX065", seat: "625253059", marks: { CSEC301: 68, CSEC302: 86, CSEC303: 69, CSEC304: 80, CSEC305: 44, CSEC306: 42, CSEL301: 43, CSEL302: 43, CSEL303: 21, CSEL304: 42, CSEM301: 45 }, total: 583, ec: 22, ecg: 194, sgpi: 8.82, result: "P" },
  { roll: "225AX066", seat: "625253060", marks: { CSEC301: 74, CSEC302: 93, CSEC303: 65, CSEC304: 72, CSEC305: 59, CSEC306: 48, CSEL301: 45, CSEL302: 46, CSEL303: 23, CSEL304: 44, CSEM301: 45 }, total: 614, ec: 22, ecg: 197, sgpi: 8.95, result: "P" },
  { roll: "225AX067", seat: "625253061", marks: { CSEC301: 43, CSEC302: 37, CSEC303: 59, CSEC304: 40, CSEC305: 33, CSEC306: 34, CSEL301: 29, CSEL302: 28, CSEL303: 16, CSEL304: 29, CSEM301: 40 }, backlogs: { CSEC301: true, CSEC302: true, CSEC304: true }, total: 386, ec: 13, ecg: 81, sgpi: 0, result: "F" },
  { roll: "225AX068", seat: "625253062", marks: { CSEC301: 61, CSEC302: 74, CSEC303: 73, CSEC304: 80, CSEC305: 52, CSEC306: 43, CSEL301: 43, CSEL302: 42, CSEL303: 22, CSEL304: 41, CSEM301: 45 }, total: 576, ec: 22, ecg: 193, sgpi: 8.77, result: "P" },
  { roll: "225AX069", seat: "625253063", marks: { CSEC301: 50, CSEC302: 68, CSEC303: 70, CSEC304: 76, CSEC305: 42, CSEC306: 45, CSEL301: 40, CSEL302: 41, CSEL303: 21, CSEL304: 40, CSEM301: 45 }, total: 538, ec: 22, ecg: 182, sgpi: 8.27, result: "P" }
];

// Load current Sem 4 data
const { INITIAL_STUDENTS } = require('e:/AUDIT/src/data/mockData.js');

const sem3Map = {};
rawSem3.forEach(s => {
  sem3Map[s.roll] = s;
});

const mergedStudents = INITIAL_STUDENTS.map((stu, idx) => {
  const sem3Data = sem3Map[stu.rollNo];
  
  if (sem3Data) {
    const sem3SubjectScores = {};
    let sem3Backlogs = 0;

    SUBJECTS_SEM3.forEach(subj => {
      const rawMark = sem3Data.marks[subj.code] || 0;
      const isBacklog = sem3Data.backlogs && sem3Data.backlogs[subj.code] ? true : false;
      let gradeInfo = getGradeInfo(rawMark, subj.maxMarks);
      if (isBacklog) {
        gradeInfo = { grade: "F", points: 0, label: "Fail / Backlog" };
        sem3Backlogs++;
      }

      sem3SubjectScores[subj.code] = {
        subjectName: subj.name,
        short: subj.short,
        credits: subj.credits,
        faculty: subj.faculty,
        marks: rawMark,
        maxMarks: subj.maxMarks,
        grade: gradeInfo.grade,
        points: gradeInfo.points,
        isBacklog: gradeInfo.grade === "F"
      };
    });

    const sem3Sgpa = sem3Data.sgpi || 0;
    
    // Add Semester 3 to student's semesterResults
    stu.semesterResults[3] = {
      semesterNumber: 3,
      sgpa: sem3Sgpa,
      earnedCredits: sem3Data.ecg,
      totalCredits: 22,
      backlogs: sem3Backlogs,
      status: sem3Data.result === "P" ? (sem3Sgpa >= 7.5 ? "Distinction" : sem3Sgpa >= 6.5 ? "First Class" : "Pass") : "ATKT / Fail",
      subjects: sem3SubjectScores
    };

    // Calculate Cumulative CGPA across Sem 3 and Sem 4 (43 total credits)
    const sem4EarnedPoints = stu.semesterResults[4]?.earnedCredits || 0;
    const sem3EarnedPoints = sem3Data.ecg || 0;
    const totalEarnedPoints = sem3EarnedPoints + sem4EarnedPoints;
    const totalCredits = 22 + 21; // 43 credits
    
    stu.cgpa = Number((totalEarnedPoints / totalCredits).toFixed(2));
    stu.activeBacklogs = (stu.semesterResults[4]?.backlogs || 0) + sem3Backlogs;
    stu.totalMarks = (stu.semesterResults[4]?.totalMarks || stu.totalMarks || 0) + sem3Data.total;
    stu.maxTotalMarks = 750 + 725; // 1475 marks

    // Update tier
    if (stu.activeBacklogs > 0) stu.performanceTier = "At-Risk (Backlogs)";
    else if (stu.cgpa >= 9.0) stu.performanceTier = "Outstanding";
    else if (stu.cgpa >= 7.5) stu.performanceTier = "Distinction";
    else if (stu.cgpa >= 6.5) stu.performanceTier = "First Class";
    else stu.performanceTier = "Pass Class";
  }

  stu.batch = "2024-2028";
  return stu;
});

const DEFAULT_BATCHES = [
  {
    id: "2024-2028",
    name: "Batch 2024–2028",
    academicYears: "SE to BE (2024-2028)",
    entryYear: 2024,
    gradYear: 2028,
    activeSemesters: [3, 4, 5, 6, 7, 8],
    currentSemester: 4,
    description: "4-Year Cohort covering SE (Sem 3 & 4), TE (Sem 5 & 6), and BE (Sem 7 & 8). Official Sem 3 and Sem 4 gazettes loaded.",
    isRealData: true,
    scheme: "R-24 (Autonomous)"
  },
  {
    id: "2023-2027",
    name: "Batch 2023–2027",
    academicYears: "SE to BE (2023-2027)",
    entryYear: 2023,
    gradYear: 2027,
    activeSemesters: [3, 4, 5, 6, 7, 8],
    currentSemester: 6,
    description: "4-Year Cohort covering SE (Sem 3 & 4), TE (Sem 5 & 6), and BE (Sem 7 & 8).",
    isRealData: false,
    scheme: "R-24 / R-19"
  },
  {
    id: "2022-2026",
    name: "Batch 2022–2026",
    academicYears: "SE to BE (2022-2026)",
    entryYear: 2022,
    gradYear: 2026,
    activeSemesters: [3, 4, 5, 6, 7, 8],
    currentSemester: 8,
    description: "4-Year Cohort covering SE (Sem 3 & 4), TE (Sem 5 & 6), and BE (Sem 7 & 8).",
    isRealData: false,
    scheme: "R-19 (Autonomous)"
  },
  {
    id: "2025-2029",
    name: "Batch 2025–2029",
    academicYears: "SE to BE (2025-2029)",
    entryYear: 2025,
    gradYear: 2029,
    activeSemesters: [3, 4, 5, 6, 7, 8],
    currentSemester: 4,
    description: "Upcoming 4-Year Cohort covering SE to BE.",
    isRealData: false,
    scheme: "R-24 (Autonomous)"
  }
];

const outputContent = `// SIES GRADUATE SCHOOL OF TECHNOLOGY (AUTONOMOUS)
// Department of Computer Science & Engineering (IoT & CS including BCT)
// Multi-Batch Academic Dataset

export const DEFAULT_BATCHES = ${JSON.stringify(DEFAULT_BATCHES, null, 2)};

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
  "SE-SEM3": ${JSON.stringify(SUBJECTS_SEM3, null, 2)},
  "SE-SEM4": ${JSON.stringify(SUBJECTS_SEM4, null, 2)}
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

export const INITIAL_STUDENTS = ${JSON.stringify(mergedStudents, null, 2)};

export function generateBatchData() {
  return INITIAL_STUDENTS;
}
`;

fs.writeFileSync('e:/AUDIT/src/data/mockData.js', outputContent, 'utf8');
console.log('Successfully integrated Semester 3 and Semester 4 results into SE Academic Year 2025-2026 dataset!');
