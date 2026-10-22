import React, { useState } from 'react';
import { 
  X, 
  Upload, 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { parseUploadedFile, downloadSampleTemplate } from '../utils/fileParser';

export default function DataUploadModal({ onDataUploaded, onClose, batches = [], defaultBatch = '2024-2028', allStudents = [] }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [uploadStats, setUploadStats] = useState(null);
  const [targetBatch, setTargetBatch] = useState(defaultBatch);
  const [targetSemester, setTargetSemester] = useState(4);

  const cohortStudents = allStudents.filter(s => s.batch === targetBatch);
  const isCohortPreservedBatch = targetBatch === '2024-2028';

  const handleFile = async (file) => {
    if (!file) return;
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const result = await parseUploadedFile(file, targetBatch, targetSemester, cohortStudents);
      setUploadStats(result);
    } catch (err) {
      setErrorMsg(err.message || "Failed to parse the file. Ensure valid format.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleApplyData = () => {
    if (uploadStats && uploadStats.students) {
      onDataUploaded(uploadStats.students, targetBatch);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-2xl glass-panel p-6 sm:p-8 border border-slate-700 shadow-2xl space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Upload Result Dataset</h3>
              <p className="text-xs text-slate-400">Import university gazettes or department Excel/CSV sheets</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Batch & Semester Target Selector */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center space-x-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                <span>Target Batch</span>
              </label>
              <select
                value={targetBatch}
                onChange={(e) => setTargetBatch(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-sky-500"
              >
                {batches.map(b => (
                  <option key={b.id} value={b.id}>{b.name} ({b.class})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Examination Semester
              </label>
              <select
                value={targetSemester}
                onChange={(e) => setTargetSemester(Number(e.target.value))}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-sky-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
            </div>
          </div>

          {isCohortPreservedBatch && (
            <div className="px-3 py-2 rounded-xl bg-sky-950/40 border border-sky-500/30 text-xs text-sky-200 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Batch 2024–2028: Enrolled Cohort Locked (63 Students: 44 Male / 19 Female)</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Count & Gender Protected</span>
            </div>
          )}
        </div>

        {/* Drag & Drop Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`p-7 border-2 border-dashed rounded-2xl text-center transition-all cursor-pointer ${
            isDragging
              ? 'border-sky-400 bg-sky-500/10'
              : 'border-slate-700/80 bg-slate-900/50 hover:border-slate-600'
          }`}
          onClick={() => document.getElementById('file-upload-input').click()}
        >
          <input
            id="file-upload-input"
            type="file"
            accept=".xlsx, .xls, .csv"
            className="hidden"
            onChange={(e) => e.target.files && handleFile(e.target.files[0])}
          />

          <FileSpreadsheet className="w-10 h-10 mx-auto text-sky-400/80 mb-2" />
          <p className="text-sm font-bold text-white">
            {isLoading ? 'Parsing and validating file...' : 'Click to browse or drag & drop files here'}
          </p>
          <p className="text-xs text-slate-400 mt-1">Supports Microsoft Excel (.xlsx, .xls) and CSV format</p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Success Preview */}
        {uploadStats && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>File Validated Successfully</span>
              </div>
              <span className="text-[11px] text-slate-400">{uploadStats.fileName}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-slate-900/80">
                <div className="font-bold text-white">{uploadStats.studentCount}</div>
                <div className="text-[10px] text-slate-400">
                  {uploadStats.isCohortPreserved ? "Students (Cohort Preserved)" : "Students Parsed"}
                </div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80">
                <div className="font-bold text-white">
                  {uploadStats.maleCount !== undefined ? `${uploadStats.maleCount} M / ${uploadStats.femaleCount} F` : targetBatch}
                </div>
                <div className="text-[10px] text-slate-400">
                  {uploadStats.isCohortPreserved ? "Gender (Maintained)" : "Demographics"}
                </div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80">
                <div className="font-bold text-white">Sem {targetSemester}</div>
                <div className="text-[10px] text-slate-400">Term Updated</div>
              </div>
            </div>

            {uploadStats.isCohortPreserved && (
              <p className="text-[11px] text-emerald-300/90 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/20">
                ✓ <strong>Cohort Integrity Guaranteed:</strong> Total enrolled students ({uploadStats.studentCount}) and Male/Female count ({uploadStats.maleCount}M / {uploadStats.femaleCount}F) remain unchanged. All grades, SGPA, CGPA, backlogs, and competencies have been updated from the uploaded marks.
              </p>
            )}

            <button
              onClick={handleApplyData}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-1.5 transition-all"
            >
              <span>Merge & Update Batch Dataset</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Template Download */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
          <button
            onClick={() => downloadSampleTemplate('SE', targetBatch, targetSemester, cohortStudents)}
            className="flex items-center space-x-1 text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium"
          >
            <Download className="w-3.5 h-3.5" />
            <span>
              {isCohortPreservedBatch 
                ? `Download Pre-filled Batch 2024–2028 (63 Students) Template`
                : `Download Sample Excel Template`}
            </span>
          </button>

          <span className="text-[11px] text-slate-400">UTF-8 Encoded</span>
        </div>
      </div>
    </div>
  );
}
