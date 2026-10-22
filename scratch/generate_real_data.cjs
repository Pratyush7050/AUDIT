const fs = require('fs');

const rawStudents = [
  // Page 1
  {
    sr: 1, seatNo: "124AX001", prn: "626154001", name: "ACHARYA ANANYA MOHAN ANASUYA", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 93, CSEC402: 74, CSEC403: 68, CSEC404: 62, MDMC40X1: 84, CSEL401: 42, CSEL402: 42, CSEL403: 45, CSEL404: 38, CSEM401: 43 },
    total: 591, result: "P", ec: 21, ecg: 193, sgpi: 9.19
  },
  {
    sr: 2, seatNo: "124AX003", prn: "626154002", name: "ADITYA ANANDKRISHNAN KALAIVANI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 53, CSEC402: 77, CSEC403: 66, CSEC404: 62, MDMC40X1: 85, CSEL401: 43, CSEL402: 43, CSEL403: 45, CSEL404: 46, CSEM401: 45 },
    total: 565, result: "P", ec: 21, ecg: 186, sgpi: 8.86
  },
  {
    sr: 3, seatNo: "124AX004", prn: "626154003", name: "THORAT ADITYA RAHUL RUPALI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 78, CSEC402: 83, CSEC403: 82, CSEC404: 52, MDMC40X1: 88, CSEL401: 40, CSEL402: 43, CSEL403: 42, CSEL404: 40, CSEM401: 43 },
    total: 591, result: "P", ec: 21, ecg: 201, sgpi: 9.57
  },
  {
    sr: 4, seatNo: "124AX005", prn: "626154004", name: "ANSARI RUSHAN ASLAM TARANNUM", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 66, CSEC402: 82, CSEC403: 77, CSEC404: 49, MDMC40X1: 79, CSEL401: 42, CSEL402: 43, CSEL403: 40, CSEL404: 39, CSEM401: 43 },
    total: 560, result: "P", ec: 21, ecg: 187, sgpi: 8.90
  },
  {
    sr: 5, seatNo: "124AX006", prn: "626154005", name: "ARGADE JAYANT ROHIDAS ARCHANA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 77, CSEC402: 73, CSEC403: 71, CSEC404: 38, MDMC40X1: 72, CSEL401: 36, CSEL402: 41, CSEL403: 44, CSEL404: 38, CSEM401: 44 },
    total: 534, result: "P", ec: 21, ecg: 177, sgpi: 8.43
  },
  {
    sr: 6, seatNo: "124AX007", prn: "626154006", name: "ATIKSH KARTHIK SANGAMESWARAN GAURI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 65, CSEC402: 84, CSEC403: 89, CSEC404: 60, MDMC40X1: 91, CSEL401: 43, CSEL402: 46, CSEL403: 43, CSEL404: 47, CSEM401: 43 },
    total: 611, result: "P", ec: 21, ecg: 201, sgpi: 9.57
  },
  {
    sr: 7, seatNo: "124AX008", prn: "626154007", name: "BANSODE DEVANSHU HARI SUSHMA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 49, CSEC402: 61, CSEC403: 44, CSEC404: 40, MDMC40X1: 48, CSEL401: 38, CSEL402: 38, CSEL403: 43, CSEL404: 35, CSEM401: 44 },
    total: 440, result: "P", ec: 21, ecg: 139, sgpi: 6.62
  },
  {
    sr: 8, seatNo: "124AX010", prn: "626154008", name: "CHAUDHARY ANISH PRADEEP HEMA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 54, CSEC402: 61, CSEC403: 52, CSEC404: 51, MDMC40X1: 54, CSEL401: 42, CSEL402: 35, CSEL403: 40, CSEL404: 38, CSEM401: 44 },
    total: 471, result: "P", ec: 21, ecg: 155, sgpi: 7.38
  },
  {
    sr: 9, seatNo: "124AX011", prn: "626154009", name: "CHORMALE SAIPREM PRASHANT SHAMAL", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 76, CSEC402: 71, CSEC403: 63, CSEC404: 60, MDMC40X1: 88, CSEL401: 44, CSEL402: 44, CSEL403: 44, CSEL404: 42, CSEM401: 45 },
    total: 577, result: "P", ec: 21, ecg: 192, sgpi: 9.14
  },
  // Page 2
  {
    sr: 10, seatNo: "124AX012", prn: "626154010", name: "DANT VAISHNAVI VAIBHAV KALYANI", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 77, CSEC402: 77, CSEC403: 81, CSEC404: 54, MDMC40X1: 84, CSEL401: 41, CSEL402: 43, CSEL403: 44, CSEL404: 44, CSEM401: 42 },
    total: 587, result: "P", ec: 21, ecg: 200, sgpi: 9.52
  },
  {
    sr: 11, seatNo: "124AX013", prn: "626154011", name: "DESAI NISHAAD KALPAK KANCHAN", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 57, CSEC402: 52, CSEC403: 57, CSEC404: 41, MDMC40X1: 65, CSEL401: 42, CSEL402: 38, CSEL403: 41, CSEL404: 36, CSEM401: 45 },
    total: 474, result: "P", ec: 21, ecg: 152, sgpi: 7.24
  },
  {
    sr: 12, seatNo: "124AX014", prn: "626154012", name: "DESAI PRIYA SANJAY SAYUKTA", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 51, CSEC402: 34, CSEC403: 39, CSEC404: 36, MDMC40X1: 53, CSEL401: 33, CSEL402: 32, CSEL403: 37, CSEL404: 38, CSEM401: 40 },
    backlogs: { CSEC401: true, CSEC402: true, CSEC403: true },
    total: 393, result: "F", ec: 15, ecg: 104, sgpi: 0
  },
  {
    sr: 13, seatNo: "124AX015", prn: "626154013", name: "DESAI PUSHKAR RAHUL RASHMI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 71, CSEC402: 59, CSEC403: 76, CSEC404: 50, MDMC40X1: 82, CSEL401: 40, CSEL402: 45, CSEL403: 42, CSEL404: 42, CSEM401: 45 },
    total: 552, result: "P", ec: 21, ecg: 183, sgpi: 8.71
  },
  {
    sr: 14, seatNo: "124AX017", prn: "626154014", name: "DEVKAR NIMISH SHARAD KAMLA", gender: "Male",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 71, CSEC402: 69, CSEC403: 72, CSEC404: 53, MDMC40X1: 80, CSEL401: 39, CSEL402: 41, CSEL403: 43, CSEL404: 39, CSEM401: 43 },
    total: 550, result: "P", ec: 21, ecg: 182, sgpi: 8.67
  },
  {
    sr: 15, seatNo: "124AX018", prn: "626154015", name: "DONGRE ARJUN SUJIT ANITA", gender: "Male",
    elective: "Cost Management [MDM-1]",
    marks: { CSEC401: 19, CSEC402: 21, CSEC403: 20, CSEC404: 20, MDMC40X1: 57, CSEL401: 23, CSEL402: 25, CSEL403: 26, CSEL404: 33, CSEM401: 30 },
    backlogs: { CSEC401: true, CSEC402: true, CSEC403: true, CSEC404: true },
    total: 274, result: "F", ec: 10, ecg: 62, sgpi: 0
  },
  {
    sr: 16, seatNo: "124AX019", prn: "626154016", name: "DUNDLE AYUSH SHASHIKANT RAJESHWARI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 59, CSEC402: 54, CSEC403: 58, CSEC404: 41, MDMC40X1: 63, CSEL401: 41, CSEL402: 37, CSEL403: 41, CSEL404: 36, CSEM401: 42 },
    total: 472, result: "P", ec: 21, ecg: 151, sgpi: 7.19
  },
  {
    sr: 17, seatNo: "124AX020", prn: "626154017", name: "ELAVARASI PADMA", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 68, CSEC402: 59, CSEC403: 68, CSEC404: 51, MDMC40X1: 69, CSEL401: 37, CSEL402: 43, CSEL403: 43, CSEL404: 42, CSEM401: 43 },
    total: 523, result: "P", ec: 21, ecg: 163, sgpi: 7.76
  },
  {
    sr: 18, seatNo: "124AX021", prn: "626154018", name: "GHADGE PRIYANSI VINOD MANISHA", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 64, CSEC402: 64, CSEC403: 74, CSEC404: 50, MDMC40X1: 77, CSEL401: 42, CSEL402: 41, CSEL403: 42, CSEL404: 42, CSEM401: 42 },
    total: 538, result: "P", ec: 21, ecg: 177, sgpi: 8.43
  },
  // Page 3
  {
    sr: 19, seatNo: "124AX022", prn: "626154019", name: "GIFTWINSTON SUNDARSINGH BEULAH GRACE", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 66, CSEC402: 58, CSEC403: 62, CSEC404: 49, MDMC40X1: 59, CSEL401: 40, CSEL402: 41, CSEL403: 40, CSEL404: 39, CSEM401: 43 },
    total: 498, result: "P", ec: 21, ecg: 160, sgpi: 7.62
  },
  {
    sr: 20, seatNo: "124AX023", prn: "626154020", name: "JADHAV KALYANI YUVRAJ REKHA", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 77, CSEC402: 74, CSEC403: 65, CSEC404: 60, MDMC40X1: 83, CSEL401: 43, CSEL402: 40, CSEL403: 43, CSEL404: 43, CSEM401: 45 },
    total: 573, result: "P", ec: 21, ecg: 192, sgpi: 9.14
  },
  {
    sr: 21, seatNo: "124AX024", prn: "626154021", name: "JADHAV MADHURA KALPESH MANISHA", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 97, CSEC402: 91, CSEC403: 85, CSEC404: 68, MDMC40X1: 86, CSEL401: 43, CSEL402: 43, CSEL403: 45, CSEL404: 44, CSEM401: 43 },
    total: 645, result: "P", ec: 21, ecg: 210, sgpi: 10.00
  },
  {
    sr: 22, seatNo: "124AX025", prn: "626154022", name: "KADAM ANANYA NAMDEV JANHAVI", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 66, CSEC402: 61, CSEC403: 71, CSEC404: 49, MDMC40X1: 79, CSEL401: 41, CSEL402: 45, CSEL403: 41, CSEL404: 42, CSEM401: 44 },
    total: 539, result: "P", ec: 21, ecg: 177, sgpi: 8.43
  },
  {
    sr: 23, seatNo: "124AX026", prn: "626154023", name: "KEERTHANA C M", gender: "Female",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 95, CSEC402: 91, CSEC403: 85, CSEC404: 64, MDMC40X1: 88, CSEL401: 46, CSEL402: 45, CSEL403: 45, CSEL404: 44, CSEM401: 43 },
    total: 646, result: "P", ec: 21, ecg: 210, sgpi: 10.00
  },
  {
    sr: 24, seatNo: "124AX027", prn: "626154024", name: "KHAN MOHAMMED SAARIF MOHD ZAHID FIDQUS", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 52, CSEC402: 66, CSEC403: 73, CSEC404: 44, MDMC40X1: 76, CSEL401: 40, CSEL402: 39, CSEL403: 35, CSEL404: 34, CSEM401: 42 },
    total: 501, result: "P", ec: 21, ecg: 161, sgpi: 7.67
  },
  {
    sr: 25, seatNo: "124AX028", prn: "626154025", name: "KHANNA MANASI MANOJ SEEMA", gender: "Female",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 66, CSEC402: 70, CSEC403: 61, CSEC404: 52, MDMC40X1: 83, CSEL401: 45, CSEL402: 44, CSEL403: 45, CSEL404: 43, CSEM401: 44 },
    total: 553, result: "P", ec: 21, ecg: 180, sgpi: 8.57
  },
  {
    sr: 26, seatNo: "124AX029", prn: "626154026", name: "KOKATE PRATYUSH ATUL SANGEETA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 59, CSEC402: 48, CSEC403: 59, CSEC404: 38, MDMC40X1: 59, CSEL401: 38, CSEL402: 39, CSEL403: 40, CSEL404: 37, CSEM401: 42 },
    total: 459, result: "P", ec: 21, ecg: 145, sgpi: 6.90
  },
  {
    sr: 27, seatNo: "124AX030", prn: "626154027", name: "KOLI ANKUSH KRISH", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 64, CSEC402: 41, CSEC403: 61, CSEC404: 35, MDMC40X1: 63, CSEL401: 32, CSEL402: 35, CSEL403: 39, CSEL404: 38, CSEM401: 43 },
    backlogs: { CSEC402: true },
    total: 450, result: "F", ec: 18, ecg: 134, sgpi: 0
  },
  // Page 4
  {
    sr: 28, seatNo: "124AX032", prn: "626154028", name: "LATHIKA VARSHINI SENTHIL KUMAR", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 57, CSEC402: 72, CSEC403: 52, CSEC404: 46, MDMC40X1: 65, CSEL401: 38, CSEL402: 35, CSEL403: 37, CSEL404: 39, CSEM401: 37 },
    total: 478, result: "P", ec: 21, ecg: 154, sgpi: 7.33
  },
  {
    sr: 29, seatNo: "124AX033", prn: "626154029", name: "MAHAJAN MEHUL PANKAJ BHARATI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 64, CSEC402: 72, CSEC403: 73, CSEC404: 46, MDMC40X1: 67, CSEL401: 31, CSEL402: 39, CSEL403: 40, CSEL404: 41, CSEM401: 42 },
    total: 515, result: "P", ec: 21, ecg: 170, sgpi: 8.10
  },
  {
    sr: 30, seatNo: "124AX035", prn: "626154030", name: "MENDON PRATHAM UMESH KAVITHA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 59, CSEC402: 47, CSEC403: 52, CSEC404: 47, MDMC40X1: 70, CSEL401: 34, CSEL402: 41, CSEL403: 45, CSEL404: 43, CSEM401: 44 },
    backlogs: { CSEC402: true },
    total: 482, result: "F", ec: 18, ecg: 141, sgpi: 0
  },
  {
    sr: 31, seatNo: "124AX036", prn: "626154031", name: "MHATRE CHINMAYEE SHASHANK SWAPNALI", gender: "Female",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 71, CSEC402: 76, CSEC403: 63, CSEC404: 56, MDMC40X1: 84, CSEL401: 41, CSEL402: 41, CSEL403: 42, CSEL404: 41, CSEM401: 42 },
    total: 557, result: "P", ec: 21, ecg: 188, sgpi: 8.95
  },
  {
    sr: 32, seatNo: "124AX037", prn: "626154032", name: "MHATRE JAY PRAMOD MADHURI", gender: "Male",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 76, CSEC402: 74, CSEC403: 87, CSEC404: 54, MDMC40X1: 88, CSEL401: 33, CSEL402: 43, CSEL403: 45, CSEL404: 38, CSEM401: 43 },
    total: 581, result: "P", ec: 21, ecg: 192, sgpi: 9.14
  },
  {
    sr: 33, seatNo: "124AX038", prn: "626154033", name: "MISHRA SANGINI VINOD GUDDI", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 83, CSEC402: 70, CSEC403: 73, CSEC404: 63, MDMC40X1: 66, CSEL401: 40, CSEL402: 45, CSEL403: 44, CSEL404: 43, CSEM401: 43 },
    total: 570, result: "P", ec: 21, ecg: 189, sgpi: 9.00
  },
  {
    sr: 34, seatNo: "124AX039", prn: "626154034", name: "MUDELA MANISH KUNDAN SINGH KAMLA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 73, CSEC402: 72, CSEC403: 66, CSEC404: 52, MDMC40X1: 76, CSEL401: 33, CSEL402: 38, CSEL403: 38, CSEL404: 38, CSEM401: 40 },
    total: 526, result: "P", ec: 21, ecg: 172, sgpi: 8.19
  },
  {
    sr: 35, seatNo: "124AX040", prn: "626154035", name: "MUGIL SANTHIYA DHARMARAJ", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 49, CSEC402: 56, CSEC403: 50, CSEC404: 41, MDMC40X1: 69, CSEL401: 38, CSEL402: 35, CSEL403: 36, CSEL404: 39, CSEM401: 40 },
    total: 453, result: "P", ec: 21, ecg: 145, sgpi: 6.90
  },
  {
    sr: 36, seatNo: "124AX041", prn: "626154036", name: "NADAR ALAN PAUL JOSHUVA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 27, CSEC402: 41, CSEC403: 42, CSEC404: 27, MDMC40X1: 39, CSEL401: 12, CSEL402: 27, CSEL403: 26, CSEL404: 22, CSEM401: 28 },
    backlogs: { CSEC401: true, CSEC404: true, MDMC40X1: true, CSEL401: true },
    total: 291, result: "F", ec: 12, ecg: 56, sgpi: 0
  },
  // Page 5
  {
    sr: 37, seatNo: "124AX043", prn: "626154037", name: "NISHANTH CHAKKARAVARTHI PARAMESWARI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 65, CSEC402: 74, CSEC403: 62, CSEC404: 53, MDMC40X1: 78, CSEL401: 39, CSEL402: 44, CSEL403: 39, CSEL404: 35, CSEM401: 42 },
    total: 531, result: "P", ec: 21, ecg: 172, sgpi: 8.19
  },
  {
    sr: 38, seatNo: "124AX044", prn: "626154038", name: "PATIL MAHESH PRADEEP SUVARNA", gender: "Male",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 62, CSEC402: 69, CSEC403: 73, CSEC404: 41, MDMC40X1: 76, CSEL401: 43, CSEL402: 44, CSEL403: 43, CSEL404: 40, CSEM401: 44 },
    total: 535, result: "P", ec: 21, ecg: 175, sgpi: 8.33
  },
  {
    sr: 39, seatNo: "124AX045", prn: "626154039", name: "PATIL ROHAN MAHESH MANSI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 65, CSEC402: 83, CSEC403: 86, CSEC404: 52, MDMC40X1: 78, CSEL401: 38, CSEL402: 45, CSEL403: 44, CSEL404: 38, CSEM401: 45 },
    total: 574, result: "P", ec: 21, ecg: 189, sgpi: 9.00
  },
  {
    sr: 40, seatNo: "124AX046", prn: "626154040", name: "PATIL RUSHI SANTOSH", gender: "Male",
    elective: "Cost Management [MDM-1]",
    marks: { CSEC401: 44, CSEC402: 67, CSEC403: 48, CSEC404: 52, MDMC40X1: 72, CSEL401: 38, CSEL402: 40, CSEL403: 39, CSEL404: 44, CSEM401: 44 },
    backlogs: { CSEC401: true, CSEC403: true },
    total: 485, result: "F", ec: 15, ecg: 126, sgpi: 0
  },
  {
    sr: 41, seatNo: "124AX047", prn: "626154041", name: "PAWAR VINAYAK RAJAN KAMAL", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 94, CSEC402: 89, CSEC403: 89, CSEC404: 58, MDMC40X1: 89, CSEL401: 37, CSEL402: 42, CSEL403: 43, CSEL404: 42, CSEM401: 44 },
    total: 627, result: "P", ec: 21, ecg: 206, sgpi: 9.81
  },
  {
    sr: 42, seatNo: "124AX048", prn: "626154042", name: "RAMASUBRAMANIAN SABARISH SHANKAR ANURADHA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 70, CSEC402: 62, CSEC403: 57, CSEC404: 47, MDMC40X1: 69, CSEL401: 36, CSEL402: 34, CSEL403: 35, CSEL404: 38, CSEM401: 40 },
    total: 488, result: "P", ec: 21, ecg: 157, sgpi: 7.48
  },
  {
    sr: 43, seatNo: "124AX049", prn: "626154043", name: "RISHINANDAN MADHAVAN", gender: "Male",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 68, CSEC402: 71, CSEC403: 76, CSEC404: 57, MDMC40X1: 81, CSEL401: 42, CSEL402: 45, CSEL403: 45, CSEL404: 44, CSEM401: 46 },
    total: 575, result: "P", ec: 21, ecg: 190, sgpi: 9.05
  },
  {
    sr: 44, seatNo: "124AX050", prn: "626154044", name: "SHETTY ESHAAN DAYANAND USHA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 95, CSEC402: 70, CSEC403: 62, CSEC404: 53, MDMC40X1: 72, CSEL401: 35, CSEL402: 39, CSEL403: 36, CSEL404: 39, CSEM401: 42 },
    total: 543, result: "P", ec: 21, ecg: 176, sgpi: 8.38
  },
  {
    sr: 45, seatNo: "124AX051", prn: "626154045", name: "SHETTY TRISHA SURESH", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 78, CSEC402: 79, CSEC403: 74, CSEC404: 57, MDMC40X1: 73, CSEL401: 35, CSEL402: 44, CSEL403: 39, CSEL404: 39, CSEM401: 45 },
    total: 563, result: "P", ec: 21, ecg: 184, sgpi: 8.76
  },
  // Page 6
  {
    sr: 46, seatNo: "124AX052", prn: "626154046", name: "SHINDE VEDANT DEEPAK SUJATA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 78, CSEC402: 70, CSEC403: 85, CSEC404: 54, MDMC40X1: 68, CSEL401: 43, CSEL402: 45, CSEL403: 42, CSEL404: 44, CSEM401: 45 },
    total: 574, result: "P", ec: 21, ecg: 188, sgpi: 8.95
  },
  {
    sr: 47, seatNo: "124AX053", prn: "626154047", name: "SHOOR SOHAM PRASHANT JYOTI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 32, CSEC402: 45, CSEC403: 21, CSEC404: 33, MDMC40X1: 56, CSEL401: 30, CSEL402: 30, CSEL403: 34, CSEL404: 28, CSEM401: 36 },
    backlogs: { CSEC401: true, CSEC403: true },
    total: 345, result: "F", ec: 15, ecg: 89, sgpi: 0
  },
  {
    sr: 48, seatNo: "124AX054", prn: "626154048", name: "SHRINIVASAN PALANI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 36, CSEC402: 27, CSEC403: 50, CSEC404: 13, MDMC40X1: 43, CSEL401: 26, CSEL402: 27, CSEL403: 24, CSEL404: 22, CSEM401: 28 },
    backlogs: { CSEC401: true, CSEC402: true, CSEC404: true },
    total: 296, result: "F", ec: 13, ecg: 66, sgpi: 0
  },
  {
    sr: 49, seatNo: "124AX055", prn: "626154049", name: "SINGH KAUTILYA RAJESH SONAL", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 90, CSEC402: 88, CSEC403: 70, CSEC404: 53, MDMC40X1: 84, CSEL401: 40, CSEL402: 43, CSEL403: 45, CSEL404: 41, CSEM401: 46 },
    total: 600, result: "P", ec: 21, ecg: 200, sgpi: 9.52
  },
  {
    sr: 50, seatNo: "124AX056", prn: "626154050", name: "THAKUR KRITIKA KALYANSINGH ANJANA", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 64, CSEC402: 65, CSEC403: 63, CSEC404: 43, MDMC40X1: 71, CSEL401: 42, CSEL402: 38, CSEL403: 41, CSEL404: 42, CSEM401: 41 },
    total: 510, result: "P", ec: 21, ecg: 168, sgpi: 8.00
  },
  {
    sr: 51, seatNo: "124AX057", prn: "626154051", name: "THOPATE DHRUV HITESH AMISHA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 91, CSEC402: 79, CSEC403: 79, CSEC404: 49, MDMC40X1: 76, CSEL401: 40, CSEL402: 41, CSEL403: 43, CSEL404: 34, CSEM401: 43 },
    total: 575, result: "P", ec: 21, ecg: 189, sgpi: 9.00
  },
  {
    sr: 52, seatNo: "124AX058", prn: "626154052", name: "THORAT PARAS PRAVIN SUJATA", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 78, CSEC402: 51, CSEC403: 63, CSEC404: 45, MDMC40X1: 82, CSEL401: 39, CSEL402: 43, CSEL403: 43, CSEL404: 36, CSEM401: 44 },
    total: 524, result: "P", ec: 21, ecg: 175, sgpi: 8.33
  },
  {
    sr: 53, seatNo: "124AX059", prn: "626154053", name: "VAISHYA RISHABH RAMASHANKAR SHIVKUMARI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 45, CSEC402: 36, CSEC403: 38, CSEC404: 30, MDMC40X1: 54, CSEL401: 34, CSEL402: 38, CSEL403: 36, CSEL404: 37, CSEM401: 41 },
    backlogs: { CSEC402: true, CSEC403: true },
    total: 389, result: "F", ec: 15, ecg: 99, sgpi: 0
  },
  {
    sr: 54, seatNo: "124AX060", prn: "626154054", name: "VELAR SUDHAN RAMAIYAN", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 51, CSEC402: 49, CSEC403: 48, CSEC404: 25, MDMC40X1: 32, CSEL401: 28, CSEL402: 27, CSEL403: 26, CSEL404: 22, CSEM401: 30 },
    backlogs: { CSEC404: true, MDMC40X1: true },
    total: 338, result: "F", ec: 16, ecg: 87, sgpi: 0
  },
  // Page 7
  {
    sr: 55, seatNo: "124AX061", prn: "626154055", name: "VISHWAKARMA VISHAL RAMBABU AMARAWATI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 89, CSEC402: 65, CSEC403: 86, CSEC404: 61, MDMC40X1: 76, CSEL401: 45, CSEL402: 45, CSEL403: 45, CSEL404: 40, CSEM401: 46 },
    total: 598, result: "P", ec: 21, ecg: 198, sgpi: 9.43
  },
  {
    sr: 56, seatNo: "124AX062", prn: "626154056", name: "YADAV SURESH KUMAR SAMYDURAI", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 77, CSEC402: 60, CSEC403: 70, CSEC404: 48, MDMC40X1: 65, CSEL401: 34, CSEL402: 40, CSEL403: 39, CSEL404: 34, CSEM401: 38 },
    total: 505, result: "P", ec: 21, ecg: 165, sgpi: 7.86
  },
  {
    sr: 57, seatNo: "124AX063", prn: "626154057", name: "YANU LEENO TOMI VELANGANNI", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 66, CSEC402: 55, CSEC403: 77, CSEC404: 41, MDMC40X1: 73, CSEL401: 42, CSEL402: 35, CSEL403: 38, CSEL404: 40, CSEM401: 38 },
    total: 505, result: "P", ec: 21, ecg: 167, sgpi: 7.95
  },
  {
    sr: 58, seatNo: "225AX064", prn: "626154058", name: "CHANDEKAR SIDDHI SANJAY", gender: "Female",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 61, CSEC402: 84, CSEC403: 95, CSEC404: 64, MDMC40X1: 83, CSEL401: 44, CSEL402: 47, CSEL403: 43, CSEL404: 43, CSEM401: 45 },
    total: 609, result: "P", ec: 21, ecg: 201, sgpi: 9.57
  },
  {
    sr: 59, seatNo: "225AX065", prn: "626154059", name: "GIRI PREETAM DILIPKUMAR", gender: "Male",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 81, CSEC402: 76, CSEC403: 73, CSEC404: 60, MDMC40X1: 77, CSEL401: 42, CSEL402: 39, CSEL403: 44, CSEL404: 40, CSEM401: 46 },
    total: 578, result: "P", ec: 21, ecg: 197, sgpi: 9.38
  },
  {
    sr: 60, seatNo: "225AX066", prn: "626154060", name: "JAGTAP AYUSH SANTOSH", gender: "Male",
    elective: "Advanced Data Structure [MDM-1]",
    marks: { CSEC401: 79, CSEC402: 82, CSEC403: 75, CSEC404: 41, MDMC40X1: 80, CSEL401: 41, CSEL402: 41, CSEL403: 47, CSEL404: 41, CSEM401: 46 },
    total: 573, result: "P", ec: 21, ecg: 196, sgpi: 9.33
  },
  {
    sr: 61, seatNo: "225AX067", prn: "626154061", name: "NADAR AJAY AMARKANNAN", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 45, CSEC402: 51, CSEC403: 54, CSEC404: 25, MDMC40X1: 47, CSEL401: 33, CSEL402: 33, CSEL403: 35, CSEL404: 36, CSEM401: 34 },
    total: 393, result: "P", ec: 21, ecg: 127, sgpi: 6.05
  },
  {
    sr: 62, seatNo: "225AX068", prn: "626154062", name: "PEDNEKAR ROHAN NITIN", gender: "Male",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 69, CSEC402: 74, CSEC403: 72, CSEC404: 60, MDMC40X1: 75, CSEL401: 42, CSEL402: 42, CSEL403: 43, CSEL404: 42, CSEM401: 46 },
    total: 565, result: "P", ec: 21, ecg: 186, sgpi: 8.86
  },
  {
    sr: 63, seatNo: "225AX069", prn: "626154063", name: "SANKPAL AAKANKSHA SUSHANT", gender: "Female",
    elective: "Artificial Intelligence [MDM-1]",
    marks: { CSEC401: 72, CSEC402: 70, CSEC403: 61, CSEC404: 52, MDMC40X1: 69, CSEL401: 39, CSEL402: 42, CSEL403: 42, CSEL404: 42, CSEM401: 46 },
    total: 535, result: "P", ec: 21, ecg: 173, sgpi: 8.24
  }
];

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

const formattedStudents = rawStudents.map((s, idx) => {
  const subjectScores = {};
  let backlogs = 0;

  SUBJECTS_SEM4.forEach(subj => {
    const rawMark = s.marks[subj.code] || 0;
    const isBacklog = s.backlogs && s.backlogs[subj.code] ? true : false;
    let gradeInfo = getGradeInfo(rawMark, subj.maxMarks);
    if (isBacklog) {
      gradeInfo = { grade: "F", points: 0, label: "Fail / Backlog" };
      backlogs++;
    }

    subjectScores[subj.code] = {
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

  const sgpa = s.sgpi || 0;
  const attendance = Math.min(98, Math.max(72, Math.round(75 + (s.total / 725) * 22 + (idx % 5))));

  let performanceTier = "First Class";
  if (backlogs > 0 || s.result === "F") performanceTier = "At-Risk (Backlogs)";
  else if (sgpa >= 9.0) performanceTier = "Outstanding";
  else if (sgpa >= 7.5) performanceTier = "Distinction";
  else if (sgpa >= 6.5) performanceTier = "First Class";
  else performanceTier = "Pass Class";

  const domainScores = {
    hardwareEmbedded: Math.min(100, Math.round((subjectScores.CSEC402.marks / 100) * 100)),
    iotNetworking: Math.min(100, Math.round((subjectScores.CSEC403.marks / 100) * 100)),
    softwareProgramming: Math.min(100, Math.round((subjectScores.CSEL403.marks / 50) * 100)),
    cloudDataAnalytics: Math.min(100, Math.round((subjectScores.MDMC40X1.marks / 100) * 100)),
    cyberSecurity: Math.min(100, Math.round((subjectScores.CSEC401.marks / 100) * 100))
  };

  return {
    id: `STU_${s.seatNo}`,
    rollNo: s.seatNo,
    seatNo: s.seatNo,
    prn: s.prn,
    name: s.name,
    gender: s.gender,
    class: "SE",
    elective: s.elective,
    attendance,
    activeBacklogs: backlogs,
    cgpa: sgpa,
    totalMarks: s.total,
    maxTotalMarks: 725,
    percentage: Number(((s.total / 725) * 100).toFixed(2)),
    earnedCredits: s.ec,
    earnedCreditPoints: s.ecg,
    result: s.result,
    performanceTier,
    semesterResults: {
      4: {
        semesterNumber: 4,
        sgpa: sgpa,
        earnedCredits: s.ecg,
        totalCredits: 21,
        backlogs: backlogs,
        status: s.result === "P" ? (sgpa >= 7.5 ? "Distinction" : sgpa >= 6.5 ? "First Class" : "Pass") : "ATKT / Fail",
        subjects: subjectScores
      }
    },
    domainScores
  };
});

const outputContent = `// SIES GRADUATE SCHOOL OF TECHNOLOGY (AUTONOMOUS)
// Department of Computer Science & Engineering (IoT & CS including BCT)
// SEMESTER - IV (R-24) Regular Examination Results Dataset

export const DEPARTMENT_INFO = {
  name: "Department of Computer Science & Engineering (IoT & CS including BCT)",
  code: "CSE-IoT & CS(BCT)",
  institution: "SIES Graduate School of Technology (Autonomous)",
  collegeCode: "690",
  academicYear: "2025-2026",
  hodName: "Dr. Aparna Bannore",
  auditDate: "May 2026",
  batchInfo: {
    SE: { year: "Second Year (SE)", entryYear: "2024-2028", currentSem: 4, pastSems: [4] },
    TE: { year: "Third Year (TE)", entryYear: "2023-2027", currentSem: 6, pastSems: [4] },
    BE: { year: "Final Year (BE)", entryYear: "2022-2026", currentSem: 8, pastSems: [4] }
  }
};

export const SUBJECT_METADATA = {
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

export const INITIAL_STUDENTS = ${JSON.stringify(formattedStudents, null, 2)};

export function generateBatchData() {
  return INITIAL_STUDENTS;
}
`;

fs.writeFileSync('e:/AUDIT/src/data/mockData.js', outputContent, 'utf8');
console.log('Successfully generated real dataset for 63 students!');
