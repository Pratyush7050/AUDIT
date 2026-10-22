import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Plus, 
  CheckCircle2, 
  BookOpen, 
  Trash2
} from 'lucide-react';

export default function BatchModal({ 
  isOpen, 
  onClose, 
  batches, 
  onAddBatch, 
  onDeleteBatch, 
  selectedBatch, 
  setSelectedBatch 
}) {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [entryYear, setEntryYear] = useState(2025);
  const [gradYear, setGradYear] = useState(2029);
  const [scheme, setScheme] = useState('R-24');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleCreateBatch = (e) => {
    e.preventDefault();
    const batchId = `${entryYear}-${gradYear}`;
    
    // Check if batch exists
    if (batches.some(b => b.id === batchId)) {
      alert(`Batch ${batchId} already exists!`);
      return;
    }

    const newBatch = {
      id: batchId,
      name: `Batch ${batchId}`,
      academicYears: `SE to BE (${batchId})`,
      entryYear: Number(entryYear),
      gradYear: Number(gradYear),
      activeSemesters: [3, 4, 5, 6, 7, 8],
      currentSemester: 4,
      description: description || `4-Year Undergraduate Cohort (${batchId}) spanning SE, TE, and BE under ${scheme} scheme.`,
      isRealData: false,
      scheme
    };

    onAddBatch(newBatch);
    setSelectedBatch(batchId);
    setIsAddingNew(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-2xl glass-panel p-6 sm:p-8 border border-slate-700 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">4-Year Degree Cohort Batches</h3>
              <p className="text-xs text-slate-400">Manage academic cohorts spanning SE (Sem 3,4), TE (Sem 5,6), and BE (Sem 7,8)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Existing Batches List */}
        {!isAddingNew ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Configured Academic Batches ({batches.length})
              </span>
              <button
                onClick={() => setIsAddingNew(true)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/20 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Cohort</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
              {batches.map((b) => {
                const isSelected = selectedBatch === b.id;
                return (
                  <div
                    key={b.id}
                    onClick={() => {
                      setSelectedBatch(b.id);
                      onClose();
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'border-sky-400 bg-sky-500/10 shadow-lg shadow-sky-500/10'
                        : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-white text-sm">{b.name}</h4>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                            SE → BE
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">Cycle: {b.entryYear}–{b.gradYear}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        {!b.isRealData && onDeleteBatch && batches.length > 1 && (
                          <button
                            type="button"
                            title="Delete custom cohort"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (window.confirm(`Delete batch "${b.name}"?`)) {
                                onDeleteBatch(b.id);
                              }
                            }}
                            className="p-1 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                        )}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center space-x-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span>Semesters 3 to 8</span>
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                        {b.scheme || 'R-24'}
                      </span>
                    </div>

                    {b.isRealData && (
                      <div className="mt-2 text-[10px] text-emerald-400 font-medium flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Official Gazette Dataset Loaded</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Add New Batch Form */
          <form onSubmit={handleCreateBatch} className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                <Plus className="w-4 h-4 text-sky-400" />
                <span>Create New 4-Year Academic Batch</span>
              </h4>
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Back to Batches
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Admission Year (e.g. 2023, 2024, 2025)
                </label>
                <input
                  type="number"
                  required
                  min="2018"
                  max="2035"
                  value={entryYear}
                  onChange={(e) => {
                    const y = Number(e.target.value);
                    setEntryYear(y);
                    setGradYear(y + 4);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Graduation Year (e.g. 2027, 2028, 2029)
                </label>
                <input
                  type="number"
                  required
                  min="2022"
                  max="2040"
                  value={gradYear}
                  onChange={(e) => setGradYear(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Autonomous Academic Scheme
              </label>
              <select
                value={scheme}
                onChange={(e) => setScheme(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500"
              >
                <option value="R-24 (Autonomous)">R-24 (NEP Autonomous Scheme)</option>
                <option value="R-19 (Autonomous)">R-19 (CBCS Scheme)</option>
                <option value="R-20 Scheme">R-20 Scheme</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Cohort Notes / Description (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 4-Year B.Tech Batch spanning SE, TE, and BE"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="pt-3 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-sky-500/20 transition-all flex items-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save & Activate Cohort</span>
              </button>
            </div>
          </form>
        )}

        {/* Footer info */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Active Selection: <strong className="text-sky-400">{selectedBatch}</strong></span>
          <button
            onClick={() => {
              setSelectedBatch('ALL');
              onClose();
            }}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4"
          >
            View All Batches Combined
          </button>
        </div>
      </div>
    </div>
  );
}
