import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  TrendingUp, 
  AlertTriangle, 
  BookOpen, 
  Calendar, 
  Clock,
  Layers
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Legend 
} from 'recharts';

export default function StudentPersonalDashboard({ student, allStudents }) {
  // Determine available years for this student
  const isSE = student?.class === 'SE';
  const isTE = student?.class === 'TE';

  const availableYears = isSE ? ['SE'] : isTE ? ['SE', 'TE'] : ['SE', 'TE', 'BE'];

  const [selectedYear, setSelectedYear] = useState(student?.class || 'SE');
  const [activeSemTab, setActiveSemTab] = useState(() => {
    const sems = Object.keys(student?.semesterResults || {});
    return sems.length > 0 ? Number(sems[sems.length - 1]) : 4;
  });

  if (!student) {
    return (
      <div className="glass-panel p-12 text-center rounded-2xl">
        <p className="text-slate-400">Student record not found. Please log in again.</p>
      </div>
    );
  }

  // Calculate student's rank in their class
  const classPeers = allStudents.filter(s => s.class === student.class);
  const sortedPeers = [...classPeers].sort((a, b) => b.cgpa - a.cgpa);
  const classRank = sortedPeers.findIndex(s => s.rollNo === student.rollNo) + 1 || 1;
  const totalClassStrength = classPeers.length || 60;
  const classAvgCGPA = (classPeers.reduce((acc, s) => acc + s.cgpa, 0) / (classPeers.length || 1)).toFixed(2);

  // Compute SGPA progression comparison data (Student SGPA vs Class Average)
  const semesterProgressionData = Object.entries(student.semesterResults || {}).map(([semNum, res]) => {
    const sNum = Number(semNum);
    const peersWithSem = classPeers.filter(p => p.semesterResults && p.semesterResults[sNum]);
    const semAvg = peersWithSem.length 
      ? Number((peersWithSem.reduce((acc, p) => acc + p.semesterResults[sNum].sgpa, 0) / peersWithSem.length).toFixed(2))
      : res.sgpa;

    return {
      semester: `Sem ${sNum}`,
      semNumber: sNum,
      mySGPA: res.sgpa,
      classAvg: semAvg,
      backlogs: res.backlogs
    };
  });

  // Calculate student grade counts
  const gradeCounts = { O: 0, "A+": 0, A: 0, "B+": 0, B: 0, C: 0, F: 0 };
  let totalCreditsEarned = 0;

  Object.values(student.semesterResults || {}).forEach(sem => {
    Object.values(sem.subjects || {}).forEach(sub => {
      if (gradeCounts[sub.grade] !== undefined) {
        gradeCounts[sub.grade]++;
      }
      if (sub.grade !== 'F') {
        totalCreditsEarned += (sub.credits || 3);
      }
    });
  });

  // IoT Domain Competency Radar Data
  const radarData = [
    { domain: 'Hardware / Embedded', myScore: student.domainScores?.hardwareEmbedded || 78, fullMark: 100 },
    { domain: 'IoT Networking & Protocols', myScore: student.domainScores?.iotNetworking || 82, fullMark: 100 },
    { domain: 'Software & Algorithms', myScore: student.domainScores?.softwareProgramming || 88, fullMark: 100 },
    { domain: 'Cloud & Edge Computing', myScore: student.domainScores?.cloudDataAnalytics || 75, fullMark: 100 },
    { domain: 'IoT Cybersecurity', myScore: student.domainScores?.cyberSecurity || 72, fullMark: 100 }
  ];

  // Year to Semesters mapping
  const yearSemMap = {
    SE: [
      { num: 3, label: 'Semester 3 (Odd Sem / Autumn)', short: 'Sem 3' },
      { num: 4, label: 'Semester 4 (Even Sem / Spring)', short: 'Sem 4' }
    ],
    TE: [
      { num: 5, label: 'Semester 5 (Odd Sem / Autumn)', short: 'Sem 5' },
      { num: 6, label: 'Semester 6 (Even Sem / Spring)', short: 'Sem 6' }
    ],
    BE: [
      { num: 7, label: 'Semester 7 (Odd Sem / Autumn)', short: 'Sem 7' },
      { num: 8, label: 'Semester 8 (Even Sem / Spring)', short: 'Sem 8' }
    ]
  };

  const currentYearSemesters = yearSemMap[selectedYear] || [];
  const currentSemData = student.semesterResults?.[activeSemTab];

  return (
    <div className="space-y-6 pb-12">
      {/* Student Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl glass-card-accent p-6 sm:p-8 border border-sky-500/20">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-sky-500/25">
              {student.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Welcome, {student.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  {student.class} Engineering
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono mt-1">
                Roll No: <strong className="text-white">{student.rollNo}</strong> • PRN: {student.prn} • CSE–IoT Dept
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
            <div className="text-right">
              <p className="text-[11px] text-slate-400">Class Standing</p>
              <p className="text-xl font-black text-amber-400">
                Rank #{classRank} <span className="text-xs text-slate-400 font-normal">/ {totalClassStrength}</span>
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Year & Semester Filter Bar for Student */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Engineering Year:</span>
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
            {availableYears.map(yr => (
              <button
                key={yr}
                onClick={() => {
                  setSelectedYear(yr);
                  const firstSem = yearSemMap[yr]?.[0]?.num;
                  if (firstSem) setActiveSemTab(firstSem);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedYear === yr
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {yr} ({yr === 'SE' ? '2nd Yr' : yr === 'TE' ? '3rd Yr' : 'Final Yr'})
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Terms (2 Sems/Yr):</span>
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
            {currentYearSemesters.map(s => (
              <button
                key={s.num}
                onClick={() => setActiveSemTab(s.num)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeSemTab === s.num
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {s.short} ({s.num % 2 === 1 ? 'Odd' : 'Even'})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Personal KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* CGPA */}
        <div className="glass-panel p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Cumulative CGPA</span>
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-black text-white mt-2 font-mono">{student.cgpa} <span className="text-xs text-slate-400 font-normal">/ 10.0</span></p>
          <div className="flex items-center mt-2 text-xs text-slate-400">
            <span className={student.cgpa >= Number(classAvgCGPA) ? 'text-emerald-400 font-medium' : 'text-amber-400 font-medium'}>
              Class Avg: {classAvgCGPA}
            </span>
          </div>
        </div>

        {/* Selected Term SGPA */}
        <div className="glass-panel p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Sem {activeSemTab} SGPA</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-black text-indigo-300 mt-2 font-mono">
            {currentSemData ? currentSemData.sgpa : '-'}
          </p>
          <div className="flex items-center mt-2 text-xs text-slate-400">
            <span>{activeSemTab % 2 === 1 ? 'Odd Sem Term' : 'Even Sem Term'}</span>
          </div>
        </div>

        {/* Credits Earned */}
        <div className="glass-panel p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Credits Cleared</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-black text-emerald-400 mt-2 font-mono">{totalCreditsEarned}</p>
          <div className="flex items-center mt-2 text-xs text-slate-400">
            <span>All terms combined</span>
          </div>
        </div>

        {/* Attendance */}
        <div className="glass-panel p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Attendance</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className={`text-3xl font-black mt-2 font-mono ${student.attendance < 75 ? 'text-rose-400' : 'text-amber-400'}`}>
            {student.attendance}%
          </p>
          <div className="flex items-center mt-2 text-xs text-slate-400">
            <span>{student.attendance >= 75 ? 'Eligibility met (>75%)' : 'Caution: Low'}</span>
          </div>
        </div>

        {/* Backlogs */}
        <div className="glass-panel p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Active Backlogs</span>
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <p className={`text-3xl font-black mt-2 font-mono ${student.activeBacklogs > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
            {student.activeBacklogs}
          </p>
          <div className="flex items-center mt-2 text-xs text-slate-400">
            <span>{student.activeBacklogs === 0 ? '0 Backlogs Pending' : 'Need re-examination'}</span>
          </div>
        </div>
      </div>

      {/* Visual Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My SGPA Progression Chart */}
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">My SGPA Progression Trajectory</h3>
              <p className="text-xs text-slate-400">Odd & Even Semester performance compared to class average</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={semesterProgressionData} margin={{ top: 10, right: 15, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis dataKey="semester" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <YAxis stroke="#94a3b8" domain={[4.0, 10.0]} tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line 
                  type="monotone" 
                  dataKey="mySGPA" 
                  name="My SGPA" 
                  stroke="#38bdf8" 
                  strokeWidth={3} 
                  dot={{ r: 5, fill: '#0284c7' }} 
                  activeDot={{ r: 7 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="classAvg" 
                  name="Class Average" 
                  stroke="#94a3b8" 
                  strokeDasharray="4 4" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* My IoT Skill Competencies Radar */}
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">My IoT Competency Matrix</h3>
              <p className="text-xs text-slate-400">Proficiency scores derived from your course and lab grades</p>
            </div>
          </div>

          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="domain" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                <PolarRadiusAxis stroke="#64748b" domain={[0, 100]} />
                <Radar name="My Score" dataKey="myScore" stroke="#818cf8" fill="#818cf8" fillOpacity={0.4} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Semester Transcripts */}
      <div className="glass-panel p-6 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              {selectedYear} • Semester {activeSemTab} Transcript ({activeSemTab % 2 === 1 ? 'Odd Sem' : 'Even Sem'})
            </h3>
            <p className="text-xs text-slate-400">Course-by-course marks, credits, and grade points</p>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">
              Term SGPA: {currentSemData?.sgpa || '-'}
            </span>
          </div>
        </div>

        {/* Current Selected Semester Table */}
        {currentSemData ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/90 text-slate-300 uppercase tracking-wider text-[10px] border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Subject Code & Name</th>
                  <th className="py-3 px-4">Course Faculty</th>
                  <th className="py-3 px-4">Credits</th>
                  <th className="py-3 px-4">My Marks</th>
                  <th className="py-3 px-4">Grade</th>
                  <th className="py-3 px-4">Grade Points</th>
                  <th className="py-3 px-4">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {Object.entries(currentSemData.subjects || {}).map(([subCode, subInfo]) => (
                  <tr key={subCode} className="hover:bg-slate-900/40">
                    <td className="py-3 px-4">
                      <div className="font-bold text-white">{subInfo.subjectName}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{subCode} ({subInfo.short})</div>
                    </td>
                    <td className="py-3 px-4 text-slate-400">{subInfo.faculty}</td>
                    <td className="py-3 px-4">{subInfo.credits}</td>
                    <td className="py-3 px-4 font-mono font-bold text-white">{subInfo.marks}/100</td>
                    <td className="py-3 px-4 font-bold font-mono text-sky-400 text-sm">{subInfo.grade}</td>
                    <td className="py-3 px-4 font-mono">{subInfo.points} / 10</td>
                    <td className="py-3 px-4">
                      {subInfo.isBacklog ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          FAIL / KT
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          PASSED
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-slate-400 text-xs py-4 text-center">No transcript data for Semester {activeSemTab}.</p>
        )}
      </div>
    </div>
  );
}
