import React from 'react';
import { Calendar, Layers, GitCompare, GraduationCap, Plus } from 'lucide-react';

export const YEAR_SEMESTER_CONFIG = {
  ALL: {
    label: 'All Years (SE to BE)',
    yearName: 'Complete Degree Lifecycle (Sem 3 to 8)',
    semesters: [
      { num: 3, type: 'SE - Odd Sem (Nov 2025)', label: 'Sem 3 (SE)' },
      { num: 4, type: 'SE - Even Sem (May 2026)', label: 'Sem 4 (SE)' },
      { num: 5, type: 'TE - Odd Sem', label: 'Sem 5 (TE)' },
      { num: 6, type: 'TE - Even Sem', label: 'Sem 6 (TE)' },
      { num: 7, type: 'BE - Odd Sem', label: 'Sem 7 (BE)' },
      { num: 8, type: 'BE - Even Sem', label: 'Sem 8 (BE)' }
    ]
  },
  SE: {
    label: 'Second Year (SE)',
    yearName: 'Second Year Stage (Semesters 3 & 4)',
    semesters: [
      { num: 3, type: 'Odd Sem (Nov 2025)', label: 'Sem 3 (Nov 2025)' },
      { num: 4, type: 'Even Sem (May 2026)', label: 'Sem 4 (May 2026)' }
    ]
  },
  TE: {
    label: 'Third Year (TE)',
    yearName: 'Third Year Stage (Semesters 5 & 6)',
    semesters: [
      { num: 5, type: 'Odd Sem (Autumn)', label: 'Sem 5 (Odd)' },
      { num: 6, type: 'Even Sem (Spring)', label: 'Sem 6 (Even)' }
    ]
  },
  BE: {
    label: 'Final Year (BE)',
    yearName: 'Final Year Stage (Semesters 7 & 8)',
    semesters: [
      { num: 7, type: 'Odd Sem (Autumn)', label: 'Sem 7 (Odd)' },
      { num: 8, type: 'Even Sem (Spring)', label: 'Sem 8 (Even)' }
    ]
  }
};

export default function YearSemesterSelector({ 
  selectedClass, 
  setSelectedClass, 
  selectedSemester, 
  setSelectedSemester,
  showOddEvenToggle = false,
  isOddEvenCompare = false,
  setIsOddEvenCompare,
  batches = [],
  selectedBatch = '2024-2028',
  setSelectedBatch,
  onOpenBatchModal,
  students = []
}) {
  const currentYearConfig = YEAR_SEMESTER_CONFIG[selectedClass] || YEAR_SEMESTER_CONFIG.ALL;
  const activeBatchObj = batches.find(b => b.id === selectedBatch);

  const handleBatchClick = (batchId) => {
    if (setSelectedBatch) {
      setSelectedBatch(batchId);
      // Keep selected class or reset to ALL
      setSelectedSemester('ALL');
      if (setIsOddEvenCompare) setIsOddEvenCompare(false);
    }
  };

  const handleClassChange = (cls) => {
    setSelectedClass(cls);
    setSelectedSemester('ALL');
    if (setIsOddEvenCompare) setIsOddEvenCompare(false);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 mb-6 shadow-xl space-y-3.5">
      {/* 1. Batch Switcher Ribbon (4-Year Cohorts from SE to BE) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center border border-sky-500/20">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Academic Cohort Batch:
            </span>
            <p className="text-[10px] text-slate-400">Complete 4-Year Lifecycle (SE → TE → BE)</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {/* All Batches */}
          <button
            onClick={() => handleBatchClick('ALL')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedBatch === 'ALL'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Batches
          </button>

          {/* Configured Batches */}
          {batches.map((b) => {
            const isSelected = selectedBatch === b.id;
            const batchStudentCount = students.filter(s => s.batch === b.id || (!s.batch && b.id === '2024-2028')).length;

            return (
              <button
                key={b.id}
                onClick={() => handleBatchClick(b.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/25 font-extrabold'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{b.name}</span>
                {b.isRealData && (
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-slate-950' : 'bg-emerald-400 animate-pulse'}`}></span>
                )}
                {batchStudentCount > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                    {batchStudentCount}
                  </span>
                )}
              </button>
            );
          })}

          {/* Add Batch Button */}
          {onOpenBatchModal && (
            <button
              onClick={onOpenBatchModal}
              className="px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-950 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/40 border border-indigo-500/30 flex items-center space-x-1 transition-all"
              title="Add a new 4-year cohort batch"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Batch</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Academic Stage (SE / TE / BE) & Semester Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Class Year Selector inside Batch */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-bold uppercase tracking-wider mr-1">
            <Layers className="w-4 h-4 text-sky-400" />
            <span>Academic Stage:</span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800/80">
            {[
              { id: 'ALL', label: 'All (SE to BE)' },
              { id: 'SE', label: 'SE (Sem 3 & 4)' },
              { id: 'TE', label: 'TE (Sem 5 & 6)' },
              { id: 'BE', label: 'BE (Sem 7 & 8)' }
            ].map((cls) => (
              <button
                key={cls.id}
                onClick={() => handleClassChange(cls.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedClass === cls.id
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cls.label}
              </button>
            ))}
          </div>
        </div>

        {/* Semester Selector within Selected Year Stage */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-bold uppercase tracking-wider mr-1">
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span>Semester:</span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800/80 overflow-x-auto">
            {/* Year Combined Option */}
            <button
              onClick={() => {
                setSelectedSemester('ALL');
                if (setIsOddEvenCompare) setIsOddEvenCompare(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedSemester === 'ALL' && !isOddEvenCompare
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {selectedClass === 'ALL' ? 'Cumulative (All Terms)' : `Full Year (${currentYearConfig.label})`}
            </button>

            {/* Individual Semesters */}
            {currentYearConfig.semesters?.map((sem) => (
              <button
                key={sem.num}
                onClick={() => {
                  setSelectedSemester(sem.num);
                  if (setIsOddEvenCompare) setIsOddEvenCompare(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedSemester === sem.num && !isOddEvenCompare
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {sem.label}
              </button>
            ))}

            {/* Odd vs Even Comparison Toggle */}
            {showOddEvenToggle && setIsOddEvenCompare && selectedClass !== 'ALL' && (
              <button
                onClick={() => setIsOddEvenCompare(!isOddEvenCompare)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 whitespace-nowrap ${
                  isOddEvenCompare
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                    : 'text-amber-400 hover:text-amber-300 hover:bg-slate-900'
                }`}
              >
                <GitCompare className="w-3.5 h-3.5" />
                <span>Odd vs Even</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Scope & Active Batch Status Ribbon */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 pt-2.5 border-t border-slate-800/60 gap-1.5">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>
            Active Inspection Scope: <strong className="text-white font-sans">
              {selectedBatch !== 'ALL' && activeBatchObj ? `${activeBatchObj.name}` : 'All Batches'}
              {' • '}
              {selectedClass === 'ALL' 
                ? 'Complete SE to BE Lifecycle (Sem 3 to 8)'
                : selectedSemester === 'ALL'
                ? `${currentYearConfig.label} (Combined)`
                : `Semester ${selectedSemester} (${selectedSemester % 2 === 1 ? 'Odd Semester' : 'Even Semester'})`
              }
            </strong>
          </span>
        </div>

        <div className="flex items-center space-x-3 text-[11px] text-slate-400 font-mono">
          {activeBatchObj?.scheme && (
            <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-400 font-semibold">
              Scheme: {activeBatchObj.scheme}
            </span>
          )}
          {activeBatchObj?.entryYear && (
            <span className="text-slate-400">
              SE–BE Cycle: {activeBatchObj.entryYear}–{activeBatchObj.gradYear}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
