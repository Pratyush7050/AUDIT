import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  TrendingUp, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  User, 
  BarChart2,
  Calendar
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid 
} from 'recharts';
import { computeSemesterAudit } from '../utils/statistics';

export default function SemesterAnalysis({ 
  students, 
  onSelectSubject,
  batches = [],
  selectedBatch = '2024-2028',
  setSelectedBatch
}) {
  const [activeSem, setActiveSem] = useState(4); // Default to Sem 4 (SE)

  const semesters = [
    { num: 3, label: 'Sem 3 (SE)', class: 'SE' },
    { num: 4, label: 'Sem 4 (SE)', class: 'SE' },
    { num: 5, label: 'Sem 5 (TE)', class: 'TE' },
    { num: 6, label: 'Sem 6 (TE)', class: 'TE' },
    { num: 7, label: 'Sem 7 (BE)', class: 'BE' },
    { num: 8, label: 'Sem 8 (BE)', class: 'BE' }
  ];

  const batchStudents = selectedBatch === 'ALL'
    ? students
    : students.filter(s => s.batch === selectedBatch || (!s.batch && selectedBatch === '2024-2028'));

  const semAudit = computeSemesterAudit(batchStudents, activeSem);

  if (!semAudit) {
    return (
      <div className="space-y-6 pb-12">
        {/* Semester Selection Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-sky-400" />
              <h2 className="text-2xl font-extrabold text-white">Semester-Wise Performance Audit</h2>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Term-by-term assessment, SGPA distribution curves, and subject clearance rates
            </p>
          </div>

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

            {/* Semester Buttons */}
            <div className="flex items-center bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 overflow-x-auto">
              {semesters.map((sem) => (
                <button
                  key={sem.num}
                  onClick={() => setActiveSem(sem.num)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeSem === sem.num
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {sem.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-panel p-12 text-center rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm">
            No examination results recorded yet for <strong>Semester {activeSem}</strong> in <strong>{selectedBatch === 'ALL' ? 'All Batches' : selectedBatch}</strong>.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            You can upload the gazette result sheet via the "Upload Result" button.
          </p>
        </div>
      </div>
    );
  }

  // Generate SGPA distribution bins (3.0-4.9, 5.0-5.9, 6.0-6.9, 7.0-7.9, 8.0-8.9, 9.0-10.0)
  const relevantStudents = batchStudents.filter(s => s.semesterResults && s.semesterResults[activeSem]);
  const sgpaBins = [
    { range: '< 5.0 (Fail/KT)', count: 0, fill: '#f87171' },
    { range: '5.0 - 5.9', count: 0, fill: '#fb923c' },
    { range: '6.0 - 6.9', count: 0, fill: '#facc15' },
    { range: '7.0 - 7.9', count: 0, fill: '#818cf8' },
    { range: '8.0 - 8.9', count: 0, fill: '#38bdf8' },
    { range: '9.0 - 10.0', count: 0, fill: '#34d399' }
  ];

  relevantStudents.forEach(s => {
    const sgpa = s.semesterResults[activeSem].sgpa;
    if (sgpa < 5.0 || s.semesterResults[activeSem].backlogs > 0) sgpaBins[0].count++;
    else if (sgpa < 6.0) sgpaBins[1].count++;
    else if (sgpa < 7.0) sgpaBins[2].count++;
    else if (sgpa < 8.0) sgpaBins[3].count++;
    else if (sgpa < 9.0) sgpaBins[4].count++;
    else sgpaBins[5].count++;
  });

  // Subject performance bar chart data
  const subjectChartData = semAudit.subjectStats.map(s => ({
    name: s.short,
    fullName: s.name,
    meanMarks: s.meanMarks,
    passPercentage: s.passPercentage,
    fails: s.fails,
    faculty: s.faculty
  }));

  return (
    <div className="space-y-6 pb-12">
      {/* Semester Selection Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-sky-400" />
            <h2 className="text-2xl font-extrabold text-white">Semester-Wise Performance Audit</h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Term-by-term assessment, SGPA distribution curves, and subject clearance rates
          </p>
        </div>

        {/* Semester Buttons */}
        <div className="flex items-center bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 overflow-x-auto">
          {semesters.map((sem) => (
            <button
              key={sem.num}
              onClick={() => setActiveSem(sem.num)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeSem === sem.num
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {sem.label}
            </button>
          ))}
        </div>
      </div>

      {/* Semester KPI Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="glass-panel p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 uppercase font-medium">Students Assessed</span>
          <p className="text-2xl font-bold text-white mt-1 font-sans">{semAudit.totalStudents}</p>
          <span className="text-[10px] text-sky-400">Semester {activeSem} Enrolled</span>
        </div>

        <div className="glass-panel p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 uppercase font-medium">Pass Percentage</span>
          <p className="text-2xl font-bold text-emerald-400 mt-1 font-sans">{semAudit.passPercentage}%</p>
          <span className="text-[10px] text-slate-400">{semAudit.passCount} cleared / {semAudit.failCount} ATKT</span>
        </div>

        <div className="glass-panel p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 uppercase font-medium">Mean Term SGPA</span>
          <p className="text-2xl font-bold text-sky-300 mt-1 font-sans">{semAudit.meanSGPA}</p>
          <span className="text-[10px] text-slate-400">Std Dev: ±{semAudit.stdDevSGPA}</span>
        </div>

        <div className="glass-panel p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 uppercase font-medium">Highest / Lowest SGPA</span>
          <p className="text-2xl font-bold text-amber-400 mt-1 font-sans font-mono">{semAudit.highestSGPA} / {semAudit.lowestSGPA}</p>
          <span className="text-[10px] text-slate-400">Range: {(semAudit.highestSGPA - semAudit.lowestSGPA).toFixed(2)}</span>
        </div>

        <div className="glass-panel p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 uppercase font-medium">Total Term Backlogs</span>
          <p className="text-2xl font-bold text-rose-400 mt-1 font-sans">{semAudit.failCount}</p>
          <span className="text-[10px] text-rose-300">Requires re-examination</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SGPA Distribution Histogram */}
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Semester {activeSem} SGPA Bell Distribution</h3>
              <p className="text-xs text-slate-400">Frequency of students across SGPA performance brackets</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sgpaBins} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis dataKey="range" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  formatter={(value) => [`${value} Students`, 'Count']}
                />
                <Bar dataKey="count" name="Students" radius={[4, 4, 0, 0]}>
                  {sgpaBins.map((entry, index) => (
                    <Bar key={`bar-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject-Wise Pass % & Mean Marks in Semester */}
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Subject Pass Rate vs Average Marks</h3>
              <p className="text-xs text-slate-400">Comparison of subjects taught in Semester {activeSem}</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  formatter={(val, name) => [name === 'Pass %' ? `${val}%` : `${val}/100`, name]}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="passPercentage" name="Pass %" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="meanMarks" name="Mean Score" fill="#34d399" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Semester Subject Audit Breakdown Table */}
      <div className="glass-panel p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">Semester {activeSem} Course-Level Audit Sheet</h3>
            <p className="text-xs text-slate-400">Statistical parameters per subject with faculty coordinator attribution</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 text-slate-300 uppercase tracking-wider text-[11px] border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Subject Code & Name</th>
                <th className="py-3 px-4">Course Coordinator</th>
                <th className="py-3 px-4">Credits</th>
                <th className="py-3 px-4">Average Marks</th>
                <th className="py-3 px-4">Highest / Lowest</th>
                <th className="py-3 px-4">Std Dev</th>
                <th className="py-3 px-4">Pass Rate</th>
                <th className="py-3 px-4">Fail / Backlogs</th>
                <th className="py-3 px-4">Audit Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {semAudit.subjectStats.map((subj) => {
                const isCritical = subj.passPercentage < 80;
                const isGood = subj.passPercentage >= 92;

                return (
                  <tr 
                    key={subj.code} 
                    onClick={() => onSelectSubject && onSelectSubject(subj.code)}
                    className={`hover:bg-slate-900/40 transition-colors ${onSelectSubject ? 'cursor-pointer' : ''}`}
                  >
                    <td className="py-3 px-4">
                      <div className="font-bold text-white">{subj.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{subj.code} ({subj.short})</div>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{subj.faculty}</td>
                    <td className="py-3 px-4">{subj.credits}</td>
                    <td className="py-3 px-4 font-mono font-semibold text-white">{subj.meanMarks}/100</td>
                    <td className="py-3 px-4 font-mono text-slate-300">{subj.highestMark} / {subj.lowestMark}</td>
                    <td className="py-3 px-4 font-mono text-slate-400">±{subj.stdDev}</td>
                    <td className="py-3 px-4 font-bold font-mono">
                      <span className={isCritical ? 'text-rose-400' : isGood ? 'text-emerald-400' : 'text-sky-300'}>
                        {subj.passPercentage}%
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-rose-400">{subj.fails}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isCritical
                          ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                          : isGood
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                      }`}>
                        {subj.difficultyCategory}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
