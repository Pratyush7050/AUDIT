const fs = require('fs');

// SEMESTER 4 SUBJECTS
const SUBJECTS_SEM4 = [
  { code: "CSEC401", name: "Applied Mathematics IV", short: "AM-IV", credits: 3, faculty: "Prof. Mathematics", maxMarks: 100 },
  { code: "CSEC402", name: "Operating System", short: "OS", credits: 3, faculty: "Prof. Operating System", maxMarks: 100 },
  { code: "CSEC403", name: "Computer Network", short: "CN", credits: 3, faculty: "Prof. Computer Network", maxMarks: 100 },
  { code: "CSEC404", name: "Critical Thinking and Design", short: "CTD", credits: 2, faculty: "Prof. Design Thinking", maxMarks: 75 },
  { code: "MDMC40X1", name: "Multidisciplinary Minor Course 1 (MDM 1)", short: "MDM-1", credits: 3, faculty: "Elective Faculty", maxMarks: 100 },
  { code: "CSEL401", name: "Operating System Lab", short: "OS Lab", credits: 1, faculty: "OS Lab In-charge", maxMarks: 50 },
  { code: "CSEL402", name: "Computer Network Lab", short: "CN Lab", credits: 1, faculty: "CN Lab In-charge", maxMarks: 50 },
  { code: "CSEL403", name: "Skill Base Lab Course (Web Technology)", short: "Web Tech Lab", credits: 2, faculty: "Web Tech In-charge", maxMarks: 50 },
  { code: "CSEL404", name: "Value Education Course (UHV)", short: "UHV", credits: 2, faculty: "UHV Coordinator", maxMarks: 50 },
  { code: "CSEM401", name: "Mini Project 1 B", short: "Mini Proj 1B", credits: 1, faculty: "Project Coordinator", maxMarks: 50 }
];

// SEMESTER 2 SUBJECTS
const SUBJECTS_SEM2 = [
  { code: "FEC201", name: "Applied Mathematics - II", short: "AM-II", credits: 3, faculty: "Prof. Applied Math", maxMarks: 100 },
  { code: "FEC202", name: "Applied Physics", short: "Physics", credits: 3, faculty: "Prof. Applied Physics", maxMarks: 100 },
  { code: "FEC203", name: "Engineering Graphics", short: "Graphics", credits: 2, faculty: "Prof. Engg Graphics", maxMarks: 75 },
  { code: "FEC204", name: "Digital System Design", short: "DSD", credits: 3, faculty: "Prof. Digital Systems", maxMarks: 100 },
  { code: "FEC205", name: "Professional Communication Techniques", short: "PCT", credits: 2, faculty: "Prof. Communication", maxMarks: 75 },
  { code: "FEL2011", name: "Applied Physics Lab", short: "Physics Lab", credits: 0.5, faculty: "Physics Lab Faculty", maxMarks: 25 },
  { code: "FEL202", name: "Engineering Graphics Lab", short: "Graphics Lab", credits: 1, faculty: "Graphics Lab Faculty", maxMarks: 50 },
  { code: "FEL203", name: "Digital System Design Lab", short: "DSD Lab", credits: 1, faculty: "DSD Lab Faculty", maxMarks: 50 },
  { code: "FEL204", name: "Professional Communication Techniques Lab", short: "PCT Lab", credits: 0.5, faculty: "PCT Lab Faculty", maxMarks: 25 },
  { code: "FEL205", name: "Object Oriented Programming Methodology Lab", short: "OOPM Lab", credits: 2, faculty: "OOPM Lab Faculty", maxMarks: 50 },
  { code: "FEL206", name: "Engineering Workshop - II", short: "Workshop II", credits: 1, faculty: "Workshop In-charge", maxMarks: 25 },
  { code: "FEL207", name: "Indian Knowledge System", short: "IKS", credits: 2, faculty: "IKS Coordinator", maxMarks: 25 }
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

// SEM 2 RAW STUDENTS
const rawSem2 = [
  { roll: "124AX001", seat: "525152001", marks: { FEC201: 99, FEC202: 94, FEC203: 45, FEC204: 92, FEC205: 61, FEL2011: 23, FEL202: 42, FEL203: 44, FEL204: 23, FEL205: 44, FEL206: 23, FEL207: 23 }, total: 613, ec: 21, ecg: 204, sgpi: 9.71, result: "P" },
  { roll: "124AX002", seat: "525152002", marks: { FEC201: 21, FEC202: 23, FEC203: 25, FEC204: 28, FEC205: 37, FEL2011: 22, FEL202: 37, FEL203: 38, FEL204: 21, FEL205: 40, FEL206: 22, FEL207: 22 }, backlogs: { FEC201: true, FEC202: true, FEC203: true, FEC204: true }, total: 336, ec: 10, ecg: 87, sgpi: 0, result: "F" },
  { roll: "124AX003", seat: "525152003", marks: { FEC201: 61, FEC202: 57, FEC203: 62, FEC204: 69, FEC205: 57, FEL2011: 23, FEL202: 42, FEL203: 46, FEL204: 23, FEL205: 46, FEL206: 24, FEL207: 23 }, total: 533, ec: 21, ecg: 178, sgpi: 8.48, result: "P" },
  { roll: "124AX004", seat: "525152004", marks: { FEC201: 95, FEC202: 85, FEC203: 52, FEC204: 75, FEC205: 56, FEL2011: 24, FEL202: 43, FEL203: 45, FEL204: 23, FEL205: 46, FEL206: 23, FEL207: 22 }, total: 589, ec: 21, ecg: 197, sgpi: 9.38, result: "P" },
  { roll: "124AX005", seat: "525152005", marks: { FEC201: 97, FEC202: 78, FEC203: 62, FEC204: 81, FEC205: 53, FEL2011: 20, FEL202: 43, FEL203: 41, FEL204: 19, FEL205: 40, FEL206: 23, FEL207: 18 }, total: 575, ec: 21, ecg: 198.5, sgpi: 9.45, result: "P" },
  { roll: "124AX006", seat: "525152006", marks: { FEC201: 90, FEC202: 87, FEC203: 71, FEC204: 69, FEC205: 49, FEL2011: 24, FEL202: 47, FEL203: 42, FEL204: 22, FEL205: 46, FEL206: 24, FEL207: 21 }, total: 592, ec: 21, ecg: 195, sgpi: 9.29, result: "P" },
  { roll: "124AX007", seat: "525152007", marks: { FEC201: 71, FEC202: 77, FEC203: 61, FEC204: 74, FEC205: 58, FEL2011: 23, FEL202: 45, FEL203: 46, FEL204: 23, FEL205: 42, FEL206: 23, FEL207: 20 }, total: 563, ec: 21, ecg: 193, sgpi: 9.19, result: "P" },
  { roll: "124AX008", seat: "525152008", marks: { FEC201: 69, FEC202: 44, FEC203: 43, FEC204: 58, FEC205: 43, FEL2011: 23, FEL202: 41, FEL203: 40, FEL204: 19, FEL205: 43, FEL206: 23, FEL207: 17 }, total: 463, ec: 21, ecg: 148.5, sgpi: 7.07, result: "P" },
  { roll: "124AX009", seat: "525152009", marks: { FEC201: 05, FEC202: 12, FEC203: 24, FEC204: 23, FEC205: 36, FEL2011: 18, FEL202: 27, FEL203: 34, FEL204: 19, FEL205: 30, FEL206: 22, FEL207: 16 }, backlogs: { FEC201: true, FEC202: true, FEC203: true, FEC204: true }, total: 266, ec: 10, ecg: 69.5, sgpi: 0, result: "F" },
  { roll: "124AX010", seat: "525152010", marks: { FEC201: 52, FEC202: 46, FEC203: 49, FEC204: 40, FEC205: 48, FEL2011: 19, FEL202: 37, FEL203: 39, FEL204: 19, FEL205: 39, FEL206: 22, FEL207: 18 }, backlogs: { FEC204: true }, total: 428, ec: 18, ecg: 131, sgpi: 0, result: "F" },
  { roll: "124AX011", seat: "525152011", marks: { FEC201: 65, FEC202: 50, FEC203: 69, FEC204: 59, FEC205: 50, FEL2011: 23, FEL202: 46, FEL203: 43, FEL204: 23, FEL205: 45, FEL206: 22, FEL207: 20 }, total: 515, ec: 21, ecg: 171, sgpi: 8.14, result: "P" },
  { roll: "124AX012", seat: "525152012", marks: { FEC201: 84, FEC202: 83, FEC203: 66, FEC204: 73, FEC205: 55, FEL2011: 23, FEL202: 45, FEL203: 42, FEL204: 23, FEL205: 42, FEL206: 24, FEL207: 22 }, total: 582, ec: 21, ecg: 200, sgpi: 9.52, result: "P" },
  { roll: "124AX013", seat: "525152013", marks: { FEC201: 53, FEC202: 55, FEC203: 54, FEC204: 43, FEC205: 49, FEL2011: 22, FEL202: 40, FEL203: 39, FEL204: 21, FEL205: 40, FEL206: 23, FEL207: 23 }, total: 467, ec: 21, ecg: 137, sgpi: 6.52, result: "P" },
  { roll: "124AX014", seat: "525152014", marks: { FEC201: 43, FEC202: 30, FEC203: 47, FEC204: 44, FEC205: 52, FEL2011: 21, FEL202: 40, FEL203: 39, FEL204: 22, FEL205: 39, FEL206: 21, FEL207: 22 }, backlogs: { FEC202: true }, total: 420, ec: 18, ecg: 129, sgpi: 0, result: "F" },
  { roll: "124AX015", seat: "525152015", marks: { FEC201: 73, FEC202: 80, FEC203: 72, FEC204: 62, FEC205: 59, FEL2011: 23, FEL202: 46, FEL203: 44, FEL204: 23, FEL205: 46, FEL206: 23, FEL207: 21 }, total: 572, ec: 21, ecg: 193, sgpi: 9.19, result: "P" },
  { roll: "124AX016", seat: "525152016", marks: { FEC201: 02, FEC202: 06, FEC203: 09, FEC204: 11, FEC205: 18, FEL2011: 18, FEL202: 24, FEL203: 38, FEL204: 17, FEL205: 26, FEL206: 23, FEL207: 12 }, backlogs: { FEC201: true, FEC202: true, FEC203: true, FEC204: true, FEC205: true }, total: 219, ec: 8, ecg: 53.5, sgpi: 0, result: "F" },
  { roll: "124AX017", seat: "525152017", marks: { FEC201: 72, FEC202: 78, FEC203: 60, FEC204: 67, FEC205: 48, FEL2011: 23, FEL202: 43, FEL203: 42, FEL204: 22, FEL205: 42, FEL206: 21, FEL207: 21 }, total: 539, ec: 21, ecg: 186, sgpi: 8.86, result: "P" },
  { roll: "124AX018", seat: "525152018", marks: { FEC201: 10, FEC202: 14, FEC203: 33, FEC204: 18, FEC205: 41, FEL2011: 16, FEL202: 31, FEL203: 30, FEL204: 16, FEL205: 26, FEL206: 18, FEL207: 13 }, backlogs: { FEC201: true, FEC202: true, FEC204: true }, total: 286, ec: 12, ecg: 73, sgpi: 0, result: "F" },
  { roll: "124AX019", seat: "525152019", marks: { FEC201: 42, FEC202: 45, FEC203: 31, FEC204: 39, FEC205: 45, FEL2011: 20, FEL202: 37, FEL203: 38, FEL204: 21, FEL205: 41, FEL206: 21, FEL207: 21 }, backlogs: { FEC204: true }, total: 401, ec: 18, ecg: 126, sgpi: 0, result: "F" },
  { roll: "124AX020", seat: "525152020", marks: { FEC201: 59, FEC202: 53, FEC203: 71, FEC204: 72, FEC205: 51, FEL2011: 23, FEL202: 45, FEL203: 41, FEL204: 23, FEL205: 40, FEL206: 21, FEL207: 23 }, total: 522, ec: 21, ecg: 174, sgpi: 8.29, result: "P" },
  { roll: "124AX021", seat: "525152021", marks: { FEC201: 59, FEC202: 59, FEC203: 63, FEC204: 86, FEC205: 49, FEL2011: 23, FEL202: 45, FEL203: 45, FEL204: 23, FEL205: 40, FEL206: 22, FEL207: 22 }, total: 536, ec: 21, ecg: 180, sgpi: 8.57, result: "P" },
  { roll: "124AX022", seat: "525152022", marks: { FEC201: 70, FEC202: 59, FEC203: 46, FEC204: 63, FEC205: 46, FEL2011: 22, FEL202: 44, FEL203: 42, FEL204: 23, FEL205: 41, FEL206: 23, FEL207: 19 }, total: 498, ec: 21, ecg: 169, sgpi: 8.05, result: "P" },
  { roll: "124AX023", seat: "525152023", marks: { FEC201: 90, FEC202: 91, FEC203: 69, FEC204: 85, FEC205: 57, FEL2011: 23, FEL202: 43, FEL203: 44, FEL204: 23, FEL205: 45, FEL206: 21, FEL207: 20 }, total: 611, ec: 21, ecg: 208, sgpi: 9.90, result: "P" },
  { roll: "124AX024", seat: "525152024", marks: { FEC201: 99, FEC202: 94, FEC203: 74, FEC204: 99, FEC205: 56, FEL2011: 23, FEL202: 47, FEL203: 44, FEL204: 23, FEL205: 44, FEL206: 21, FEL207: 23 }, total: 647, ec: 21, ecg: 206, sgpi: 9.81, result: "P" },
  { roll: "124AX025", seat: "525152025", marks: { FEC201: 82, FEC202: 80, FEC203: 58, FEC204: 69, FEC205: 52, FEL2011: 23, FEL202: 32, FEL203: 41, FEL204: 20, FEL205: 42, FEL206: 22, FEL207: 20 }, total: 541, ec: 21, ecg: 190, sgpi: 9.05, result: "P" },
  { roll: "124AX026", seat: "525152026", marks: { FEC201: 100, FEC202: 99, FEC203: 73, FEC204: 91, FEC205: 57, FEL2011: 24, FEL202: 46, FEL203: 46, FEL204: 22, FEL205: 46, FEL206: 23, FEL207: 23 }, total: 650, ec: 21, ecg: 208, sgpi: 9.90, result: "P" },
  { roll: "124AX027", seat: "525152027", marks: { FEC201: 72, FEC202: 64, FEC203: 56, FEC204: 67, FEC205: 35, FEL2011: 20, FEL202: 28, FEL203: 35, FEL204: 18, FEL205: 33, FEL206: 20, FEL207: 17 }, total: 465, ec: 21, ecg: 153, sgpi: 7.29, result: "P" },
  { roll: "124AX028", seat: "525152028", marks: { FEC201: 71, FEC202: 79, FEC203: 73, FEC204: 62, FEC205: 51, FEL2011: 23, FEL202: 42, FEL203: 43, FEL204: 23, FEL205: 48, FEL206: 22, FEL207: 21 }, total: 558, ec: 21, ecg: 186, sgpi: 8.86, result: "P" },
  { roll: "124AX029", seat: "525152029", marks: { FEC201: 50, FEC202: 45, FEC203: 50, FEC204: 53, FEC205: 41, FEL2011: 21, FEL202: 44, FEL203: 39, FEL204: 22, FEL205: 46, FEL206: 23, FEL207: 20 }, total: 454, ec: 21, ecg: 156, sgpi: 7.43, result: "P" },
  { roll: "124AX030", seat: "525152030", marks: { FEC201: 64, FEC202: 57, FEC203: 56, FEC204: 42, FEC205: 55, FEL2011: 20, FEL202: 47, FEL203: 39, FEL204: 22, FEL205: 42, FEL206: 23, FEL207: 21 }, total: 488, ec: 21, ecg: 162, sgpi: 7.71, result: "P" },
  { roll: "124AX031", seat: "525152031", marks: { FEC201: 13, FEC202: 26, FEC203: 36, FEC204: 39, FEC205: 48, FEL2011: 19, FEL202: 29, FEL203: 37, FEL204: 22, FEL205: 41, FEL206: 21, FEL207: 20 }, backlogs: { FEC201: true, FEC202: true, FEC204: true }, total: 363, ec: 12, ecg: 97.5, sgpi: 0, result: "F" },
  { roll: "124AX032", seat: "525152032", marks: { FEC201: 53, FEC202: 55, FEC203: 48, FEC204: 44, FEC205: 48, FEL2011: 21, FEL202: 42, FEL203: 39, FEL204: 23, FEL205: 38, FEL206: 21, FEL207: 20 }, backlogs: { FEC204: true }, total: 452, ec: 18, ecg: 137, sgpi: 0, result: "F" },
  { roll: "124AX033", seat: "525152033", marks: { FEC201: 85, FEC202: 67, FEC203: 54, FEC204: 56, FEC205: 54, FEL2011: 21, FEL202: 41, FEL203: 39, FEL204: 22, FEL205: 40, FEL206: 23, FEL207: 18 }, total: 520, ec: 21, ecg: 176, sgpi: 8.38, result: "P" },
  { roll: "124AX034", seat: "525152034", marks: { FEC201: 05, FEC202: 16, FEC203: 15, FEC204: 32, FEC205: 52, FEL2011: 19, FEL202: 29, FEL203: 38, FEL204: 20, FEL205: 39, FEL206: 22, FEL207: 17 }, backlogs: { FEC201: true, FEC202: true, FEC203: true, FEC204: true }, total: 304, ec: 10, ecg: 80.5, sgpi: 0, result: "F" },
  { roll: "124AX035", seat: "525152035", marks: { FEC201: 82, FEC202: 62, FEC203: 48, FEC204: 83, FEC205: 47, FEL2011: 23, FEL202: 45, FEL203: 41, FEL204: 21, FEL205: 47, FEL206: 22, FEL207: 19 }, total: 540, ec: 21, ecg: 187, sgpi: 8.90, result: "P" },
  { roll: "124AX036", seat: "525152036", marks: { FEC201: 92, FEC202: 80, FEC203: 68, FEC204: 69, FEC205: 54, FEL2011: 23, FEL202: 46, FEL203: 43, FEL204: 23, FEL205: 47, FEL206: 21, FEL207: 23 }, total: 589, ec: 21, ecg: 197, sgpi: 9.38, result: "P" },
  { roll: "124AX037", seat: "525152037", marks: { FEC201: 86, FEC202: 85, FEC203: 72, FEC204: 73, FEC205: 54, FEL2011: 24, FEL202: 47, FEL203: 41, FEL204: 23, FEL205: 44, FEL206: 22, FEL207: 20 }, total: 591, ec: 21, ecg: 200, sgpi: 9.52, result: "P" },
  { roll: "124AX038", seat: "525152038", marks: { FEC201: 100, FEC202: 98, FEC203: 65, FEC204: 85, FEC205: 59, FEL2011: 24, FEL202: 36, FEL203: 45, FEL204: 23, FEL205: 48, FEL206: 21, FEL207: 23 }, total: 627, ec: 21, ecg: 206, sgpi: 9.81, result: "P" },
  { roll: "124AX039", seat: "525152039", marks: { FEC201: 80, FEC202: 68, FEC203: 62, FEC204: 72, FEC205: 56, FEL2011: 23, FEL202: 45, FEL203: 41, FEL204: 21, FEL205: 40, FEL206: 21, FEL207: 18 }, total: 547, ec: 21, ecg: 187, sgpi: 8.90, result: "P" },
  { roll: "124AX040", seat: "525152040", marks: { FEC201: 45, FEC202: 40, FEC203: 33, FEC204: 37, FEC205: 53, FEL2011: 21, FEL202: 29, FEL203: 41, FEL204: 21, FEL205: 40, FEL206: 20, FEL207: 16 }, backlogs: { FEC202: true, FEC204: true }, total: 397, ec: 18, ecg: 121, sgpi: 0, result: "F" },
  { roll: "124AX041", seat: "525152041", marks: { FEC201: 42, FEC202: 45, FEC203: 30, FEC204: 47, FEC205: 34, FEL2011: 17, FEL202: 25, FEL203: 31, FEL204: 18, FEL205: 31, FEL206: 16, FEL207: 12 }, total: 348, ec: 21, ecg: 111.5, sgpi: 5.31, result: "P" },
  { roll: "124AX042", seat: "525152042", marks: { FEC201: 12, FEC202: 19, FEC203: 10, FEC204: 24, FEC205: 31, FEL2011: 19, FEL202: 31, FEL203: 37, FEL204: 22, FEL205: 29, FEL206: 20, FEL207: 18 }, backlogs: { FEC201: true, FEC202: true, FEC203: true, FEC204: true }, total: 272, ec: 10, ecg: 70.5, sgpi: 0, result: "F" },
  { roll: "124AX043", seat: "525152043", marks: { FEC201: 84, FEC202: 85, FEC203: 52, FEC204: 74, FEC205: 56, FEL2011: 22, FEL202: 41, FEL203: 43, FEL204: 21, FEL205: 40, FEL206: 23, FEL207: 18 }, total: 559, ec: 21, ecg: 190, sgpi: 9.05, result: "P" },
  { roll: "124AX044", seat: "525152044", marks: { FEC201: 79, FEC202: 74, FEC203: 55, FEC204: 80, FEC205: 51, FEL2011: 21, FEL202: 40, FEL203: 40, FEL204: 20, FEL205: 44, FEL206: 23, FEL207: 16 }, total: 543, ec: 21, ecg: 185, sgpi: 8.81, result: "P" },
  { roll: "124AX045", seat: "525152045", marks: { FEC201: 50, FEC202: 63, FEC203: 43, FEC204: 66, FEC205: 53, FEL2011: 23, FEL202: 42, FEL203: 40, FEL204: 23, FEL205: 46, FEL206: 23, FEL207: 20 }, total: 492, ec: 21, ecg: 168, sgpi: 8.00, result: "P" },
  { roll: "124AX046", seat: "525152046", marks: { FEC201: 45, FEC202: 48, FEC203: 34, FEC204: 34, FEC205: 47, FEL2011: 23, FEL202: 41, FEL203: 40, FEL204: 19, FEL205: 44, FEL206: 22, FEL207: 18 }, backlogs: { FEC204: true }, total: 415, ec: 18, ecg: 129.5, sgpi: 0, result: "F" },
  { roll: "124AX047", seat: "525152047", marks: { FEC201: 88, FEC202: 75, FEC203: 50, FEC204: 81, FEC205: 52, FEL2011: 23, FEL202: 44, FEL203: 42, FEL204: 22, FEL205: 43, FEL206: 23, FEL207: 23 }, total: 566, ec: 21, ecg: 195, sgpi: 9.29, result: "P" },
  { roll: "124AX048", seat: "525152048", marks: { FEC201: 58, FEC202: 74, FEC203: 50, FEC204: 63, FEC205: 45, FEL2011: 21, FEL202: 39, FEL203: 40, FEL204: 18, FEL205: 40, FEL206: 21, FEL207: 16 }, total: 485, ec: 21, ecg: 163, sgpi: 7.76, result: "P" },
  { roll: "124AX049", seat: "525152049", marks: { FEC201: 58, FEC202: 66, FEC203: 66, FEC204: 69, FEC205: 50, FEL2011: 23, FEL202: 44, FEL203: 44, FEL204: 23, FEL205: 42, FEL206: 21, FEL207: 23 }, total: 529, ec: 21, ecg: 174, sgpi: 8.29, result: "P" },
  { roll: "124AX050", seat: "525152050", marks: { FEC201: 64, FEC202: 54, FEC203: 48, FEC204: 62, FEC205: 50, FEL2011: 21, FEL202: 41, FEL203: 40, FEL204: 23, FEL205: 44, FEL206: 23, FEL207: 21 }, total: 491, ec: 21, ecg: 168, sgpi: 8.00, result: "P" },
  { roll: "124AX051", seat: "525152051", marks: { FEC201: 86, FEC202: 74, FEC203: 63, FEC204: 62, FEC205: 50, FEL2011: 22, FEL202: 43, FEL203: 43, FEL204: 23, FEL205: 43, FEL206: 22, FEL207: 21 }, total: 552, ec: 21, ecg: 189, sgpi: 9.00, result: "P" },
  { roll: "124AX052", seat: "525152052", marks: { FEC201: 82, FEC202: 69, FEC203: 69, FEC204: 74, FEC205: 55, FEL2011: 22, FEL202: 42, FEL203: 42, FEL204: 22, FEL205: 45, FEL206: 21, FEL207: 17 }, total: 531, ec: 21, ecg: 177, sgpi: 8.43, result: "P" },
  { roll: "124AX053", seat: "525152053", marks: { FEC201: 04, FEC202: 11, FEC203: 23, FEC204: 29, FEC205: 38, FEL2011: 17, FEL202: 33, FEL203: 29, FEL204: 18, FEL205: 31, FEL206: 20, FEL207: 16 }, backlogs: { FEC201: true, FEC202: true, FEC203: true, FEC204: true }, total: 269, ec: 10, ecg: 70.5, sgpi: 0, result: "F" },
  { roll: "124AX054", seat: "525152054", marks: { FEC201: 33, FEC202: 31, FEC203: 32, FEC204: 31, FEC205: 41, FEL2011: 18, FEL202: 33, FEL203: 32, FEL204: 18, FEL205: 35, FEL206: 22, FEL207: 16 }, backlogs: { FEC201: true, FEC202: true, FEC204: true }, total: 342, ec: 12, ecg: 82, sgpi: 0, result: "F" },
  { roll: "124AX055", seat: "525152055", marks: { FEC201: 95, FEC202: 59, FEC203: 63, FEC204: 69, FEC205: 53, FEL2011: 23, FEL202: 44, FEL203: 41, FEL204: 22, FEL205: 44, FEL206: 21, FEL207: 22 }, total: 556, ec: 21, ecg: 185, sgpi: 8.81, result: "P" },
  { roll: "124AX056", seat: "525152056", marks: { FEC201: 46, FEC202: 55, FEC203: 42, FEC204: 45, FEC205: 45, FEL2011: 21, FEL202: 38, FEL203: 37, FEL204: 22, FEL205: 46, FEL206: 22, FEL207: 20 }, total: 439, ec: 21, ecg: 151, sgpi: 7.19, result: "P" },
  { roll: "124AX057", seat: "525152057", marks: { FEC201: 75, FEC202: 63, FEC203: 44, FEC204: 37, FEC205: 52, FEL2011: 23, FEL202: 43, FEL203: 37, FEL204: 20, FEL205: 45, FEL206: 22, FEL207: 16 }, backlogs: { FEC204: true }, total: 477, ec: 18, ecg: 146, sgpi: 0, result: "F" },
  { roll: "124AX058", seat: "525152058", marks: { FEC201: 93, FEC202: 63, FEC203: 73, FEC204: 70, FEC205: 49, FEL2011: 23, FEL202: 47, FEL203: 43, FEL204: 23, FEL205: 44, FEL206: 20, FEL207: 21 }, total: 569, ec: 21, ecg: 189, sgpi: 9.00, result: "P" },
  { roll: "124AX059", seat: "525152059", marks: { FEC201: 83, FEC202: 59, FEC203: 31, FEC204: 48, FEC205: 47, FEL2011: 20, FEL202: 44, FEL203: 36, FEL204: 23, FEL205: 45, FEL206: 22, FEL207: 22 }, backlogs: { FEC204: true }, total: 480, ec: 18, ecg: 148, sgpi: 0, result: "F" },
  { roll: "124AX060", seat: "525152060", marks: { FEC201: 36, FEC202: 21, FEC203: 19, FEC204: 47, FEC205: 39, FEL2011: 17, FEL202: 24, FEL203: 34, FEL204: 18, FEL205: 38, FEL206: 23, FEL207: 16 }, backlogs: { FEC201: true, FEC202: true, FEC203: true }, total: 332, ec: 13, ecg: 88.5, sgpi: 0, result: "F" },
  { roll: "124AX061", seat: "525152061", marks: { FEC201: 99, FEC202: 91, FEC203: 69, FEC204: 83, FEC205: 51, FEL2011: 23, FEL202: 46, FEL203: 44, FEL204: 23, FEL205: 45, FEL206: 21, FEL207: 21 }, total: 616, ec: 21, ecg: 204, sgpi: 9.71, result: "P" },
  { roll: "124AX062", seat: "525152062", marks: { FEC201: 72, FEC202: 52, FEC203: 35, FEC204: 45, FEC205: 45, FEL2011: 20, FEL202: 27, FEL203: 34, FEL204: 19, FEL205: 36, FEL206: 21, FEL207: 18 }, total: 424, ec: 21, ecg: 145.5, sgpi: 6.93, result: "P" },
  { roll: "124AX063", seat: "525152063", marks: { FEC201: 61, FEC202: 66, FEC203: 34, FEC204: 68, FEC205: 53, FEL2011: 20, FEL202: 40, FEL203: 37, FEL204: 22, FEL205: 36, FEL206: 21, FEL207: 18 }, total: 476, ec: 21, ecg: 159, sgpi: 7.57, result: "P" }
];

// Read existing mockData.js to merge with Sem 4
const mockDataContent = fs.readFileSync('e:/AUDIT/src/data/mockData.js', 'utf8');

// Require existing students from previous step or scratch
const { INITIAL_STUDENTS } = require('e:/AUDIT/src/data/mockData.js');

const sem2Map = {};
rawSem2.forEach(s => {
  sem2Map[s.roll] = s;
});

// Enhance all students with Sem 2 results
const updatedStudents = INITIAL_STUDENTS.map(stu => {
  const sem2Data = sem2Map[stu.rollNo];
  
  if (sem2Data) {
    const sem2SubjectScores = {};
    let sem2Backlogs = 0;

    SUBJECTS_SEM2.forEach(subj => {
      const rawMark = sem2Data.marks[subj.code] || 0;
      const isBacklog = sem2Data.backlogs && sem2Data.backlogs[subj.code] ? true : false;
      let gradeInfo = getGradeInfo(rawMark, subj.maxMarks);
      if (isBacklog) {
        gradeInfo = { grade: "F", points: 0, label: "Fail / Backlog" };
        sem2Backlogs++;
      }

      sem2SubjectScores[subj.code] = {
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

    const sem2Sgpa = sem2Data.sgpi || 0;
    
    // Add Semester 2 to student's semesterResults
    stu.semesterResults[2] = {
      semesterNumber: 2,
      sgpa: sem2Sgpa,
      earnedCredits: sem2Data.ecg,
      totalCredits: 21,
      backlogs: sem2Backlogs,
      status: sem2Data.result === "P" ? (sem2Sgpa >= 7.5 ? "Distinction" : sem2Sgpa >= 6.5 ? "First Class" : "Pass") : "ATKT / Fail",
      subjects: sem2SubjectScores
    };

    // Calculate multi-semester Cumulative CGPA across Sem 2 and Sem 4
    const totalEarnedPoints = (sem2Data.ecg || 0) + (stu.semesterResults[4]?.earnedCredits || 0);
    const totalCredits = 21 + 21; // 42 credits
    stu.cgpa = Number((totalEarnedPoints / totalCredits).toFixed(2));
    stu.activeBacklogs = (stu.semesterResults[4]?.backlogs || 0) + sem2Backlogs;
    stu.totalMarks = (stu.totalMarks || 0) + sem2Data.total;
    stu.maxTotalMarks = 725 + 700; // 1425 marks

    // Update tier
    if (stu.activeBacklogs > 0) stu.performanceTier = "At-Risk (Backlogs)";
    else if (stu.cgpa >= 9.0) stu.performanceTier = "Outstanding";
    else if (stu.cgpa >= 7.5) stu.performanceTier = "Distinction";
    else if (stu.cgpa >= 6.5) stu.performanceTier = "First Class";
    else stu.performanceTier = "Pass Class";
  }

  return stu;
});

const outputContent = `// SIES GRADUATE SCHOOL OF TECHNOLOGY (AUTONOMOUS)
// Department of Computer Science & Engineering (IoT & CS including BCT)
// Multi-Semester Results Dataset (FE Sem II - May 2025 & SE Sem IV - May 2026)

export const DEPARTMENT_INFO = {
  name: "Department of Computer Science & Engineering (IoT & CS including BCT)",
  code: "CSE-IoT & CS(BCT)",
  institution: "SIES Graduate School of Technology (Autonomous)",
  collegeCode: "690",
  academicYear: "2025-2026",
  hodName: "Dr. Aparna Bannore",
  auditDate: "May 2026",
  batchInfo: {
    FE: { year: "First Year (FE)", entryYear: "2024-2028", currentSem: 2, pastSems: [2] },
    SE: { year: "Second Year (SE)", entryYear: "2024-2028", currentSem: 4, pastSems: [2, 4] },
    TE: { year: "Third Year (TE)", entryYear: "2023-2027", currentSem: 6, pastSems: [2, 4] },
    BE: { year: "Final Year (BE)", entryYear: "2022-2026", currentSem: 8, pastSems: [2, 4] }
  }
};

export const SUBJECT_METADATA = {
  "FE-SEM2": ${JSON.stringify(SUBJECTS_SEM2, null, 2)},
  "SE-SEM2": ${JSON.stringify(SUBJECTS_SEM2, null, 2)},
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

export const INITIAL_STUDENTS = ${JSON.stringify(updatedStudents, null, 2)};

export function generateBatchData() {
  return INITIAL_STUDENTS;
}
`;

fs.writeFileSync('e:/AUDIT/src/data/mockData.js', outputContent, 'utf8');
console.log('Successfully integrated Semester 2 and Semester 4 results into master dataset!');
