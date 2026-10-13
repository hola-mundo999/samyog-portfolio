import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import SpotlightCard from './ui/SpotlightCard';

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms (DSA)',
    'Object-Oriented Programming (C++)',
    'C Programming & Systems Fundamentals',
    'Database Management Systems (DBMS)',
    'Discrete Mathematics & Computational Logic',
    'Computer Architecture & Assembly Language',
  ];

  return (
    <section id="education" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-3"
      >
        <span className="w-8 h-[2px] bg-sky-500 dark:bg-cyan-400" />
        <span className="text-xs uppercase font-mono tracking-widest text-sky-600 dark:text-cyan-400 font-bold">
          Education
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45 }}
      >
        <SpotlightCard className="rounded-2xl sm:rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800/80">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-sky-500/10 dark:bg-cyan-500/10 text-sky-600 dark:text-cyan-400 border border-sky-500/20 dark:border-cyan-500/30 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  BSc in Computer Science and Information Technology (BSc CSIT)
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300 mt-1">
                  <span className="text-sky-600 dark:text-cyan-400 font-semibold">Prime College</span>
                  <span>·</span>
                  <span>Tribhuvan University</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    Kathmandu, Nepal
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 self-start sm:self-auto shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
              <span>Graduating 2027</span>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3.5">
              Core Academic Coursework & Applied Competencies:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
}
