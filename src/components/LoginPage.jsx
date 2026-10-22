import React, { useState } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  UserCheck, 
  GraduationCap, 
  ArrowRight, 
  AlertCircle,
  Eye,
  EyeOff,
  UserPlus,
  LogIn
} from 'lucide-react';
import { DEPARTMENT_INFO } from '../data/mockData';

export const PRESET_USERS = {
  hod: {
    id: 'USER_HOD_01',
    name: DEPARTMENT_INFO.hodName,
    email: 'hod@cseiot.edu',
    role: 'HOD / Author',
    roleLabel: 'Head of Department & Author',
    designation: 'Professor & Head (CSE-IoT)',
    canUpload: true,
    canExport: true,
    avatar: 'RS',
    badgeColor: 'sky',
    description: 'Full administrative authority to upload result sheets, modify benchmarks, and generate formal audit reports.'
  },
  faculty: {
    id: 'USER_FAC_01',
    name: 'Prof. Priya Nair',
    email: 'priya.nair@cseiot.edu',
    role: 'Course Faculty',
    roleLabel: 'Course Coordinator / Faculty',
    designation: 'Assistant Professor (DBMS & OOP)',
    canUpload: false,
    canExport: true,
    avatar: 'PN',
    badgeColor: 'indigo',
    description: 'Read-only access to department academic analytics, subject-level outcomes, and student performance.'
  },
  student: {
    id: 'STU_124AX024',
    name: 'JADHAV MADHURA KALPESH',
    rollNo: '124AX024',
    email: 'madhura.124ax024@siesgst.ac.in',
    class: 'SE',
    role: 'Student',
    roleLabel: 'Undergraduate Student (SE - IoT & CS)',
    designation: 'Seat: 124AX024 (Second Year)',
    canUpload: false,
    canExport: false,
    avatar: 'JM',
    badgeColor: 'emerald',
    description: 'Student view: Private access to personal academic performance, transcripts, and IoT competency radar.'
  }
};

export default function LoginPage({ onLogin, onRegisterStudent, allStudents = [] }) {
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
  const [selectedRoleKey, setSelectedRoleKey] = useState('hod');
  
  // Sign In State
  const [emailOrRoll, setEmailOrRoll] = useState(PRESET_USERS.hod.email);
  const [password, setPassword] = useState('audit@2026');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Student Sign Up Form State
  const [regFullName, setRegFullName] = useState('');
  const [regRollNo, setRegRollNo] = useState('');
  const [regYear, setRegYear] = useState('SE'); // 'SE', 'TE', 'BE'
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  const handleSelectRole = (key) => {
    setSelectedRoleKey(key);
    setEmailOrRoll(PRESET_USERS[key].email);
    setPassword('audit@2026');
    setErrorMsg('');
  };

  // Sign In Submission
  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (selectedRoleKey === 'hod') {
      onLogin(PRESET_USERS.hod);
      return;
    }

    if (selectedRoleKey === 'faculty') {
      onLogin(PRESET_USERS.faculty);
      return;
    }

    // Student Login
    if (selectedRoleKey === 'student') {
      // Find matching student by roll number or default demo
      const matched = allStudents.find(
        s => s.rollNo.toLowerCase() === emailOrRoll.toLowerCase() || 
             s.rollNo === '24IOT001'
      ) || PRESET_USERS.student;

      onLogin({
        id: matched.id || `STU_${matched.rollNo}`,
        name: matched.name,
        rollNo: matched.rollNo,
        class: matched.class,
        email: `${matched.rollNo.toLowerCase()}@cseiot.edu`,
        role: 'Student',
        roleLabel: `Undergraduate Student (${matched.class})`,
        designation: `Roll: ${matched.rollNo} (${matched.class} Engineering)`,
        canUpload: false,
        canExport: false,
        avatar: matched.name.split(' ').map(n => n[0]).join('').slice(0, 2)
      });
    }
  };

  // Student Registration Submission
  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!regFullName.trim() || !regRollNo.trim() || !regPassword) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    const cleanRoll = regRollNo.toUpperCase().trim();
    
    // Call register student handler in App
    onRegisterStudent({
      name: regFullName.trim(),
      rollNo: cleanRoll,
      class: regYear,
      password: regPassword
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-4xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Department Info & Scope */}
        <div className="lg:col-span-6 space-y-6">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-sky-500/30 text-white">
              <Cpu className="w-6 h-6 text-sky-100" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-black text-white tracking-tight">CSE–IoT</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30">
                  AY 2025-26
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Academic Audit & Quality Assurance Portal
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Centralized Academic <br />
              <span className="gradient-text-sky">Audit & Student Portal</span>
            </h1>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Tailored views: <strong>HOD & Faculty</strong> access comprehensive branch analytics; <strong>Students</strong> view their personal performance, SGPA trends, and IoT skills.
            </p>
          </div>

          {/* Access Guidelines Card */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
            <div className="flex items-center space-x-2 text-sky-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Portal Access Scope:</span>
            </div>
            <div className="flex items-start space-x-2 text-slate-300">
              <div className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 flex-shrink-0"></div>
              <p><strong className="text-white">HOD & Author:</strong> Branch-wide audit dashboard + upload and export result permissions.</p>
            </div>
            <div className="flex items-start space-x-2 text-slate-300">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></div>
              <p><strong className="text-white">Course Faculty:</strong> Full department analytics & subject difficulty metrics (Read-only).</p>
            </div>
            <div className="flex items-start space-x-2 text-slate-300">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
              <p><strong className="text-white">Student Account:</strong> Private 360° student portal with personal SGPA curve, rank, and transcripts.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Card (Sign In / Register Student) */}
        <div className="lg:col-span-6 w-full">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative">
            {/* Top Toggle between Sign In & Student Register */}
            <div className="flex items-center bg-slate-900/90 p-1 rounded-2xl border border-slate-800 mb-6">
              <button
                type="button"
                onClick={() => { setAuthMode('signin'); setErrorMsg(''); }}
                className={`w-1/2 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                  authMode === 'signin'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
              <button
                type="button"
                onClick={() => { setAuthMode('signup'); setErrorMsg(''); }}
                className={`w-1/2 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                  authMode === 'signup'
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register Student</span>
              </button>
            </div>

            {/* --- SIGN IN MODE --- */}
            {authMode === 'signin' ? (
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Select Role to Sign In</h2>
                <p className="text-xs text-slate-400 mb-4">Choose a role to inspect credentials</p>

                {/* Quick Role Selection Tabs */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { key: 'hod', label: 'HOD / Author', icon: ShieldCheck, color: 'text-sky-400', border: 'border-sky-500/40', bg: 'bg-sky-500/15' },
                    { key: 'faculty', label: 'Faculty', icon: UserCheck, color: 'text-indigo-400', border: 'border-indigo-500/40', bg: 'bg-indigo-500/15' },
                    { key: 'student', label: 'Student', icon: GraduationCap, color: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-500/15' }
                  ].map((r) => {
                    const Icon = r.icon;
                    const isSelected = selectedRoleKey === r.key;
                    return (
                      <button
                        key={r.key}
                        type="button"
                        onClick={() => handleSelectRole(r.key)}
                        className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                          isSelected
                            ? `${r.bg} ${r.border} text-white shadow-lg`
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? r.color : 'text-slate-400'}`} />
                        <span className="text-xs font-bold leading-tight">{r.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active User Preview Card */}
                <div className="mb-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center space-x-3 text-xs">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-sky-400 border border-slate-700">
                    {PRESET_USERS[selectedRoleKey].avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white truncate">{PRESET_USERS[selectedRoleKey].name}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                        selectedRoleKey === 'hod' ? 'bg-sky-500/20 text-sky-300' :
                        selectedRoleKey === 'faculty' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-emerald-500/20 text-emerald-300'
                      }`}>
                        {PRESET_USERS[selectedRoleKey].role}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">{PRESET_USERS[selectedRoleKey].designation}</p>
                  </div>
                </div>

                {/* Sign In Form */}
                <form onSubmit={handleSignIn} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {selectedRoleKey === 'student' ? 'Student Roll Number or Email' : 'Institutional Email'}
                    </label>
                    <input
                      type="text"
                      value={emailOrRoll}
                      onChange={(e) => setEmailOrRoll(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono"
                      placeholder={selectedRoleKey === 'student' ? 'e.g. 24IOT001' : 'name@cseiot.edu'}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono pr-10"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-2.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-xl shadow-sky-500/25 transition-all flex items-center justify-center space-x-2 mt-2"
                  >
                    <span>Sign In to {selectedRoleKey === 'student' ? 'My Performance Dashboard' : 'Academic Portal'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              /* --- STUDENT REGISTRATION MODE --- */
              <div>
                <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                  <UserPlus className="w-5 h-5" />
                  <h2 className="text-xl font-bold text-white">Create Student Account</h2>
                </div>
                <p className="text-xs text-slate-400 mb-4">Enter your student details to activate your individual portal</p>

                <form onSubmit={handleSignUp} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={regFullName}
                      onChange={(e) => setRegFullName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      placeholder="e.g. Tanmay Joshi"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Roll Number *
                      </label>
                      <input
                        type="text"
                        value={regRollNo}
                        onChange={(e) => setRegRollNo(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono uppercase"
                        placeholder="24IOT015"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Engineering Year *
                      </label>
                      <select
                        value={regYear}
                        onChange={(e) => setRegYear(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="SE">SE (Second Year)</option>
                        <option value="TE">TE (Third Year)</option>
                        <option value="BE">BE (Final Year)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Password *
                      </label>
                      <input
                        type="password"
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        value={regConfirmPassword}
                        onChange={(e) => setRegConfirmPassword(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-2.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2 mt-2"
                  >
                    <span>Register & Open My Performance Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
