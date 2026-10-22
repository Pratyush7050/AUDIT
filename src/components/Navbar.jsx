import React from 'react';
import { 
  BarChart3, 
  Upload, 
  FileSpreadsheet, 
  FileText, 
  RotateCcw, 
  Cpu, 
  Users, 
  BookOpen, 
  Layers, 
  Sparkles,
  Lock,
  LogOut
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  _selectedClass, 
  _setSelectedClass, 
  onOpenUpload, 
  onExportExcel, 
  onOpenReport, 
  onResetData,
  _totalStudents,
  auditInsightsCount,
  currentUser,
  onLogout
}) {
  const isHOD = currentUser?.role === 'HOD / Author';
  const isStudent = currentUser?.role === 'Student';

  // Department Audit Tabs (for HOD and Faculty)
  const facultyTabs = [
    { id: 'overview', label: 'Executive Overview', icon: BarChart3 },
    { id: 'class-comparison', label: 'Class Audit (SE / TE / BE)', icon: Layers },
    { id: 'semester-analysis', label: 'Semester Trends', icon: BookOpen },
    { id: 'subject-analysis', label: 'Subject Deep Dive', icon: Cpu },
    { id: 'students', label: 'Student 360° Roster', icon: Users },
    { id: 'insights', label: 'Audit Insights & Remedial', icon: Sparkles, badge: auditInsightsCount }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      {/* Top Department Brand Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Department Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 text-white font-bold text-lg">
              <Cpu className="w-5 h-5 text-sky-100" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold tracking-tight text-white font-sans">CSE–IoT</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {isStudent ? 'Student Portal' : 'Academic Audit Portal'}
                </span>
                <span className="hidden md:inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  AY 2025-26
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {isStudent 
                  ? `Personalized Performance & Outcomes for ${currentUser.name} (${currentUser.rollNo})`
                  : 'Performance Analytics & Quality Assurance for SE, TE & BE'}
              </p>
            </div>
          </div>

          {/* Quick Actions & Role Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Logged-in User Profile Badge */}
            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1.5 text-xs">
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs mr-2 ${
                isHOD ? 'bg-sky-500/20 text-sky-400' :
                isStudent ? 'bg-emerald-500/20 text-emerald-400' : 'bg-indigo-500/20 text-indigo-400'
              }`}>
                {currentUser?.avatar || 'U'}
              </div>
              <div className="text-left hidden sm:block mr-2">
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold text-white leading-none">{currentUser?.name}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                    isHOD ? 'bg-sky-500/20 text-sky-300' :
                    isStudent ? 'bg-emerald-500/20 text-emerald-300' : 'bg-indigo-500/20 text-indigo-300'
                  }`}>
                    {currentUser?.role}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{currentUser?.designation}</p>
              </div>

              {/* Logout button */}
              <button
                onClick={onLogout}
                className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-all ml-1"
                title="Log out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Department Actions (Upload, Export, Report) */}
            {!isStudent && (
              <>
                {/* Upload Button (HOD Only) */}
                <button
                  onClick={onOpenUpload}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isHOD
                      ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800 hover:border-rose-500/50 hover:text-rose-300'
                  }`}
                  title={isHOD ? "Upload result dataset (Excel/CSV)" : "Upload restricted: HOD authorization required"}
                >
                  {isHOD ? (
                    <Upload className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-rose-400" />
                  )}
                  <span className="hidden sm:inline">
                    {isHOD ? 'Upload Result' : 'Upload (HOD Only)'}
                  </span>
                </button>

                {/* Export Excel Button */}
                <button
                  onClick={onExportExcel}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-700/40 transition-all"
                  title="Download full academic audit Excel workbook"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Export Excel</span>
                </button>

                {/* Generate Formal PDF Audit Report */}
                <button
                  onClick={onOpenReport}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-md shadow-sky-500/25 transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Audit Report</span>
                </button>

                {/* Reset data (HOD only) */}
                {isHOD && (
                  <button
                    onClick={onResetData}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all"
                    title="Reset to default dataset"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tab Bar for HOD & Faculty */}
      {!isStudent && (
        <div className="border-t border-slate-800/60 bg-slate-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-2">
              <nav className="flex space-x-1 sm:space-x-2">
                {facultyTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                      <span>{tab.label}</span>
                      {tab.badge !== undefined && tab.badge > 0 && (
                        <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
