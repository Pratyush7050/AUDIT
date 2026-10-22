import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  X, 
  BookOpen, 
  UserCheck,
  Award,
  AlertTriangle,
  CheckCircle2,
  Users,
  GraduationCap
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  ZAxis, 
  Tooltip, 
  CartesianGrid, 
  BarChart, 
  Bar,
  Legend
} from 'recharts';
import { computeSemesterAudit } from '../utils/statistics';

// Helper to identify Mini Project courses (Mini Projects do not have backlogs)
export const isMiniProject = (subj) => {
  if (!subj) return false;
  const name = String(subj.name || '').toLowerCase();
  const short = String(subj.short || '').toLowerCase();
  const code = String(subj.code || '').toUpperCase();
  return name.includes('mini project') || 
         name.includes('mini-project') || 
         short.includes('mini proj') || 
         short.includes('mini-proj') ||
         code.startsWith('CSEM') ||
         (name.includes('project') && !name.includes('management'));
};

export default function SubjectAnalysis({ 
  students,
  batches = [],
  selectedBatch = '2024-2028',
  setSelectedBatch,
  onSelectStudent
}) {
  const [selectedClassFilter, setSelectedClassFilter] = useState('ALL');
  const [selectedSemesterFilter, setSelectedSemesterFilter] = useState('ALL');
  const [courseTypeFilter, setCourseTypeFilter] = useState('ALL'); // 'ALL' | 'THEORY' | 'LAB'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjectModal, setSelectedSubjectModal] = useState(null);
  const [modalTab, setModalTab] = useState('histogram'); // 'histogram' | 'rankers' | 'backlogs'
  const [chartView, setChartView] = useState('quadrant'); // 'quadrant' | 'ranking'

  // Resilient batch filtering (handles en-dashes, hyphens, and fallback)
  const normSelected = String(selectedBatch || 'ALL').replace(/[–—]/g, '-').trim();

  const batchStudents = (normSelected === 'ALL')
    ? students
    : students.filter(s => {
        if (!s) return false;
        if (!s.batch) return normSelected.includes('2024'); // default 2024-2028 batch
        const sBatch = String(s.batch).replace(/[–—]/g, '-').trim();
        return sBatch === normSelected || normSelected.includes(sBatch) || sBatch.includes(normSelected);
      });

  const effectiveStudents = (batchStudents && batchStudents.length > 0) ? batchStudents : students;

  // Extract all available semesters present in the students dataset
  const availableSemesters = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
  effectiveStudents.forEach(s => {
    if (s.semesterResults) {
      Object.keys(s.semesterResults).forEach(semKey => {
        const n = Number(semKey);
        if (!isNaN(n)) availableSemesters.add(n);
      });
    }
  });

  const allSubjects = [];

  Array.from(availableSemesters).sort((a, b) => a - b).forEach(sNum => {
    const semAudit = computeSemesterAudit(effectiveStudents, sNum);
    if (semAudit && semAudit.subjectStats && semAudit.subjectStats.length > 0) {
      const cls = (sNum <= 2) ? 'FE' : (sNum === 3 || sNum === 4) ? 'SE' : (sNum === 5 || sNum === 6) ? 'TE' : 'BE';
      semAudit.subjectStats.forEach(s => {
        allSubjects.push({
          ...s,
          semester: sNum,
          class: cls
        });
      });
    }
  });

  // Apply filters safely
  const q = (searchQuery || '').trim().toLowerCase();
  const filteredSubjects = allSubjects.filter(s => {
    const matchesClass = selectedClassFilter === 'ALL' || s.class === selectedClassFilter;
    const matchesSemester = selectedSemesterFilter === 'ALL' || s.semester === Number(selectedSemesterFilter);
    const isLab = s.code.includes('L') || s.name.toLowerCase().includes('lab') || s.name.toLowerCase().includes('project');
    const matchesCourseType = courseTypeFilter === 'ALL' 
      ? true 
      : courseTypeFilter === 'THEORY' ? !isLab : isLab;
    const matchesSearch = !q || 
      (s.name && s.name.toLowerCase().includes(q)) || 
      (s.code && s.code.toLowerCase().includes(q)) ||
      (s.faculty && s.faculty.toLowerCase().includes(q));
    return matchesClass && matchesSemester && matchesCourseType && matchesSearch;
  });

  // Helper to extract enrolled students, top 10 rankers, and backlogs for any subject
  const getSubjectStudentLists = (subCode, semNumber, defaultMaxMarks = 100) => {
    const enrolled = [];
    const semKey = Number(semNumber);
    const isProjCourse = isMiniProject({ code: subCode, name: subCode });

    effectiveStudents.forEach(stu => {
      const semData = stu.semesterResults?.[semKey] || stu.semesterResults?.[String(semKey)];
      const subRes = semData?.subjects?.[subCode];
      if (subRes !== undefined) {
        const marks = Number(subRes.marks ?? 0);
        const grade = subRes.grade || '-';
        const isSubjectProj = isProjCourse || isMiniProject({ code: subCode, name: subRes.subjectName, short: subRes.short });
        const isBacklog = isSubjectProj ? false : Boolean(subRes.isBacklog || grade === 'F' || (marks < 40 && !subCode.includes('L')));
        enrolled.push({
          id: stu.id,
          name: stu.name,
          rollNo: stu.rollNo,
          prn: stu.prn,
          gender: stu.gender,
          cgpa: stu.cgpa,
          marks,
          maxMarks: subRes.maxMarks || defaultMaxMarks,
          grade,
          isBacklog,
          studentObj: stu
        });
      }
    });

    // Top 10 Rankers: sort by marks descending (break ties with CGPA)
    const sortedForRankers = [...enrolled].sort((a, b) => b.marks - a.marks || (b.cgpa || 0) - (a.cgpa || 0));
    let currentRank = 1;
    const top10Rankers = sortedForRankers.slice(0, 10).map((r, idx, arr) => {
      if (idx > 0 && r.marks < arr[idx - 1].marks) {
        currentRank = idx + 1;
      }
      return { ...r, rank: currentRank };
    });

    // Backlog List: sort by marks ascending (lowest first) - Mini projects have 0 backlogs
    const isFinalProj = isProjCourse || (enrolled.length > 0 && isMiniProject({ code: subCode, name: enrolled[0]?.studentObj?.semesterResults?.[semKey]?.subjects?.[subCode]?.subjectName }));
    const backlogStudents = isFinalProj
      ? []
      : enrolled
          .filter(st => st.isBacklog)
          .sort((a, b) => a.marks - b.marks || (a.rollNo || '').localeCompare(b.rollNo || ''));

    return {
      enrolledList: enrolled,
      top10Rankers,
      backlogStudents,
      isMiniProjectCourse: isFinalProj
    };
  };

  // Normalized data for Difficulty vs Performance Quadrant (X: Mean Score %, Y: Pass Rate %)
  const scatterData = filteredSubjects.map(s => {
    const maxMarks = s.maxMarks || (s.code.includes('L') || s.credits === 1 ? 50 : 100);
    const avgScorePct = s.meanPercentage ?? Number(((s.meanMarks / maxMarks) * 100).toFixed(1));

    return {
      name: s.short,
      fullName: s.name,
      code: s.code,
      class: s.class,
      semester: s.semester,
      faculty: s.faculty,
      maxMarks,
      meanMarks: s.meanMarks,
      x: avgScorePct,
      y: s.passPercentage,
      z: (s.fails || 0) + 1,
      fails: s.fails || 0,
      category: s.difficultyCategory
    };
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Title & Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Cpu className="w-6 h-6 text-sky-400" />
            <h2 className="text-2xl font-extrabold text-white">Subject-Level Academic Audit</h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Faculty course outcome evaluation, difficulty quadrants, and grade distributions
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Batch Selector */}
          {batches.length > 0 && setSelectedBatch && (
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-semibold focus:outline-none focus:border-sky-500"
            >
              <option value="ALL">All Batches</option>
              {batches.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          )}

          {/* Class Filter */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {['ALL', 'SE', 'TE', 'BE'].map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClassFilter(cls)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedClassFilter === cls
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>

          {/* Semester Selector */}
          <select
            value={selectedSemesterFilter}
            onChange={(e) => setSelectedSemesterFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-semibold focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">All Semesters</option>
            {Array.from(availableSemesters).sort((a, b) => a - b).map(sem => (
              <option key={sem} value={sem}>Semester {sem}</option>
            ))}
          </select>

          {/* Course Type Filter */}
          <select
            value={courseTypeFilter}
            onChange={(e) => setCourseTypeFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-semibold focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">All Courses</option>
            <option value="THEORY">Theory Only</option>
            <option value="LAB">Labs & Mini Projects</option>
          </select>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search subject or faculty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 w-44 sm:w-52"
            />
          </div>
        </div>
      </div>

      {/* Difficulty Quadrant Matrix & Performance Chart */}
      <div className="glass-panel p-6 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              {chartView === 'quadrant' ? 'Subject Difficulty & Performance Quadrant' : 'Subject Attainment & Score Ranking'}
            </h3>
            <p className="text-xs text-slate-400">
              {chartView === 'quadrant' 
                ? 'Average Score (%) vs Pass Rate (%) — Click any node to view grade distribution' 
                : 'Comparative evaluation of Pass Rate vs Average Score percentage across courses'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-900 p-0.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setChartView('quadrant')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  chartView === 'quadrant' 
                    ? 'bg-sky-500 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Quadrant Matrix
              </button>
              <button
                onClick={() => setChartView('ranking')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  chartView === 'ranking' 
                    ? 'bg-sky-500 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Bar Ranking
              </button>
            </div>

            {chartView === 'quadrant' && (
              <div className="flex items-center space-x-3 text-[11px]">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> High Scoring
                </span>
                <span className="flex items-center gap-1 text-sky-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Moderate
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span> Critical Remedial
                </span>
              </div>
            )}
          </div>
        </div>

        {scatterData.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center text-center p-6 bg-slate-900/40 rounded-xl border border-dashed border-slate-800">
            <BookOpen className="w-10 h-10 text-slate-600 mb-2" />
            <p className="text-sm font-semibold text-slate-300">No subject records available for the selected filter</p>
            <p className="text-xs text-slate-500 mt-1">Try switching to "ALL" stage or selecting another academic cohort.</p>
          </div>
        ) : chartView === 'quadrant' ? (
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={scatterData} margin={{ top: 25, right: 35, bottom: 25, left: 15 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="Average Score" 
                  unit="%" 
                  stroke="#64748b" 
                  domain={[45, 100]} 
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  tickLine={{ stroke: '#334155' }}
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  name="Pass Rate" 
                  unit="%" 
                  stroke="#64748b" 
                  domain={[60, 100]} 
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  tickLine={{ stroke: '#334155' }}
                />
                <ZAxis type="number" dataKey="z" range={[120, 260]} />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl text-xs space-y-1.5 min-w-[200px]">
                          <div className="border-b border-slate-800 pb-1.5">
                            <p className="font-bold text-white text-sm">{data.fullName}</p>
                            <p className="text-sky-400 font-mono text-[11px]">{data.code} • Sem {data.semester} ({data.class})</p>
                            <p className="text-slate-400 text-[11px] mt-0.5">{data.faculty}</p>
                          </div>
                          <div className="pt-0.5 space-y-1">
                            <p className="text-emerald-300 flex justify-between">
                              <span>Pass Rate:</span>
                              <span className="font-bold text-white">{data.y}%</span>
                            </p>
                            <p className="text-sky-300 flex justify-between">
                              <span>Average Score:</span>
                              <span className="font-bold text-white">{data.x}% ({data.meanMarks}/{data.maxMarks})</span>
                            </p>
                            <p className="text-rose-300 flex justify-between">
                              <span>Backlogs:</span>
                              <span className="font-bold text-white">{data.fails} Students</span>
                            </p>
                          </div>
                          <p className="text-[10px] text-slate-500 pt-1 border-t border-slate-800/80 italic text-center">
                            Click node to inspect grade breakdown
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Scatter 
                  name="Subjects" 
                  data={scatterData} 
                  fill="#38bdf8"
                  onClick={(node) => {
                    const code = node?.code || node?.payload?.code;
                    const match = filteredSubjects.find(s => s.code === code);
                    if (match) setSelectedSubjectModal(match);
                  }}
                  className="cursor-pointer"
                  shape={(props) => {
                    const { cx, cy, payload } = props;
                    if (cx == null || cy == null || isNaN(cx) || isNaN(cy)) return null;
                    const color = payload.y >= 92 ? '#34d399' : payload.y >= 80 ? '#38bdf8' : '#f87171';
                    return (
                      <g className="cursor-pointer">
                        <circle 
                          cx={cx} 
                          cy={cy} 
                          r={8} 
                          fill={color} 
                          fillOpacity={0.88} 
                          stroke="#ffffff" 
                          strokeWidth={1.5}
                        />
                        <text 
                          x={cx} 
                          y={cy - 11} 
                          textAnchor="middle" 
                          fill="#cbd5e1" 
                          fontSize={10} 
                          fontWeight="700"
                          className="select-none pointer-events-none"
                        >
                          {payload.name}
                        </text>
                      </g>
                    );
                  }}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scatterData} margin={{ top: 20, right: 20, bottom: 40, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis 
                  dataKey="name" 
                  stroke="#64748b" 
                  tick={{ fill: '#94a3b8', fontSize: 10 }} 
                  interval={0} 
                  angle={-30} 
                  textAnchor="end"
                />
                <YAxis 
                  stroke="#64748b" 
                  tick={{ fill: '#94a3b8', fontSize: 11 }} 
                  domain={[0, 100]} 
                  unit="%" 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  formatter={(value, name) => [`${value}%`, name]}
                />
                <Legend wrapperStyle={{ paddingTop: 10, fontSize: 12 }} />
                <Bar 
                  dataKey="y" 
                  name="Pass Rate (%)" 
                  fill="#38bdf8" 
                  radius={[4, 4, 0, 0]} 
                  cursor="pointer"
                  onClick={(entry) => {
                    const match = filteredSubjects.find(s => s.code === entry.code);
                    if (match) setSelectedSubjectModal(match);
                  }}
                />
                <Bar 
                  dataKey="x" 
                  name="Average Score (%)" 
                  fill="#34d399" 
                  radius={[4, 4, 0, 0]} 
                  cursor="pointer"
                  onClick={(entry) => {
                    const match = filteredSubjects.find(s => s.code === entry.code);
                    if (match) setSelectedSubjectModal(match);
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Complete Subject Audit Cards Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-400" />
              <span>Subject Deep-Dive Course Performance & Attainment Cards</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Individual course evaluation showing faculty performance, Top 10 Rankers, and Remedial Backlog lists
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 self-start sm:self-auto">
            Showing <strong className="text-white">{filteredSubjects.length}</strong> Course{filteredSubjects.length === 1 ? '' : 's'}
          </span>
        </div>

        {filteredSubjects.length === 0 ? (
          <div className="p-8 text-center glass-panel rounded-2xl border border-dashed border-slate-800">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-300">No subjects match the selected filters</p>
            <p className="text-xs text-slate-500 mt-1">Try resetting the class, semester, or search filter.</p>
          </div>
        ) : (
          filteredSubjects.map((subj) => {
            const isCritical = subj.passPercentage < 80;
            const isGood = subj.passPercentage >= 92;
            const maxMarks = subj.maxMarks || (subj.code.includes('L') || subj.credits === 1 ? 50 : 100);
            const { enrolledList, top10Rankers, backlogStudents } = getSubjectStudentLists(
              subj.code,
              subj.semester,
              maxMarks
            );
            const subjIsMiniProject = isMiniProject(subj);

            return (
              <div
                key={`${subj.code}-${subj.semester}`}
                className="p-6 rounded-2xl glass-panel border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between shadow-xl"
              >
                {/* Subject Header Banner */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700">
                        {subj.class} • Semester {subj.semester}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        isCritical
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : isGood
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                      }`}>
                        {subj.passPercentage}% Pass Rate
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {subj.credits} Credits • Max: {maxMarks} Marks
                      </span>
                      {subjIsMiniProject && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                          Mini Project • 100% Evaluation
                        </span>
                      )}
                    </div>

                    <h4 className="font-extrabold text-white text-lg sm:text-xl">{subj.name}</h4>
                    <p className="text-xs text-slate-400 font-mono mt-1 flex flex-wrap items-center gap-3">
                      <span>Course Code: <strong className="text-sky-400 font-bold">{subj.code}</strong></span>
                      <span>•</span>
                      <span className="text-slate-300 flex items-center gap-1 font-sans">
                        <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                        <span>Course Coordinator: <strong>{subj.faculty}</strong></span>
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedSubjectModal(subj);
                        setModalTab('histogram');
                      }}
                      className="px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-sky-400 hover:text-sky-300 text-xs font-semibold border border-slate-800 hover:border-sky-500/40 transition-all flex items-center space-x-1.5 shadow-sm"
                    >
                      <BarChart className="w-3.5 h-3.5 text-sky-400" />
                      <span>Grade Histogram & Diagnostics</span>
                    </button>
                  </div>
                </div>

                {/* Columns Beside Each Other */}
                <div className={`grid grid-cols-1 ${subjIsMiniProject ? 'lg:grid-cols-12' : 'md:grid-cols-2 lg:grid-cols-12'} gap-5 mt-5`}>
                  {/* COLUMN 1: Subject Performance Metrics */}
                  <div className={`${subjIsMiniProject ? 'lg:col-span-5' : 'lg:col-span-4'} flex flex-col justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800/80`}>
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                          {subjIsMiniProject ? 'Project Assessment Data' : 'Course Performance Data'}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          subj.passPercentage >= 92 
                            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20' 
                            : subj.passPercentage >= 80 
                            ? 'bg-sky-500/15 text-sky-300 border border-sky-500/20' 
                            : 'bg-rose-500/15 text-rose-300 border border-rose-500/20'
                        }`}>
                          {subj.difficultyCategory}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                          <p className="text-[10px] text-slate-500 font-medium">Mean Score</p>
                          <p className="font-bold text-white font-mono text-base mt-0.5">{subj.meanMarks}</p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                            {((subj.meanMarks / maxMarks) * 100).toFixed(0)}% Avg
                          </p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                          <p className="text-[10px] text-slate-500 font-medium">High / Low</p>
                          <p className="font-bold text-amber-400 font-mono text-base mt-0.5">
                            {subj.highestMark} <span className="text-slate-500 text-xs font-normal">/</span> <span className="text-slate-300 text-xs">{subj.lowestMark}</span>
                          </p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                            Spread: {subj.highestMark - subj.lowestMark}
                          </p>
                        </div>
                        {subjIsMiniProject ? (
                          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                            <p className="text-[10px] text-slate-500 font-medium">Evaluation</p>
                            <p className="font-bold font-mono text-base mt-0.5 text-emerald-400">100%</p>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">Rubric Clear</p>
                          </div>
                        ) : (
                          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                            <p className="text-[10px] text-slate-500 font-medium">Backlogs (KT)</p>
                            <p className={`font-bold font-mono text-base mt-0.5 ${
                              subj.fails > 0 ? 'text-rose-400' : 'text-emerald-400'
                            }`}>
                              {subj.fails}
                            </p>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                              {subj.fails === 0 ? '100% Clear' : `${((subj.fails / (enrolledList.length || 1)) * 100).toFixed(1)}%`}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Grade Breakdown Visual Strip */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                          <span>Grade Frequency Matrix</span>
                          <span className="font-mono text-slate-500">{enrolledList.length} Students</span>
                        </div>
                        <div className="flex h-3 w-full rounded-full overflow-hidden bg-slate-950 border border-slate-800">
                          {Object.entries(subj.grades || {}).map(([grade, count]) => {
                            if (count === 0) return null;
                            const pct = (count / (enrolledList.length || 1)) * 100;
                            const color = 
                              grade === 'O' ? 'bg-amber-400' :
                              grade === 'A+' ? 'bg-emerald-400' :
                              grade === 'A' ? 'bg-teal-400' :
                              grade === 'B+' ? 'bg-sky-400' :
                              grade === 'B' ? 'bg-indigo-400' :
                              grade === 'C' ? 'bg-purple-400' : 'bg-rose-500';
                            return (
                              <div 
                                key={grade} 
                                style={{ width: `${pct}%` }} 
                                className={`${color} h-full transition-all`} 
                                title={`${grade}: ${count} (${pct.toFixed(1)}%)`}
                              />
                            );
                          })}
                        </div>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2 text-[10px] text-slate-400">
                          {Object.entries(subj.grades || {}).map(([grade, count]) => count > 0 && (
                            <span key={grade} className="flex items-center gap-1 font-mono">
                              <span className="font-bold text-slate-300">{grade}:</span>
                              <span className="text-white font-bold">{count}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                      <span className="text-sky-400 font-semibold">Attainment target: </span>
                      {subjIsMiniProject
                        ? 'Project rubric reviews completed. 100% course clearance (No backlogs).'
                        : subj.passPercentage >= 80 
                        ? 'Attainment criteria achieved (≥80% Pass Target met).' 
                        : 'Remedial coaching required to reach accreditation benchmark.'}
                    </div>
                  </div>

                  {/* COLUMN 2: Top 10 Rankers */}
                  <div className={`${subjIsMiniProject ? 'lg:col-span-7' : 'lg:col-span-4'} p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between`}>
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                        <div className="flex items-center space-x-1.5">
                          <Award className="w-4 h-4 text-amber-400" />
                          <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider">Top 10 Rankers</h5>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {top10Rankers.length} Toppers
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mb-2">
                        Highest scoring students in {subj.short} (Name & Marks):
                      </p>

                      {top10Rankers.length === 0 ? (
                        <div className="p-6 text-center text-xs text-slate-500 italic">No score records found</div>
                      ) : (
                        <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
                          {top10Rankers.map((r) => {
                            const rankBadge = 
                              r.rank === 1 ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black shadow-sm' :
                              r.rank === 2 ? 'bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-black' :
                              r.rank === 3 ? 'bg-gradient-to-r from-amber-700 to-orange-600 text-white font-bold' :
                              'bg-slate-800 text-slate-300 font-bold border border-slate-700';

                            return (
                              <div
                                key={r.id || r.rollNo}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (onSelectStudent) onSelectStudent(r.studentObj);
                                }}
                                className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all group"
                                title={`Click to view Student 360° Profile for ${r.name}`}
                              >
                                <div className="flex items-center space-x-2.5 min-w-0">
                                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${rankBadge}`}>
                                    {r.rank}
                                  </span>
                                  <div className="min-w-0">
                                    <p className="text-xs font-bold text-white group-hover:text-amber-300 truncate transition-colors">
                                      {r.name}
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-mono">
                                      {r.rollNo}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
                                  <span className="font-mono text-xs font-extrabold text-amber-300 px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30">
                                    {r.marks} <span className="text-[10px] text-amber-400/70 font-normal">/ {r.maxMarks}</span>
                                  </span>
                                  <span className="text-[10px] font-bold font-mono text-sky-400 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                                    {r.grade}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <p className="text-[10px] text-slate-500 pt-2 border-t border-slate-800/60 text-center italic">
                      Click any topper to open 360° profile in place
                    </p>
                  </div>

                  {/* COLUMN 3: Backlog List (Completely removed for Mini Projects) */}
                  {!subjIsMiniProject && (
                    <div className="lg:col-span-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                          <div className="flex items-center space-x-1.5">
                            <AlertTriangle className={`w-4 h-4 ${backlogStudents.length > 0 ? 'text-rose-400' : 'text-emerald-400'}`} />
                            <h5 className="text-xs font-bold text-rose-300 uppercase tracking-wider">Backlog List</h5>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            backlogStudents.length > 0 
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {backlogStudents.length} Backlog{backlogStudents.length === 1 ? '' : 's'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mb-2">
                          {backlogStudents.length > 0 
                            ? `Students failing / with KT in ${subj.short} (Name & Marks):`
                            : `Course attainment status:`}
                        </p>

                        {backlogStudents.length === 0 ? (
                          <div className="h-56 flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-950/20 border border-dashed border-emerald-500/30 text-center">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-2 shadow-lg shadow-emerald-500/10">
                              <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <p className="text-xs font-bold text-emerald-300">Zero Backlogs</p>
                            <p className="text-[11px] text-slate-300 mt-1 font-medium">
                              100% Pass Rate in this subject!
                            </p>
                            <p className="text-[10px] text-slate-500 mt-0.5">
                              All {enrolledList.length} enrolled students cleared the course.
                            </p>
                          </div>
                        ) : (
                          <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
                            {backlogStudents.map((st, idx) => (
                              <div
                                key={st.id || st.rollNo}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (onSelectStudent) onSelectStudent(st.studentObj);
                                }}
                                className="flex items-center justify-between p-2 rounded-lg bg-rose-950/20 hover:bg-rose-900/40 border border-rose-500/20 hover:border-rose-500/50 cursor-pointer transition-all group"
                                title={`Click to view Student 360° Profile for ${st.name}`}
                              >
                                <div className="flex items-center space-x-2.5 min-w-0">
                                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 flex-shrink-0">
                                    {idx + 1}
                                  </span>
                                  <div className="min-w-0">
                                    <p className="text-xs font-bold text-white group-hover:text-rose-300 truncate transition-colors">
                                      {st.name}
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-mono">
                                      {st.rollNo}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
                                  <span className="font-mono text-xs font-extrabold text-rose-400 px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/40">
                                    {st.marks} <span className="text-[10px] text-rose-400/70 font-normal">/ {st.maxMarks}</span>
                                  </span>
                                  <span className="text-[10px] font-bold text-rose-300 px-1.5 py-0.5 rounded bg-rose-900/50 border border-rose-700/50">
                                    {st.grade || 'KT'}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <p className="text-[10px] text-slate-500 pt-2 border-t border-slate-800/60 text-center italic">
                        {backlogStudents.length > 0 
                          ? `${backlogStudents.length} candidate(s) queued for remedial intervention` 
                          : `Accreditation threshold satisfied`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Subject Detailed Grade Breakdown Modal */}
      {selectedSubjectModal && (() => {
        const modalMaxMarks = selectedSubjectModal.maxMarks || (selectedSubjectModal.code.includes('L') || selectedSubjectModal.credits === 1 ? 50 : 100);
        const { enrolledList, top10Rankers, backlogStudents } = getSubjectStudentLists(
          selectedSubjectModal.code, 
          selectedSubjectModal.semester, 
          modalMaxMarks
        );
        const modalIsMiniProject = isMiniProject(selectedSubjectModal);

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-4xl rounded-2xl glass-panel p-6 sm:p-8 border border-slate-700 shadow-2xl my-8 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
              <button
                onClick={() => setSelectedSubjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-sky-400 text-xs font-semibold mb-1">
                <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  {selectedSubjectModal.class} • SEMESTER {selectedSubjectModal.semester}
                </span>
                <span className="text-slate-400">•</span>
                <span className="font-mono text-slate-300">{selectedSubjectModal.code}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">{selectedSubjectModal.name}</h3>
              <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-sky-400" />
                <span>Course Coordinator: <strong>{selectedSubjectModal.faculty}</strong></span>
              </p>

              {/* Modal Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400">Pass Rate</p>
                  <p className="text-xl font-black text-emerald-400">{selectedSubjectModal.passPercentage}%</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400">Average Score</p>
                  <p className="text-xl font-black text-white font-mono">{selectedSubjectModal.meanMarks}/{modalMaxMarks}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400">Highest Mark</p>
                  <p className="text-xl font-black text-amber-400 font-mono">{selectedSubjectModal.highestMark}/{modalMaxMarks}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400">
                    {modalIsMiniProject ? 'Project Status' : 'Backlogs (KT)'}
                  </p>
                  <p className={`text-xl font-black font-mono ${
                    modalIsMiniProject 
                      ? 'text-emerald-400' 
                      : selectedSubjectModal.fails > 0 ? 'text-rose-400' : 'text-emerald-400'
                  }`}>
                    {modalIsMiniProject ? '100% Cleared' : selectedSubjectModal.fails}
                  </p>
                </div>
              </div>

              {/* Modal Tabs */}
              <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-4">
                <button
                  onClick={() => setModalTab('histogram')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    modalTab === 'histogram'
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-white bg-slate-900'
                  }`}
                >
                  Grade Histogram
                </button>
                <button
                  onClick={() => setModalTab('rankers')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                    modalTab === 'rankers'
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-white bg-slate-900'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Top 10 Rankers ({top10Rankers.length})</span>
                </button>
                {!modalIsMiniProject && (
                  <button
                    onClick={() => setModalTab('backlogs')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      modalTab === 'backlogs'
                        ? 'bg-rose-500 text-white shadow-md'
                        : 'text-slate-400 hover:text-white bg-slate-900'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Backlog List ({backlogStudents.length})</span>
                  </button>
                )}
              </div>

              {/* Modal Tab Content */}
              {modalTab === 'histogram' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <p className="text-xs font-bold text-slate-300 mb-2">Grade Frequency Distribution</p>
                    <div className="h-52 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                          data={Object.entries(selectedSubjectModal.grades || {}).map(([grade, count]) => ({ grade, count }))}
                          margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                          <XAxis dataKey="grade" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                          <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
                          <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }} />
                          <Bar dataKey="count" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Recommended Action */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                    <p className="font-bold text-sky-400">Academic Audit Action Item:</p>
                    <p className="text-slate-300 mt-1">
                      {selectedSubjectModal.passPercentage < 80
                        ? `Course coordinator (${selectedSubjectModal.faculty}) to conduct 12 hours of remedial problem-solving sessions and provide solved question banks.`
                        : `Course meets accreditation target benchmarks (>80% attainment). Maintain current laboratory assignments.`}
                    </p>
                  </div>
                </div>
              )}

              {modalTab === 'rankers' && (
                <div className="space-y-2">
                  <p className="text-xs text-slate-400 mb-2">Highest scoring candidates in this subject:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {top10Rankers.map((r) => (
                      <div
                        key={r.id || r.rollNo}
                        onClick={() => {
                          if (onSelectStudent) onSelectStudent(r.studentObj);
                        }}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all"
                      >
                        <div className="flex items-center space-x-2.5 min-w-0">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            r.rank === 1 ? 'bg-amber-500 text-slate-950' :
                            r.rank === 2 ? 'bg-slate-300 text-slate-950' :
                            r.rank === 3 ? 'bg-amber-700 text-white' :
                            'bg-slate-800 text-slate-400'
                          }`}>
                            {r.rank}
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-white truncate">{r.name}</p>
                            <p className="text-[10px] text-slate-400 font-mono">{r.rollNo}</p>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                          {r.marks} / {r.maxMarks}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!modalIsMiniProject && modalTab === 'backlogs' && (
                <div className="space-y-2">
                  <p className="text-xs text-slate-400 mb-2">Students needing remedial instruction and KT re-examination:</p>
                  {backlogStudents.length === 0 ? (
                    <div className="p-8 text-center rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <p className="text-sm font-bold text-emerald-300">Zero Backlogs in this Course</p>
                      <p className="text-xs text-slate-400 mt-1">100% of students passed successfully.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {backlogStudents.map((st, idx) => (
                        <div
                          key={st.id || st.rollNo}
                          onClick={() => {
                            if (onSelectStudent) onSelectStudent(st.studentObj);
                          }}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-rose-950/20 hover:bg-rose-900/30 border border-rose-500/20 hover:border-rose-500/50 cursor-pointer transition-all"
                        >
                          <div className="flex items-center space-x-2.5 min-w-0">
                            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                              {idx + 1}
                            </span>
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-white truncate">{st.name}</p>
                              <p className="text-[10px] text-slate-400 font-mono">{st.rollNo}</p>
                            </div>
                          </div>
                          <span className="font-mono text-xs font-bold text-rose-400 px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/40">
                            {st.marks} / {st.maxMarks}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
