import React from 'react';
import { Terminal, Cpu, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-sky-500 dark:bg-cyan-400" />
        <span className="text-xs uppercase font-mono tracking-widest text-sky-600 dark:text-cyan-400 font-bold">
          About Me
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curious Developer & Computer Science Student
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            Building software with strong computer science fundamentals, practical Python development, and active campus community leadership.
          </p>
        </div>
      </div>

      {/* Grid Layout: Editorial Narrative + 3 Core Pillars */}
      <div className="grid md:grid-cols-12 gap-6 items-stretch">
        {/* Main Narrative Card (7 cols) */}
        <div className="md:col-span-7 surface-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>
              I am a third-year <strong className="text-slate-950 dark:text-white font-semibold">BSc CSIT student at Prime College</strong> (Tribhuvan University, Class of 2027) in Kathmandu, Nepal.
            </p>
            <p>
              My programming foundation began close to the metal with <span className="text-sky-700 dark:text-cyan-300 font-mono font-semibold">C</span> and <span className="text-sky-700 dark:text-cyan-300 font-mono font-semibold">C++</span>. Working through manual memory pointers, algorithmic complexity, and operating system basics taught me to respect hardware and write deliberate, maintainable code.
            </p>
            <p>
              Today, I build most of my projects in <strong className="text-slate-950 dark:text-white font-semibold">Python</strong>. I focus on creating tools that solve practical problems—whether that is real-time hand gesture tracking with OpenCV, document summarization with LLM APIs, or low-latency REST endpoints with FastAPI.
            </p>
            <p>
              Alongside engineering, I have been an active member of <strong className="text-slate-950 dark:text-white font-semibold">Prime IT Club</strong> for over two years, currently serving as <strong className="text-sky-600 dark:text-cyan-400 font-semibold">Public Relations Advisor</strong> after completing tenures as Director and Officer.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-cyan-400" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
              <span>TU IOST Class of '27</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Active Code Contributor</span>
            </div>
          </div>
        </div>

        {/* 3 Engineering Pillars (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between gap-4">
          <div className="surface-card rounded-2xl p-5 flex-1">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/30 text-sky-600 dark:text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Core CS Foundations
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Grounding in C and C++, object-oriented principles, algorithmic problem solving, and database management systems through hands-on coursework.
            </p>
          </div>

          <div className="surface-card rounded-2xl p-5 flex-1">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Practical Python & Vision
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Developing functional applications: real-time 21-point hand tracking with OpenCV & MediaPipe, document parsing tools, and FastAPI backend services.
            </p>
          </div>

          <div className="surface-card rounded-2xl p-5 flex-1">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Community Leadership
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Serving as Public Relations Advisor at Prime IT Club, helping organize campus hackathons, industry sessions, and peer developer workshops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
