import React, { useState, useMemo } from 'react';
import { 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  AlertTriangle, 
  Star, 
  ChevronRight, 
  GitCompare,
  Medal,
  BookOpen
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell, 
  CartesianGrid 
} from 'recharts';
import confetti from 'canvas-confetti';
import YearSemesterSelector from './YearSemesterSelector';
import { 
  computeClassAuditSummary, 
  computeClassComparison, 
  computeOddEvenComparison 
} from '../utils/statistics';

const COLORS = {
  outstanding: '#38bdf8', // sky-400
  distinction: '#34d399', // emerald-400
  firstClass: '#818cf8',  // indigo-400
  passClass: '#fbbf24',   // amber-400
  atRisk: '#f87171'       // red-400
};

export default function OverviewDashboard({ 
  students, 
  selectedClass, 
  setSelectedClass,
  selectedSemester,
  setSelectedSemester,
  onSelectStudent,
  onNavigateTab,
  batches = [],
  selectedBatch = '2024-2028',
  setSelectedBatch,
  onOpenBatchModal
}) {
  const [isOddEvenCompare, setIsOddEvenCompare] = useState(false);

  const batchStudents = selectedBatch === 'ALL'
    ? students
    : students.filter(s => s.batch === selectedBatch || (!s.batch && selectedBatch === '2024-2028'));

  const summary = computeClassAuditSummary(batchStudents, selectedClass, selectedSemester);
  const classComparison = computeClassComparison(batchStudents);
  const oddEvenData = selectedClass !== 'ALL' ? computeOddEvenComparison(batchStudents, selectedClass) : null;
  
  // Confetti trigger for toppers
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Performance tier pie chart data
  const isSpecificSem = selectedSemester !== 'ALL';
  const sNum = Number(selectedSemester);

  const filteredStudents = selectedClass === 'ALL'
    ? batchStudents
    : batchStudents.filter(s => {
        if (selectedClass === 'SE') return s.semesterResults?.[3] || s.semesterResults?.[4] || s.class === 'SE';
        if (selectedClass === 'TE') return s.semesterResults?.[5] || s.semesterResults?.[6] || s.class === 'TE';
        if (selectedClass === 'BE') return s.semesterResults?.[7] || s.semesterResults?.[8] || s.class === 'BE';
        return s.class === selectedClass;
      });

  const tierCounts = {
    "Outstanding (≥8.5)": filteredStudents.filter(s => {
      const score = isSpecificSem ? s.semesterResults[sNum]?.sgpa || 0 : s.cgpa;
      const backlogs = isSpecificSem ? s.semesterResults[sNum]?.backlogs || 0 : s.activeBacklogs;
      return score >= 8.5 && backlogs === 0;
    }).length,
    "Distinction (7.5-8.49)": filteredStudents.filter(s => {
      const score = isSpecificSem ? s.semesterResults[sNum]?.sgpa || 0 : s.cgpa;
      const backlogs = isSpecificSem ? s.semesterResults[sNum]?.backlogs || 0 : s.activeBacklogs;
      return score >= 7.5 && score < 8.5 && backlogs === 0;
    }).length,
    "First Class (6.0-7.49)": filteredStudents.filter(s => {
      const score = isSpecificSem ? s.semesterResults[sNum]?.sgpa || 0 : s.cgpa;
      const backlogs = isSpecificSem ? s.semesterResults[sNum]?.backlogs || 0 : s.activeBacklogs;
      return score >= 6.0 && score < 7.5 && backlogs === 0;
    }).length,
    "Pass Class (<6.0)": filteredStudents.filter(s => {
      const score = isSpecificSem ? s.semesterResults[sNum]?.sgpa || 0 : s.cgpa;
      const backlogs = isSpecificSem ? s.semesterResults[sNum]?.backlogs || 0 : s.activeBacklogs;
      return score < 6.0 && backlogs === 0;
    }).length,
    "At-Risk (Backlogs)": filteredStudents.filter(s => {
      const backlogs = isSpecificSem ? s.semesterResults[sNum]?.backlogs || 0 : s.activeBacklogs;
      return backlogs > 0;
    }).length
  };

  const pieData = [
    { name: 'Outstanding (≥8.5)', value: tierCounts["Outstanding (≥8.5)"], color: COLORS.outstanding },
    { name: 'Distinction (7.5-8.49)', value: tierCounts["Distinction (7.5-8.49)"], color: COLORS.distinction },
    { name: 'First Class (6.0-7.49)', value: tierCounts["First Class (6.0-7.49)"], color: COLORS.firstClass },
    { name: 'Pass Class (<6.0)', value: tierCounts["Pass Class (<6.0)"], color: COLORS.passClass },
    { name: 'At-Risk (Backlogs)', value: tierCounts["At-Risk (Backlogs)"], color: COLORS.atRisk }
  ].filter(d => d.value > 0);

  // Class Comparison Chart Data
  const classChartData = classComparison.map(c => ({
    class: `${c.class} (Year ${c.class === 'SE' ? '2' : c.class === 'TE' ? '3' : '4'})`,
    passPercentage: c.passPercentage,
    meanCGPA: c.meanCGPA * 10,
    rawCGPA: c.meanCGPA,
    distinctionRate: c.distinctionPercentage,
    backlogs: c.backlogStudentsCount
  }));

  // Helper to identify and strictly exclude laboratory courses, practicals, and mini-projects
  const isLabCourse = (code = '', name = '', short = '') => {
    const c = String(code || '').toUpperCase().trim();
    const n = String(name || '').toLowerCase().trim();
    const s = String(short || '').toLowerCase().trim();

    return (
      c.startsWith('CSEL') || 
      c.startsWith('CSEM') || 
      c.startsWith('LAB') || 
      c.startsWith('PRJ') ||
      n.includes('lab') || 
      n.includes('laboratory') || 
      n.includes('project') || 
      n.includes('practical') || 
      n.includes('workshop') ||
      s.includes('lab') || 
      s.includes('proj')
    );
  };

  // Determine active semester strictly from the top filter (never combine semesters)
  const activeSubjectSemester = useMemo(() => {
    if (isSpecificSem) {
      return sNum;
    }
    // When selectedSemester is 'ALL', default strictly to the active examination semester for the selected class
    if (selectedClass === 'SE' || selectedClass === 'ALL') return 4;
    if (selectedClass === 'TE') return 6;
    if (selectedClass === 'BE') return 8;
    return 4;
  }, [isSpecificSem, sNum, selectedClass]);

  // Subject-wise toppers computed strictly for the active semester (Theory only, Labs excluded, Never combined)
  const subjectToppers = useMemo(() => {
    const subMap = new Map();

    filteredStudents.forEach(stu => {
      if (!stu.semesterResults) return;

      const semData = stu.semesterResults[activeSubjectSemester] || stu.semesterResults[String(activeSubjectSemester)];
      if (!semData || !semData.subjects) return;

      Object.entries(semData.subjects).forEach(([code, subj]) => {
        if (!subj || typeof subj.marks !== 'number') return;

        // Strictly exclude laboratories, practicals, and mini-projects
        if (isLabCourse(code, subj.subjectName, subj.short)) {
          return;
        }

        const maxMarks = subj.maxMarks || 100;
        const key = code;

        if (!subMap.has(key)) {
          subMap.set(key, {
            code,
            name: subj.subjectName || code,
            short: subj.short || code,
            faculty: subj.faculty || "Faculty",
            credits: subj.credits || 3,
            maxMarks,
            semester: activeSubjectSemester,
            highestMarks: subj.marks,
            highestPercentage: Number(((subj.marks / maxMarks) * 100).toFixed(1)),
            toppers: [
              {
                student: stu,
                marks: subj.marks,
                grade: subj.grade || 'O',
                percentage: Number(((subj.marks / maxMarks) * 100).toFixed(1))
              }
            ]
          });
        } else {
          const entry = subMap.get(key);
          if (subj.marks > entry.highestMarks) {
            entry.highestMarks = subj.marks;
            entry.highestPercentage = Number(((subj.marks / maxMarks) * 100).toFixed(1));
            entry.toppers = [
              {
                student: stu,
                marks: subj.marks,
                grade: subj.grade || 'O',
                percentage: Number(((subj.marks / maxMarks) * 100).toFixed(1))
              }
            ];
          } else if (subj.marks === entry.highestMarks) {
            if (!entry.toppers.some(t => t.student.id === stu.id || t.student.rollNo === stu.rollNo)) {
              entry.toppers.push({
                student: stu,
                marks: subj.marks,
                grade: subj.grade || 'O',
                percentage: Number(((subj.marks / maxMarks) * 100).toFixed(1))
              });
            }
          }
        }
      });
    });

    return Array.from(subMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredStudents, activeSubjectSemester]);

  // Odd vs Even Comparison Chart Data
  const oddEvenChartData = oddEvenData && oddEvenData.odd.audit && oddEvenData.even.audit ? [
    {
      metric: 'Pass Rate (%)',
      [oddEvenData.odd.label]: oddEvenData.odd.audit.passPercentage,
      [oddEvenData.even.label]: oddEvenData.even.audit.passPercentage
    },
    {
      metric: 'Mean SGPA (x10)',
      [oddEvenData.odd.label]: oddEvenData.odd.audit.meanSGPA * 10,
      [oddEvenData.even.label]: oddEvenData.even.audit.meanSGPA * 10
    },
    {
      metric: 'Clearance Count',
      [oddEvenData.odd.label]: oddEvenData.odd.audit.passCount,
      [oddEvenData.even.label]: oddEvenData.even.audit.passCount
    }
  ] : null;

  return (
    <div className="space-y-6 pb-12">
      {/* Year & Semester Hierarchy Selector */}
      <YearSemesterSelector
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
        showOddEvenToggle={true}
        isOddEvenCompare={isOddEvenCompare}
        setIsOddEvenCompare={setIsOddEvenCompare}
        batches={batches}
        selectedBatch={selectedBatch}
        setSelectedBatch={setSelectedBatch}
        onOpenBatchModal={onOpenBatchModal}
        students={students}
      />

      {/* KPI Cards Grid */}
      {summary && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Card 1: Total Enrolled */}
          <div className="glass-panel p-5 rounded-2xl glass-panel-hover relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Students Assessed</span>
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mt-3 font-sans">{summary.totalCount}</p>
            <div className="flex items-center mt-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-medium mr-1.5 flex items-center">
                {summary.genderStats.maleCount} M / {summary.genderStats.femaleCount} F
              </span>
              <span>enrolled</span>
            </div>
          </div>

          {/* Card 2: Pass Rate */}
          <div className="glass-panel p-5 rounded-2xl glass-panel-hover relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Clearance / Pass %</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-emerald-400 mt-3 font-sans">{summary.passPercentage}%</p>
            <div className="flex items-center mt-2 text-xs text-slate-400">
              <span className="text-slate-300 font-medium mr-1.5">{summary.passCount} of {summary.totalCount}</span>
              <span>cleared</span>
            </div>
          </div>

          {/* Card 3: Average SGPA / CGPA */}
          <div className="glass-panel p-5 rounded-2xl glass-panel-hover relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                {summary.isSpecificSem ? `Mean Sem ${summary.semester} SGPA` : 'Cumulative CGPA'}
              </span>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-indigo-300 mt-3 font-sans">
              {summary.meanCGPA} <span className="text-xs text-slate-400 font-normal">/ 10.0</span>
            </p>
            <div className="flex items-center mt-2 text-xs text-slate-400">
              <span>Std Dev: </span>
              <span className="text-indigo-400 font-medium ml-1">±{summary.stdDevCGPA}</span>
            </div>
          </div>

          {/* Card 4: Distinction Achievers */}
          <div className="glass-panel p-5 rounded-2xl glass-panel-hover relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Distinction Rate</span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-amber-400 mt-3 font-sans">{summary.distinctionPercentage}%</p>
            <div className="flex items-center mt-2 text-xs text-slate-400">
              <span className="text-amber-300 font-medium mr-1.5">{summary.distinctionCount} students</span>
              <span>(≥ 7.5)</span>
            </div>
          </div>

          {/* Card 5: Remedial / Backlogs */}
          <div className="glass-panel p-5 rounded-2xl glass-panel-hover relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">At-Risk / Backlogs</span>
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-rose-400 mt-3 font-sans">{summary.backlogStudentsCount}</p>
            <div className="flex items-center mt-2 text-xs text-slate-400">
              <span className="text-rose-300 font-medium mr-1.5">{summary.backlogPercentage}%</span>
              <span>need remedial aid</span>
            </div>
          </div>
        </div>
      )}

      {/* Odd vs Even Semester Comparative View (When Toggled) */}
      {isOddEvenCompare && oddEvenData && oddEvenChartData && (
        <div className="glass-panel p-6 rounded-2xl border border-amber-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <GitCompare className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-lg font-bold text-white">{selectedClass} Engineering: Odd Sem vs Even Sem Audit</h3>
                <p className="text-xs text-slate-400">Direct comparison between {oddEvenData.odd.label} and {oddEvenData.even.label}</p>
              </div>
            </div>
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-500/20 text-amber-300">
              2 Semesters / Year Analysis
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {/* Odd Sem Card */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sky-400">{oddEvenData.odd.label}</span>
                <span className="text-xs text-slate-400">Autumn Term</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-slate-950">
                  <p className="text-[10px] text-slate-500">Pass Rate</p>
                  <p className="text-base font-bold text-emerald-400">{oddEvenData.odd.audit?.passPercentage}%</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-950">
                  <p className="text-[10px] text-slate-500">Mean SGPA</p>
                  <p className="text-base font-bold text-white font-mono">{oddEvenData.odd.audit?.meanSGPA}</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-950">
                  <p className="text-[10px] text-slate-500">Backlogs</p>
                  <p className="text-base font-bold text-rose-400 font-mono">{oddEvenData.odd.audit?.failCount}</p>
                </div>
              </div>
            </div>

            {/* Even Sem Card */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-indigo-400">{oddEvenData.even.label}</span>
                <span className="text-xs text-slate-400">Spring Term</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-slate-950">
                  <p className="text-[10px] text-slate-500">Pass Rate</p>
                  <p className="text-base font-bold text-emerald-400">{oddEvenData.even.audit?.passPercentage}%</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-950">
                  <p className="text-[10px] text-slate-500">Mean SGPA</p>
                  <p className="text-base font-bold text-white font-mono">{oddEvenData.even.audit?.meanSGPA}</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-950">
                  <p className="text-[10px] text-slate-500">Backlogs</p>
                  <p className="text-base font-bold text-rose-400 font-mono">{oddEvenData.even.audit?.failCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1: Class or Semester Progression Bar Chart */}
        <div className="glass-panel p-6 rounded-2xl lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                {selectedClass === 'ALL' ? 'Class-wise Audit Comparison (SE vs TE vs BE)' : `${selectedClass} Year Progression`}
              </h3>
              <p className="text-xs text-slate-400">Pass percentage and average performance</p>
            </div>
            <button 
              onClick={() => onNavigateTab('class-comparison')}
              className="text-xs text-sky-400 hover:text-sky-300 flex items-center font-medium"
            >
              Full Comparison <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={classChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                <XAxis dataKey="class" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: '8px' }} />
                <Bar dataKey="passPercentage" name="Pass Percentage" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="meanCGPA" name="Mean CGPA (x10)" fill="#34d399" radius={[4, 4, 0, 0]} />
                <Bar dataKey="distinctionRate" name="Distinction Rate" fill="#818cf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Grade Tier Breakdown (Donut) */}
        <div className="glass-panel p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-1">Grade Tier Distribution</h3>
          <p className="text-xs text-slate-400 mb-2">Distribution across performance bands</p>

          <div className="h-56 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  formatter={(value) => [`${value} students (${((value / summary.totalCount) * 100).toFixed(1)}%)`, 'Count']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 gap-1.5 mt-2">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-xs py-0.5">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-300">{item.name}</span>
                </div>
                <span className="font-semibold text-white font-mono">{item.value} ({((item.value / summary.totalCount) * 100).toFixed(0)}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performers in Selected Scope */}
      {summary && summary.topRankers && (
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white">
                Top Rankers ({selectedClass === 'ALL' ? 'All Classes' : `${selectedClass} • ${selectedSemester === 'ALL' ? 'All Terms' : `Sem ${selectedSemester}`}`})
              </h3>
            </div>
            <button
              onClick={triggerConfetti}
              className="flex items-center space-x-1 px-3 py-1 text-xs rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-all font-medium"
            >
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>Celebrate Toppers</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {summary.topRankers.map((student, idx) => {
              const score = isSpecificSem ? student.semesterResults[sNum]?.sgpa || 0 : student.cgpa;

              return (
                <div 
                  key={student.id} 
                  onClick={() => onSelectStudent(student)}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        idx === 0 ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30' :
                        idx === 1 ? 'bg-slate-300 text-slate-950' :
                        idx === 2 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-300'
                      }`}>
                        #{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400">
                        {student.class}
                      </span>
                    </div>
                    <h4 className="font-bold text-white text-sm mt-2 truncate">{student.name}</h4>
                    <p className="text-xs text-slate-400 font-mono">{student.rollNo}</p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500">{isSpecificSem ? `Sem ${sNum} SGPA` : 'CGPA'}</p>
                      <p className="text-sm font-extrabold text-amber-400 font-mono">{score}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-500">Attendance</p>
                      <p className="text-xs font-semibold text-emerald-400">{student.attendance}%</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Subject-Wise Academic Toppers */}
      {subjectToppers && subjectToppers.length > 0 && (
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shadow-sm shadow-amber-500/20">
                <Medal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Subject-Wise Academic Toppers</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {subjectToppers.length} Theory Courses
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Highest scoring students in core theory courses • {selectedClass === 'ALL' ? 'SE Cohort' : `${selectedClass} Cohort`} • Semester {activeSubjectSemester} (Labs excluded)
                </p>
              </div>
            </div>

            {/* Quick Semester Switcher synced with Top Filter */}
            <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs self-start sm:self-auto">
              <button
                onClick={() => setSelectedSemester(4)}
                className={`px-3 py-1 rounded-lg font-semibold transition-all text-xs ${
                  activeSubjectSemester === 4
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                Sem 4 (Even)
              </button>
              <button
                onClick={() => setSelectedSemester(3)}
                className={`px-3 py-1 rounded-lg font-semibold transition-all text-xs ${
                  activeSubjectSemester === 3
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                Sem 3 (Odd)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {subjectToppers.map((item) => {
              const primaryTopper = item.toppers[0];
              const tiedCount = item.toppers.length - 1;

              return (
                <div
                  key={`${item.code}_${item.semester}`}
                  onClick={() => primaryTopper && onSelectStudent(primaryTopper.student)}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-sky-500/5"
                >
                  {/* Top Bar: Subject Badge & Semester */}
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-sky-500/15 text-sky-300 border border-sky-500/30 font-mono">
                        {item.short || item.code}
                      </span>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-1.5 py-0.5 rounded">
                          Sem {item.semester}
                        </span>
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                          {item.highestMarks}/{item.maxMarks}
                        </span>
                      </div>
                    </div>

                    {/* Subject Full Name */}
                    <h4 className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-1 truncate">
                      {item.faculty || "Faculty"}
                    </p>
                  </div>

                  {/* Topper Student Info */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black text-xs flex items-center justify-center flex-shrink-0 shadow-sm shadow-amber-400/20">
                        {primaryTopper?.student?.name ? primaryTopper.student.name.charAt(0) : "S"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-white truncate group-hover:text-amber-300 transition-colors">
                            {primaryTopper?.student?.name}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-0.5">
                          <span>{primaryTopper?.student?.rollNo}</span>
                          <span className="text-emerald-400 font-semibold">{primaryTopper?.percentage}% (Gr {primaryTopper?.grade})</span>
                        </div>
                      </div>
                    </div>

                    {tiedCount > 0 && (
                      <p className="text-[10px] text-amber-300/80 mt-1.5 text-right font-medium">
                        +{tiedCount} other student{tiedCount > 1 ? 's' : ''} tied with {item.highestMarks} marks
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
