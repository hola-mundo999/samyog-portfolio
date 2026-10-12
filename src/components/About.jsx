import React from 'react';
import { User, BookOpen, Target, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-indigo-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-indigo-400">About Me</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
        Passionate Learner, Aspiring Engineer & Community Leader
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main story card */}
        <div className="md:col-span-2 glass-panel rounded-3xl p-6 sm:p-8 space-y-5">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            I am a <strong className="text-white font-medium">BSc CSIT student at Prime College</strong> (Class of 2027) with a deep interest in software engineering and artificial intelligence. My technical foundation started with low-level systems programming in <span className="text-indigo-400 font-mono">C</span> and <span className="text-indigo-400 font-mono">C++</span>, giving me a strong grasp of memory management, data structures, and computer architecture.
          </p>

          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Right now, I am dedicated to mastering <strong className="text-white font-medium">Python</strong> and expanding into machine learning, data handling, and backend development. Alongside programming, I have hands-on familiarity with web fundamentals (<span className="text-indigo-300 font-mono">HTML, CSS, JS, PHP</span>) and visual design using <span className="text-purple-300 font-mono">Figma</span> and <span className="text-purple-300 font-mono">Photoshop</span>.
          </p>

          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Beyond coding alone, I believe technology thrives when paired with communication. As the <strong className="text-indigo-400">PR Director of Prime IT Club</strong>, I connect student developers with opportunities, organize workshops, and foster collaborative tech learning across campus.
          </p>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <span>Prime College, Kathmandu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>BSc CSIT (Tribhuvan University)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Actively Building Projects</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights card */}
        <div className="flex flex-col gap-4">
          <div className="glass-panel rounded-2xl p-5 flex items-start gap-4 glass-panel-hover">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Academic Focus</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Algorithms, Data Structures, OOP, Database Systems & Mathematics for Computing.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-5 flex items-start gap-4 glass-panel-hover">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Current Goal</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building and open-sourcing Python & AI projects onto GitHub (<span className="text-indigo-400 font-mono">hola-mundo999</span>).
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-5 flex items-start gap-4 glass-panel-hover">
            <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Creative Eye</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience in Figma UI prototyping and Photoshop design assets for events and presentations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
