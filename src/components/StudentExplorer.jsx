import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  Trash2
} from 'lucide-react';

export default function StudentExplorer({ 
  students, 
  selectedStudent, 
  onSelectStudent, 
  onCloseStudentModal,
  batches = [],
  currentUser,
  onDeleteStudent
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [batchFilter, setBatchFilter] = useState('ALL');
  const [classFilter, setClassFilter] = useState('ALL');
  const [tierFilter, setTierFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('cgpa-desc'); // 'cgpa-desc', 'cgpa-asc', 'roll', 'attendance'
  const [studentToDelete, setStudentToDelete] = useState(null);

  const isHOD = currentUser?.role === 'HOD / Author';

  // Filter students
  const filteredStudents = students.filter(student => {
    const matchesBatch = batchFilter === 'ALL' || student.batch === batchFilter;
    const matchesClass = classFilter === 'ALL' || student.class === classFilter;
    const matchesTier = tierFilter === 'ALL' || student.performanceTier === tierFilter;
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.prn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBatch && matchesClass && matchesTier && matchesSearch;
  });

  // Sort students
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === 'cgpa-desc') return b.cgpa - a.cgpa;
    if (sortBy === 'cgpa-asc') return a.cgpa - b.cgpa;
    if (sortBy === 'attendance') return b.attendance - a.attendance;
    if (sortBy === 'backlogs') return b.activeBacklogs - a.activeBacklogs;
    if (sortBy === 'roll') return a.rollNo.localeCompare(b.rollNo);
    return 0;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Title & Filter Ribbon */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-sky-400" />
            <h2 className="text-2xl font-extrabold text-white">Student 360° Roster & Audit Explorer</h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Search, filter, and inspect individual academic transcripts, SGPA trajectories, and competencies
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by Name / Roll / PRN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 w-52 sm:w-60"
            />
          </div>

          {/* Batch Filter */}
          {batches.length > 0 && (
            <select
              value={batchFilter}
              onChange={(e) => setBatchFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-sky-500"
            >
              <option value="ALL">All Batches</option>
              {batches.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          )}

          {/* Class Filter */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
            {['ALL', 'SE', 'TE', 'BE'].map((cls) => (
              <button
                key={cls}
                onClick={() => setClassFilter(cls)}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  classFilter === cls
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>

          {/* Tier Filter */}
          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">All Tiers</option>
            <option value="Outstanding">Outstanding (≥8.5)</option>
            <option value="Distinction">Distinction (≥7.5)</option>
            <option value="First Class">First Class (≥6.0)</option>
            <option value="At-Risk (Backlogs)">At-Risk / Backlogs</option>
          </select>

          {/* Sort Control */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-sky-500"
          >
            <option value="cgpa-desc">Sort: Highest CGPA</option>
            <option value="cgpa-asc">Sort: Lowest CGPA</option>
            <option value="backlogs">Sort: Most Backlogs</option>
            <option value="attendance">Sort: Attendance</option>
            <option value="roll">Sort: Roll Number</option>
          </select>
        </div>
      </div>

      {/* Student Table */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Showing <strong className="text-white">{sortedStudents.length}</strong> of {students.length} students</span>
          <span className="text-[11px] text-sky-400">Click any student row to view 360° Profile</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 text-slate-300 uppercase tracking-wider text-[11px] border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Roll No & PRN</th>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">Batch</th>
                <th className="py-3 px-4">Class</th>
                <th className="py-3 px-4">Attendance</th>
                <th className="py-3 px-4">Cumulative CGPA</th>
                <th className="py-3 px-4">Active Backlogs</th>
                <th className="py-3 px-4">Performance Tier</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {sortedStudents.map((student) => {
                const isTopper = student.cgpa >= 8.5 && student.activeBacklogs === 0;
                const isAtRisk = student.activeBacklogs > 0 || student.cgpa < 6.0;

                return (
                  <tr 
                    key={student.id} 
                    onClick={() => onSelectStudent(student)}
                    className="hover:bg-slate-900/60 cursor-pointer transition-colors"
                  >
                    <td className="py-3 px-4 font-mono">
                      <div className="font-bold text-white">{student.rollNo}</div>
                      <div className="text-[10px] text-slate-500">{student.prn}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-bold text-white flex items-center gap-1.5">
                        {student.name}
                        {isTopper && <Award className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <div className="text-[10px] text-slate-400">{student.gender}</div>
                    </td>
                    <td className="py-3 px-4 font-mono">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20">
                        {student.batch || '2024-2028'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-sky-400 border border-slate-700">
                        {student.class}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1.5">
                        <span className={`font-semibold ${student.attendance < 75 ? 'text-rose-400' : 'text-slate-200'}`}>
                          {student.attendance}%
                        </span>
                        {student.attendance < 75 && (
                          <span className="text-[10px] text-rose-400 font-medium">(Low)</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-base">
                      <span className={isTopper ? 'text-amber-400' : isAtRisk ? 'text-rose-400' : 'text-emerald-400'}>
                        {student.cgpa}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono">
                      {student.activeBacklogs === 0 ? (
                        <span className="text-emerald-400 flex items-center gap-1 font-sans text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5" /> All Clear
                        </span>
                      ) : (
                        <span className="text-rose-400 font-bold flex items-center gap-1 font-sans text-xs">
                          <AlertTriangle className="w-3.5 h-3.5" /> {student.activeBacklogs} KT
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        student.performanceTier === 'Outstanding'
                          ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                          : student.performanceTier === 'Distinction'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : student.performanceTier === 'First Class'
                          ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                          : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                      }`}>
                        {student.performanceTier}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end space-x-1.5" onClick={(e) => e.stopPropagation()}>
                        <button 
                          onClick={() => onSelectStudent(student)}
                          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 text-[11px] font-medium transition-all"
                        >
                          View 360°
                        </button>
                        {isHOD && (
                          <button
                            onClick={() => setStudentToDelete(student)}
                            className="p-1 rounded bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-transparent hover:border-rose-500/30 text-[11px] font-medium transition-all"
                            title={`Delete record for ${student.name} (${student.rollNo})`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>


      {/* Delete Confirmation Modal (HOD / Author Only) */}
      {studentToDelete && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl glass-panel p-6 border border-rose-500/40 shadow-2xl bg-slate-900 text-slate-100 animate-in fade-in zoom-in-95">
            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex-shrink-0">
                <Trash2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Delete Student Record?</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Are you sure you want to permanently delete this student's records from the academic audit dataset?
                </p>
                <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{studentToDelete.name}</span>
                    <span className="font-mono text-sky-400">{studentToDelete.rollNo}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>PRN: {studentToDelete.prn}</span>
                    <span>CGPA: <strong className="text-amber-400 font-mono">{studentToDelete.cgpa}</strong></span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    Class: {studentToDelete.class} • Cohort: {studentToDelete.batch || '2024-2028'}
                  </div>
                </div>
                <p className="text-[11px] text-rose-400 mt-3 flex items-center gap-1.5 font-medium">
                  <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                  This will immediately update batch metrics, class averages, and local storage.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end space-x-2 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setStudentToDelete(null)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onDeleteStudent) {
                    onDeleteStudent(studentToDelete.id);
                  }
                  setStudentToDelete(null);
                }}
                className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-600/30 transition-all flex items-center space-x-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Confirm Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
