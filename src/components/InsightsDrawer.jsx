import React, { useState } from 'react';
import { 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Flame, 
  ArrowRight, 
  Lightbulb,
  FileCheck2
} from 'lucide-react';
import { generateAuditInsights } from '../utils/statistics';

export default function InsightsDrawer({ students, onNavigateTab }) {
  const [filterType, setFilterType] = useState('ALL'); // 'ALL', 'danger', 'warning', 'positive'
  const insights = generateAuditInsights(students);

  const filteredInsights = insights.filter(i => {
    if (filterType === 'ALL') return true;
    return i.type === filterType;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-extrabold text-white">Automated Audit Insights & Action Plan</h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Diagnostic findings and faculty action items generated for HOD, Academic Council, and NBA/NAAC compliance
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setFilterType('ALL')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              filterType === 'ALL' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Findings ({insights.length})
          </button>
          <button
            onClick={() => setFilterType('danger')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              filterType === 'danger' ? 'bg-rose-500 text-white' : 'text-rose-400 hover:text-rose-300'
            }`}
          >
            Critical Remedials
          </button>
          <button
            onClick={() => setFilterType('warning')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              filterType === 'warning' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-amber-400 hover:text-amber-300'
            }`}
          >
            Progression Gaps
          </button>
          <button
            onClick={() => setFilterType('positive')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              filterType === 'positive' ? 'bg-emerald-500 text-white' : 'text-emerald-400 hover:text-emerald-300'
            }`}
          >
            Excellence
          </button>
        </div>
      </div>

      {/* Insights Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredInsights.map((item) => {
          const isDanger = item.type === 'danger';
          const isWarning = item.type === 'warning';
          const isPositive = item.type === 'positive';

          return (
            <div
              key={item.id}
              className={`p-6 rounded-2xl glass-panel relative overflow-hidden border-l-4 ${
                isDanger
                  ? 'border-l-rose-500 bg-rose-950/10'
                  : isWarning
                  ? 'border-l-amber-500 bg-amber-950/10'
                  : 'border-l-emerald-500 bg-emerald-950/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  isDanger
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : isWarning
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {item.category}
                </span>

                <div className="flex items-center space-x-1">
                  {isDanger && <Flame className="w-4 h-4 text-rose-400" />}
                  {isWarning && <AlertTriangle className="w-4 h-4 text-amber-400" />}
                  {isPositive && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mt-3">{item.title}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.description}</p>

              {/* Action Plan Recommendation Box */}
              <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs">
                <div className="flex items-center space-x-1.5 text-sky-400 font-bold mb-1">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Mandated Remedial Action:</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-sans">{item.action}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* NBA / NAAC Department Accreditation Summary Card */}
      <div className="p-6 rounded-2xl glass-card-accent border border-sky-500/20">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Quality Assurance & Audit Compliance</h3>
            <p className="text-xs text-slate-300">Continuous Internal Evaluation (CIE) & Semester End Attainment summary</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          The Academic Audit platform computes Course Outcome (CO) attainment across all engineering courses in SE, TE, and BE. Identified low-performing cohorts are automatically tracked for remedial extra classes, tutorial tests, and faculty peer reviews as required under <strong>Criterion 3 & 4 of NBA Accreditation</strong>.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigateTab('subject-analysis')}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-sky-300 flex items-center gap-1.5 transition-all"
          >
            Review Subject Performance <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onNavigateTab('class-comparison')}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
          >
            View SE/TE/BE Cohort Breakdown <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
