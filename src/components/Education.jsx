import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms (DSA)',
    'Object-Oriented Programming (C++)',
    'C Programming & Systems Fundamentals',
    'Database Management Systems (DBMS)',
    'Discrete Mathematics & Logic',
    'Computer Architecture & Assembly',
  ];

  return (
    <section id="education" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-sky-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-bold">Education</span>
      </div>

      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-700/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-300 border border-sky-500/40 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                BSc in Computer Science and Information Technology (BSc CSIT)
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200 mt-1">
                <span className="text-indigo-300 font-semibold">Prime College</span>
                <span>·</span>
                <span>Tribhuvan University</span>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Kathmandu, Nepal
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono font-semibold text-slate-200 self-start sm:self-auto">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span>Graduating 2027</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
            Core Academic Coursework & Focus Areas:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-100"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
