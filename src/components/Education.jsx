import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++)',
    'C Programming & Systems Fundamentals',
    'Database Management Systems',
    'Discrete Mathematics',
    'Computer Architecture',
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-sky-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-sky-400">Education</span>
      </div>

      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                BSc in Computer Science and Information Technology (BSc CSIT)
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-1">
                <span className="text-indigo-400 font-medium">Prime College</span>
                <span>·</span>
                <span>Tribhuvan University</span>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Kathmandu, Nepal
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 self-start sm:self-auto">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span>Graduating 2027</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Core Academic Coursework & Focus Areas:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
