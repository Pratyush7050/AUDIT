import React from 'react';
import { ShieldAlert, Lock, X, UserCheck } from 'lucide-react';

export default function AccessDeniedModal({ role, onClose, onSwitchToHOD }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl glass-panel p-6 sm:p-8 border border-rose-500/40 shadow-2xl shadow-rose-950/50 text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lock Icon */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4 shadow-lg shadow-rose-500/10">
          <Lock className="w-8 h-8 animate-pulse" />
        </div>

        <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-2">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Access Restricted</span>
        </div>

        <h3 className="text-xl font-black text-white">
          HOD / Author Authorization Required
        </h3>

        <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
          You are currently logged in as <strong className="text-sky-300 font-semibold">{role}</strong>. Only the <strong>Head of Department (HOD)</strong> or designated <strong>Department Author</strong> has permission to upload, modify, or overwrite academic result datasets.
        </p>

        <div className="mt-5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-left text-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span>Current Role:</span>
            <span className="font-semibold text-rose-400">{role}</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span>Required Privilege:</span>
            <span className="font-semibold text-emerald-400">HOD / Department Author</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span>Action Attempted:</span>
            <span className="font-semibold text-slate-200">Upload & Ingest Result Data</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-2.5">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
          >
            Go Back
          </button>
          <button
            onClick={onSwitchToHOD}
            className="w-full py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-1.5"
          >
            <UserCheck className="w-4 h-4" />
            <span>Login as HOD</span>
          </button>
        </div>
      </div>
    </div>
  );
}
