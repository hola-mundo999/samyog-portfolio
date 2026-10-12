import React from 'react';
import { Cpu, Terminal, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[1px] bg-cyan-400" />
        <span className="text-[11px] uppercase font-mono tracking-widest text-cyan-400 font-bold">
          01 // Background & Ethos
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineering Systems From Principles to Production
          </h2>
          <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            Where mathematical foundations, systems architecture, and intelligent applied algorithms meet student community leadership.
          </p>
        </div>
      </div>

      {/* Grid Layout: Editorial Narrative + 3 Engineered Pillars */}
      <div className="grid md:grid-cols-12 gap-6 items-stretch">
        {/* Main Narrative Card (7 cols) */}
        <div className="md:col-span-7 surface-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-slate-800/80">
          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <strong className="text-white font-semibold">BSc CSIT student at Prime College</strong> (Tribhuvan University, Class of 2027). My technical journey started close to the metal with <span className="text-cyan-300 font-mono font-semibold">C</span> and <span className="text-cyan-300 font-mono font-semibold">C++</span>, developing an instinctive understanding of memory pointers, algorithmic complexity, and hardware boundaries.
            </p>
            <p>
              Today, I channel that foundational rigour into building modern, intelligent software in <strong className="text-white font-semibold">Python</strong>. Whether implementing real-time computer vision pipelines with OpenCV, architecting document chunking for LLM retrieval, or building low-latency REST endpoints in FastAPI, I build software that is robust, fast, and maintainable.
            </p>
            <p>
              Technology is most impactful when shared. As <strong className="text-cyan-300 font-semibold">PR Director of Prime IT Club</strong>, I bridge student talent with industry professionals—organizing campus hackathons, technical bootcamps, and creative design workshops.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>TU IOST Affiliated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-300 font-semibold">Actively Shipping Code</span>
            </div>
          </div>
        </div>

        {/* 3 Engineering Pillars (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between gap-4">
          <div className="surface-card rounded-2xl p-5 border-slate-800/80 flex-1">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Low-Level Foundations
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mastering pointers, algorithmic data structures, OOP paradigms, and operating system concepts through rigorous academic study and hands-on C/C++ implementations.
            </p>
          </div>

          <div className="surface-card rounded-2xl p-5 border-slate-800/80 flex-1">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Applied AI & Machine Vision
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Translating theoretical AI research into real-time applications: 21-point spatial hand landmark tracking, document NLP extraction, and Gemini / Groq API orchestration.
            </p>
          </div>

          <div className="surface-card rounded-2xl p-5 border-slate-800/80 flex-1">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Club Leadership & PR
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Driving public relations, industry outreach, and visual identity for Prime IT Club, fostering collaborative peer environments for student engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
