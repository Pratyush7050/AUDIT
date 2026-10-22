import React, { useState } from 'react';
import { 
  Layers, 
  Award 
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';
import { computeClassComparison } from '../utils/statistics';

export default function ClassComparison({ 
  students, 
  onSelectStudent,
  batches = [],
  selectedBatch = '2024-2028',
  setSelectedBatch
}) {
  const [radarMode, setRadarMode] = useState('numbers'); // 'numbers' | 'percentage'

  const batchStudents = selectedBatch === 'ALL'
    ? students
    : students.filter(s => s.batch === selectedBatch || (!s.batch && selectedBatch === '2024-2028'));

  const comparison = computeClassComparison(batchStudents);

  // Grouped Grade breakdown across SE, TE, BE
  const gradeDistributionData = [
    {
      category: 'Distinction (≥7.5)',
      SE: comparison[0].distinctionCount,
      TE: comparison[1].distinctionCount,
      BE: comparison[2].distinctionCount
    },
    {
      category: 'First Class (6.5-7.4)',
      SE: comparison[0].firstClassCount,
      TE: comparison[1].firstClassCount,
      BE: comparison[2].firstClassCount
    },
    {
      category: 'Second Class (5.0-6.4)',
      SE: comparison[0].secondClassCount,
      TE: comparison[1].secondClassCount,
      BE: comparison[2].secondClassCount
    },
    {
      category: 'Backlog / ATKT',
      SE: comparison[0].backlogStudentsCount,
      TE: comparison[1].backlogStudentsCount,
      BE: comparison[2].backlogStudentsCount
    }
  ];

  // Radar comparative data for NBA/NAAC outcome indicators (Numbers vs Percentage)
  const outcomeRadarData = radarMode === 'numbers' ? [
    { 
      metric: 'Passed Students', 
      SE: comparison[0].passCount, 
      TE: comparison[1].passCount, 
      BE: comparison[2].passCount 
    },
    { 
      metric: 'Distinctions', 
      SE: comparison[0].distinctionCount, 
      TE: comparison[1].distinctionCount, 
      BE: comparison[2].distinctionCount 
    },
    { 
      metric: 'First Class', 
      SE: comparison[0].firstClassCount, 
      TE: comparison[1].firstClassCount, 
      BE: comparison[2].firstClassCount 
    },
    { 
      metric: 'Zero Backlogs', 
      SE: comparison[0].passCount, 
      TE: comparison[1].passCount, 
      BE: comparison[2].passCount 
    },
    { 
      metric: 'Female Passed', 
      SE: comparison[0].genderStats?.femalePassedCount ?? Math.round(((comparison[0].genderStats?.femalePassRate || 0) / 100) * (comparison[0].genderStats?.femaleCount || 0)), 
      TE: comparison[1].genderStats?.femalePassedCount ?? Math.round(((comparison[1].genderStats?.femalePassRate || 0) / 100) * (comparison[1].genderStats?.femaleCount || 0)), 
      BE: comparison[2].genderStats?.femalePassedCount ?? Math.round(((comparison[2].genderStats?.femalePassRate || 0) / 100) * (comparison[2].genderStats?.femaleCount || 0)) 
    }
  ] : [
    { metric: 'Pass %', SE: comparison[0].passPercentage, TE: comparison[1].passPercentage, BE: comparison[2].passPercentage },
    { metric: 'Distinction %', SE: comparison[0].distinctionPercentage, TE: comparison[1].distinctionPercentage, BE: comparison[2].distinctionPercentage },
    { metric: 'Avg CGPA (x10)', SE: comparison[0].meanCGPA * 10, TE: comparison[1].meanCGPA * 10, BE: comparison[2].meanCGPA * 10 },
    { metric: 'Retention / Zero Backlogs', SE: 100 - comparison[0].backlogPercentage, TE: 100 - comparison[1].backlogPercentage, BE: 100 - comparison[2].backlogPercentage },
    { metric: 'Female Pass %', SE: comparison[0].genderStats?.femalePassRate || 0, TE: comparison[1].genderStats?.femalePassRate || 0, BE: comparison[2].genderStats?.femalePassRate || 0 }
  ];

  const allRadarValues = outcomeRadarData.flatMap(d => [d.SE || 0, d.TE || 0, d.BE || 0]);
  const maxRadarValue = Math.max(...allRadarValues, 10);
  const roundedMax = Math.ceil(maxRadarValue / 10) * 10;

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Layers className="w-6 h-6 text-sky-400" />
            <h2 className="text-2xl font-extrabold text-white">Class-wise Academic Audit</h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Comparative analysis of SE (2nd Year), TE (3rd Year), and BE (Final Year) stages
          </p>
        </div>

        {/* Batch Filter */}
        {batches.length > 0 && setSelectedBatch && (
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Cohort:</span>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-semibold focus:outline-none focus:border-sky-500"
            >
              <option value="ALL">All Batches Combined</option>
              {batches.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* 3-Column Class Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {comparison.map((cSummary) => {
          const isSE = cSummary.class === 'SE';
          const isTE = cSummary.class === 'TE';

          return (
            <div 
              key={cSummary.class}
              className={`p-6 rounded-2xl glass-panel relative overflow-hidden border-t-4 ${
                isSE ? 'border-t-sky-400' : isTE ? 'border-t-indigo-400' : 'border-t-emerald-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {isSE ? 'Second Year' : isTE ? 'Third Year' : 'Final Year'}
                  </span>
                  <h3 className="text-2xl font-black text-white">{cSummary.class} Cohort</h3>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                  isSE ? 'bg-sky-500/15 text-sky-400' : isTE ? 'bg-indigo-500/15 text-indigo-400' : 'bg-emerald-500/15 text-emerald-400'
                }`}>
                  {cSummary.class}
                </div>
              </div>

              {/* Core Class Metrics */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="text-[11px] text-slate-400">Pass Rate</p>
                  <p className={`text-xl font-bold ${
                    isSE ? 'text-sky-400' : isTE ? 'text-indigo-400' : 'text-emerald-400'
                  }`}>
                    {cSummary.passPercentage}%
                  </p>
                  <p className="text-[10px] text-slate-500">{cSummary.passCount} / {cSummary.totalCount} passed</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="text-[11px] text-slate-400">Mean CGPA</p>
                  <p className="text-xl font-bold text-white">{cSummary.meanCGPA}</p>
                  <p className="text-[10px] text-slate-500">Std Dev: ±{cSummary.stdDevCGPA}</p>
                </div>
              </div>

              {/* Detailed Breakdown stats */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Distinctions (≥7.5):</span>
                  <span className="font-semibold text-amber-400">{cSummary.distinctionCount} ({cSummary.distinctionPercentage}%)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">First Class (6.5-7.4):</span>
                  <span className="font-semibold text-slate-200">{cSummary.firstClassCount}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Backlogs / ATKT:</span>
                  <span className="font-semibold text-rose-400">{cSummary.backlogStudentsCount} ({cSummary.backlogPercentage}%)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Highest / Lowest:</span>
                  <span className="font-semibold text-slate-300 font-mono">{cSummary.highestCGPA} / {cSummary.lowestCGPA}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Gender Pass %:</span>
                  <span className="font-semibold text-slate-300">M: {cSummary.genderStats.malePassRate}% | F: {cSummary.genderStats.femalePassRate}%</span>
                </div>
              </div>

              {/* Class Topper Preview */}
              {cSummary.topRankers[0] && (
                <div 
                  onClick={() => onSelectStudent(cSummary.topRankers[0])}
                  className="mt-4 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <div>
                      <p className="text-[10px] text-slate-500">Class Topper</p>
                      <p className="text-xs font-bold text-white">{cSummary.topRankers[0].name}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">{cSummary.topRankers[0].cgpa} CGPA</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Comparative Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grade Distribution Bar Chart */}
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Grade Category Distribution</h3>
              <p className="text-xs text-slate-400">SE vs TE vs BE student count across performance tiers</p>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gradeDistributionData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis dataKey="category" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }} />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: '6px' }} />
                <Bar dataKey="SE" name="Second Year (SE)" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="TE" name="Third Year (TE)" fill="#818cf8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="BE" name="Final Year (BE)" fill="#34d399" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Academic Outcome Radar Chart */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Department Outcome Radar</h3>
                <p className="text-xs text-slate-400">
                  {radarMode === 'numbers'
                    ? 'NBA/NAAC Quality Criteria comparison (Student Counts)'
                    : 'NBA/NAAC Quality Criteria comparison (% Scale)'}
                </p>
              </div>

              {/* View Mode Toggle: Numbers vs Percentage */}
              <div className="inline-flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl self-start sm:self-auto shadow-inner">
                <button
                  type="button"
                  onClick={() => setRadarMode('numbers')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    radarMode === 'numbers'
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Numbers (Count)
                </button>
                <button
                  type="button"
                  onClick={() => setRadarMode('percentage')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    radarMode === 'percentage'
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Percentage (%)
                </button>
              </div>
            </div>

            <div className="h-72 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={outcomeRadarData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="metric" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                  <PolarRadiusAxis 
                    stroke="#64748b" 
                    domain={radarMode === 'numbers' ? [0, roundedMax] : [0, 100]} 
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <Radar name="SE" dataKey="SE" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.25} />
                  <Radar name="TE" dataKey="TE" stroke="#818cf8" fill="#818cf8" fillOpacity={0.25} />
                  <Radar name="BE" dataKey="BE" stroke="#34d399" fill="#34d399" fillOpacity={0.25} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(val, name) => [
                      radarMode === 'numbers' ? `${val} Students` : `${val}%`,
                      name === 'SE' ? 'Second Year (SE)' : name === 'TE' ? 'Third Year (TE)' : 'Final Year (BE)'
                    ]}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }} 
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Metrics Breakdown Bar */}
          <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-800/80 text-center text-xs">
            <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-sky-400 font-bold block text-[11px]">SE (2nd Year)</span>
              <span className="text-white font-mono font-bold text-sm">
                {radarMode === 'numbers' ? `${comparison[0].passCount} Passed` : `${comparison[0].passPercentage}% Pass`}
              </span>
              <span className="text-slate-400 text-[10px] block mt-0.5">
                {comparison[0].distinctionCount} Dist • {comparison[0].firstClassCount} 1st Cls
              </span>
            </div>
            <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-indigo-400 font-bold block text-[11px]">TE (3rd Year)</span>
              <span className="text-white font-mono font-bold text-sm">
                {radarMode === 'numbers' ? `${comparison[1].passCount} Passed` : `${comparison[1].passPercentage}% Pass`}
              </span>
              <span className="text-slate-400 text-[10px] block mt-0.5">
                {comparison[1].distinctionCount} Dist • {comparison[1].firstClassCount} 1st Cls
              </span>
            </div>
            <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-emerald-400 font-bold block text-[11px]">BE (Final Year)</span>
              <span className="text-white font-mono font-bold text-sm">
                {radarMode === 'numbers' ? `${comparison[2].passCount} Passed` : `${comparison[2].passPercentage}% Pass`}
              </span>
              <span className="text-slate-400 text-[10px] block mt-0.5">
                {comparison[2].distinctionCount} Dist • {comparison[2].firstClassCount} 1st Cls
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Statistical Audit Table */}
      <div className="glass-panel p-6 rounded-2xl overflow-hidden">
        <h3 className="text-lg font-bold text-white mb-3">Academic Audit Comparative Matrix (NBA/NAAC Format)</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 text-slate-300 uppercase tracking-wider text-[11px] border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Audit Parameter</th>
                <th className="py-3 px-4 text-sky-400">SE (Second Year)</th>
                <th className="py-3 px-4 text-indigo-400">TE (Third Year)</th>
                <th className="py-3 px-4 text-emerald-400">BE (Final Year)</th>
                <th className="py-3 px-4 text-slate-200">Department Aggregate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-semibold text-white">Total Enrolled Strength</td>
                <td className="py-3 px-4">{comparison[0].totalCount}</td>
                <td className="py-3 px-4">{comparison[1].totalCount}</td>
                <td className="py-3 px-4">{comparison[2].totalCount}</td>
                <td className="py-3 px-4 font-bold text-white">{comparison[0].totalCount + comparison[1].totalCount + comparison[2].totalCount}</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-semibold text-white">All Clear / Passed Students</td>
                <td className="py-3 px-4">{comparison[0].passCount}</td>
                <td className="py-3 px-4">{comparison[1].passCount}</td>
                <td className="py-3 px-4">{comparison[2].passCount}</td>
                <td className="py-3 px-4 font-bold text-emerald-400">{comparison[0].passCount + comparison[1].passCount + comparison[2].passCount}</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-semibold text-white">Clearance / Pass Percentage</td>
                <td className="py-3 px-4 font-bold text-sky-400">{comparison[0].passPercentage}%</td>
                <td className="py-3 px-4 font-bold text-indigo-400">{comparison[1].passPercentage}%</td>
                <td className="py-3 px-4 font-bold text-emerald-400">{comparison[2].passPercentage}%</td>
                <td className="py-3 px-4 font-bold text-white">
                  {(((comparison[0].passCount + comparison[1].passCount + comparison[2].passCount) / students.length) * 100).toFixed(1)}%
                </td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-semibold text-white">Distinction (≥7.5 CGPA)</td>
                <td className="py-3 px-4">{comparison[0].distinctionCount} ({comparison[0].distinctionPercentage}%)</td>
                <td className="py-3 px-4">{comparison[1].distinctionCount} ({comparison[1].distinctionPercentage}%)</td>
                <td className="py-3 px-4">{comparison[2].distinctionCount} ({comparison[2].distinctionPercentage}%)</td>
                <td className="py-3 px-4 font-semibold text-amber-400">
                  {comparison[0].distinctionCount + comparison[1].distinctionCount + comparison[2].distinctionCount}
                </td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-semibold text-white">Mean CGPA (Average)</td>
                <td className="py-3 px-4 font-mono font-bold text-sky-300">{comparison[0].meanCGPA}</td>
                <td className="py-3 px-4 font-mono font-bold text-indigo-300">{comparison[1].meanCGPA}</td>
                <td className="py-3 px-4 font-mono font-bold text-emerald-300">{comparison[2].meanCGPA}</td>
                <td className="py-3 px-4 font-mono font-bold text-white">
                  {(students.reduce((a, s) => a + s.cgpa, 0) / students.length).toFixed(2)}
                </td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-semibold text-white">Median CGPA</td>
                <td className="py-3 px-4 font-mono">{comparison[0].medianCGPA}</td>
                <td className="py-3 px-4 font-mono">{comparison[1].medianCGPA}</td>
                <td className="py-3 px-4 font-mono">{comparison[2].medianCGPA}</td>
                <td className="py-3 px-4 font-mono text-slate-300">-</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-semibold text-white">Standard Deviation (σ)</td>
                <td className="py-3 px-4 font-mono">±{comparison[0].stdDevCGPA}</td>
                <td className="py-3 px-4 font-mono">±{comparison[1].stdDevCGPA}</td>
                <td className="py-3 px-4 font-mono">±{comparison[2].stdDevCGPA}</td>
                <td className="py-3 px-4 font-mono text-slate-300">-</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-semibold text-white">Backlog / Remedial Students</td>
                <td className="py-3 px-4 font-bold text-rose-400">{comparison[0].backlogStudentsCount}</td>
                <td className="py-3 px-4 font-bold text-rose-400">{comparison[1].backlogStudentsCount}</td>
                <td className="py-3 px-4 font-bold text-rose-400">{comparison[2].backlogStudentsCount}</td>
                <td className="py-3 px-4 font-bold text-rose-400">
                  {comparison[0].backlogStudentsCount + comparison[1].backlogStudentsCount + comparison[2].backlogStudentsCount}
                </td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-semibold text-white">Highest / Lowest Score</td>
                <td className="py-3 px-4 font-mono">{comparison[0].highestCGPA} / {comparison[0].lowestCGPA}</td>
                <td className="py-3 px-4 font-mono">{comparison[1].highestCGPA} / {comparison[1].lowestCGPA}</td>
                <td className="py-3 px-4 font-mono">{comparison[2].highestCGPA} / {comparison[2].lowestCGPA}</td>
                <td className="py-3 px-4 font-mono text-slate-300">
                  {Math.max(...students.map(s => s.cgpa))} / {Math.min(...students.map(s => s.cgpa))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
