import React, { useState } from 'react';
import { 
  X, 
  Award, 
  AlertTriangle, 
  GraduationCap,
  Trash2 
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';

export default function StudentProfileModal({ 
  student, 
  onClose, 
  isHOD = false, 
  onDeleteStudent 
}) {
  const [studentToDelete, setStudentToDelete] = useState(null);

  if (!student) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        <div className="relative w-full max-w-4xl rounded-2xl glass-panel p-6 sm:p-8 border border-slate-700 shadow-2xl my-8 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            title="Close Profile"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-sky-500/20">
                {student.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl font-bold text-white">{student.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    {student.class} Cohort
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Roll No: {student.rollNo} • PRN: {student.prn} • Gender: {student.gender}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <div className="text-right">
                <p className="text-[10px] text-slate-400">Cumulative CGPA</p>
                <p className="text-2xl font-black text-amber-400 font-mono">{student.cgpa}</p>
              </div>
              <div className="pl-3 border-l border-slate-800 text-right">
                <p className="text-[10px] text-slate-400">Attendance</p>
                <p className={`text-base font-bold ${student.attendance < 75 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {student.attendance}%
                </p>
              </div>
            </div>
          </div>

          {/* Progression & IoT Competency Radar Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {/* SGPA Progression Chart */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">Semester-Wise SGPA Progression</span>
                <span className="text-[10px] text-sky-400">Term Trajectory</span>
              </div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={Object.entries(student.semesterResults || {}).map(([sem, res]) => ({
                      semester: `Sem ${sem}`,
                      sgpa: res.sgpa
                    }))}
                    margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis dataKey="semester" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                    <YAxis stroke="#94a3b8" domain={[4.0, 10.0]} tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }} />
                    <Line 
                      type="monotone" 
                      dataKey="sgpa" 
                      stroke="#38bdf8" 
                      strokeWidth={3} 
                      dot={{ r: 4, fill: '#0284c7' }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* IoT Skill Domain Radar */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">IoT Domain Competencies</span>
                <span className="text-[10px] text-indigo-400">Technical Skill Matrix</span>
              </div>
              <div className="h-48 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart 
                    data={[
                      { domain: 'Hardware / Embedded', score: student.domainScores?.hardwareEmbedded || 75 },
                      { domain: 'IoT Networking', score: student.domainScores?.iotNetworking || 80 },
                      { domain: 'Programming / DSA', score: student.domainScores?.softwareProgramming || 85 },
                      { domain: 'Cloud & Analytics', score: student.domainScores?.cloudDataAnalytics || 78 },
                      { domain: 'Cyber Security', score: student.domainScores?.cyberSecurity || 72 }
                    ]}
                    margin={{ top: 5, right: 15, left: 15, bottom: 5 }}
                  >
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="domain" stroke="#94a3b8" tick={{ fontSize: 9 }} />
                    <PolarRadiusAxis stroke="#64748b" domain={[0, 100]} />
                    <Radar name="Proficiency" dataKey="score" stroke="#818cf8" fill="#818cf8" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Complete Semester Transcripts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sky-400" /> Academic Transcript Breakdown
            </h4>

            {Object.entries(student.semesterResults || {}).map(([semNum, semData]) => (
              <div key={semNum} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white text-sm">Semester {semNum}</span>
                    <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-800 text-sky-400">
                      SGPA: {semData.sgpa}
                    </span>
                  </div>
                  <span className={`text-xs font-bold ${semData.backlogs === 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {semData.backlogs === 0 ? 'Passed / Clear' : `${semData.backlogs} Backlog(s)`}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px]">
                      <tr>
                        <th className="py-2 px-3">Subject</th>
                        <th className="py-2 px-3">Faculty</th>
                        <th className="py-2 px-3">Marks</th>
                        <th className="py-2 px-3">Grade</th>
                        <th className="py-2 px-3">Credits</th>
                        <th className="py-2 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {Object.entries(semData.subjects || {}).map(([sCode, sInfo]) => (
                        <tr key={sCode}>
                          <td className="py-2 px-3">
                            <span className="font-medium text-white">{sInfo.subjectName}</span>
                            <span className="text-[10px] text-slate-500 font-mono ml-1">({sInfo.short})</span>
                          </td>
                          <td className="py-2 px-3 text-slate-400">{sInfo.faculty}</td>
                          <td className="py-2 px-3 font-mono font-semibold text-white">{sInfo.marks}/100</td>
                          <td className="py-2 px-3 font-bold font-mono text-sky-400">{sInfo.grade}</td>
                          <td className="py-2 px-3">{sInfo.credits}</td>
                          <td className="py-2 px-3">
                            {sInfo.isBacklog ? (
                              <span className="text-rose-400 font-bold text-[10px]">FAIL / KT</span>
                            ) : (
                              <span className="text-emerald-400 text-[10px]">PASS</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Mentoring & Action Item Footer */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-bold text-sky-400">Faculty Mentoring Recommendation:</p>
              <p className="text-slate-300 mt-0.5">
                {student.activeBacklogs > 0
                  ? `Student requires intensive remedial tutoring for backlogged courses. Target 1:1 guidance with subject coordinators.`
                  : student.cgpa >= 8.5
                  ? `Encourage student for competitive programming, IoT research publications, and Tier-1 product company placements.`
                  : `Student maintains steady academic progression. Recommend participation in hardware hackathons.`}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {isHOD && onDeleteStudent && (
                <button
                  onClick={() => setStudentToDelete(student)}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold whitespace-nowrap transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Student</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold whitespace-nowrap transition-all"
              >
                Close Profile
              </button>
            </div>
          </div>
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
                  onClose();
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
    </>
  );
}
