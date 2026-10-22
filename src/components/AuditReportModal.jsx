import React, { useRef } from 'react';
import { 
  X, 
  Printer, 
  FileText 
} from 'lucide-react';
import { computeClassAuditSummary, computeClassComparison, generateAuditInsights } from '../utils/statistics';
import { DEPARTMENT_INFO } from '../data/mockData';

export default function AuditReportModal({ students, onClose }) {
  const reportRef = useRef(null);
  const overall = computeClassAuditSummary(students, 'ALL');
  const comparison = computeClassComparison(students);
  const insights = generateAuditInsights(students);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl glass-panel p-6 sm:p-10 border border-slate-700 shadow-2xl my-8 max-h-[92vh] overflow-y-auto">
        {/* Action Buttons Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 no-print">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-sky-400" />
            <span className="font-bold text-white text-base">Formal Academic Audit Sheet (Preview)</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Report Document */}
        <div ref={reportRef} className="space-y-6 text-slate-200">
          {/* Institutional Letterhead */}
          <div className="text-center border-b-2 border-slate-700 pb-6">
            <p className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-1">
              Internal Quality Assurance Cell (IQAC)
            </p>
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              {DEPARTMENT_INFO.institution}
            </h1>
            <h2 className="text-lg font-bold text-sky-300 mt-1">
              {DEPARTMENT_INFO.name}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Academic Audit & Continuous Quality Improvement (CQI) Evaluation Report
            </p>
          </div>

          {/* Audit Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-900/90 p-4 rounded-xl border border-slate-800">
            <div>
              <span className="text-slate-500 block">Academic Year:</span>
              <strong className="text-white">{DEPARTMENT_INFO.academicYear}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Audit Date:</span>
              <strong className="text-white">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Head of Department:</span>
              <strong className="text-white">{DEPARTMENT_INFO.hodName}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Audited Cohorts:</span>
              <strong className="text-white">SE, TE, & BE Students ({overall.totalCount})</strong>
            </div>
          </div>

          {/* 1. Executive Summary Table */}
          <div>
            <h3 className="text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">
              1. Department Academic Performance Summary
            </h3>
            <table className="w-full text-left text-xs border border-slate-700">
              <thead className="bg-slate-800 text-slate-300 uppercase text-[10px]">
                <tr>
                  <th className="py-2.5 px-3 border border-slate-700">Class</th>
                  <th className="py-2.5 px-3 border border-slate-700">Total Enrolled</th>
                  <th className="py-2.5 px-3 border border-slate-700">All Clear</th>
                  <th className="py-2.5 px-3 border border-slate-700">Pass Rate (%)</th>
                  <th className="py-2.5 px-3 border border-slate-700">Distinction (≥7.5)</th>
                  <th className="py-2.5 px-3 border border-slate-700">Backlogs (KT)</th>
                  <th className="py-2.5 px-3 border border-slate-700">Mean CGPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700 font-sans">
                {comparison.map(c => (
                  <tr key={c.class}>
                    <td className="py-2.5 px-3 border border-slate-700 font-bold text-white">{c.class} (Year {c.class === 'SE' ? '2' : c.class === 'TE' ? '3' : '4'})</td>
                    <td className="py-2.5 px-3 border border-slate-700">{c.totalCount}</td>
                    <td className="py-2.5 px-3 border border-slate-700 font-semibold text-emerald-400">{c.passCount}</td>
                    <td className="py-2.5 px-3 border border-slate-700 font-bold">{c.passPercentage}%</td>
                    <td className="py-2.5 px-3 border border-slate-700">{c.distinctionCount} ({c.distinctionPercentage}%)</td>
                    <td className="py-2.5 px-3 border border-slate-700 font-semibold text-rose-400">{c.backlogStudentsCount}</td>
                    <td className="py-2.5 px-3 border border-slate-700 font-mono font-bold text-sky-300">{c.meanCGPA}</td>
                  </tr>
                ))}
                <tr className="bg-slate-900 font-bold">
                  <td className="py-2.5 px-3 border border-slate-700 text-white">Department Total</td>
                  <td className="py-2.5 px-3 border border-slate-700 text-white">{overall.totalCount}</td>
                  <td className="py-2.5 px-3 border border-slate-700 text-emerald-400">{overall.passCount}</td>
                  <td className="py-2.5 px-3 border border-slate-700 text-white">{overall.passPercentage}%</td>
                  <td className="py-2.5 px-3 border border-slate-700 text-amber-400">{overall.distinctionCount}</td>
                  <td className="py-2.5 px-3 border border-slate-700 text-rose-400">{overall.backlogStudentsCount}</td>
                  <td className="py-2.5 px-3 border border-slate-700 font-mono text-sky-300">{overall.meanCGPA}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2. Key Audit Findings & Remedial Action Plans */}
          <div>
            <h3 className="text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">
              2. Audit Observations & Recommended Action Plan
            </h3>
            <div className="space-y-2.5 text-xs">
              {insights.slice(0, 4).map((ins, i) => (
                <div key={ins.id} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-bold text-white">Observation #{i + 1}: {ins.title}</span>
                  </div>
                  <p className="text-slate-400 mb-1">{ins.description}</p>
                  <p className="text-sky-300 font-medium"><strong>Remedial Plan:</strong> {ins.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Formal Sign-Off Section */}
          <div className="pt-8 border-t border-slate-700 grid grid-cols-3 gap-6 text-center text-xs">
            <div>
              <div className="h-12 border-b border-slate-600 mb-2"></div>
              <p className="font-bold text-white">{DEPARTMENT_INFO.hodName}</p>
              <p className="text-slate-500">Head of Department (CSE-IoT)</p>
            </div>
            <div>
              <div className="h-12 border-b border-slate-600 mb-2"></div>
              <p className="font-bold text-white">Dr. S. K. Mahajan</p>
              <p className="text-slate-500">Dean (Academics) & IQAC Director</p>
            </div>
            <div>
              <div className="h-12 border-b border-slate-600 mb-2"></div>
              <p className="font-bold text-white">External Academic Auditor</p>
              <p className="text-slate-500">NBA / Accreditation Committee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
