import React from 'react';
import { BookOpen, Target, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-indigo-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-bold">About Me</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10 tracking-tight">
        Passionate Learner, Aspiring Engineer & Community Leader
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main story card */}
        <div className="md:col-span-2 glass-panel rounded-3xl p-6 sm:p-8 space-y-5 border border-slate-700/80">
          <p className="text-slate-100 leading-relaxed text-sm sm:text-base">
            I am a <strong className="text-white font-semibold underline decoration-indigo-500/50">BSc CSIT student at Prime College</strong> (Class of 2027) with a deep focus on software engineering and artificial intelligence. My technical foundation started with low-level systems programming in <span className="text-indigo-300 font-mono font-semibold">C</span> and <span className="text-indigo-300 font-mono font-semibold">C++</span>, giving me a solid grasp of memory management, data structures, and computer architecture.
          </p>

          <p className="text-slate-100 leading-relaxed text-sm sm:text-base">
            Currently, I am dedicated to mastering <strong className="text-white font-semibold underline decoration-purple-500/50">Python</strong>, building machine learning models, and crafting high-performance backends. Alongside systems code, I have hands-on experience in modern web stacks (<span className="text-indigo-200 font-mono">HTML, CSS, JS, PHP, React</span>) and UI/UX design with <span className="text-purple-300 font-mono font-medium">Figma</span> and <span className="text-purple-300 font-mono font-medium">Photoshop</span>.
          </p>

          <p className="text-slate-100 leading-relaxed text-sm sm:text-base">
            Technology thrives when paired with effective leadership. As the <strong className="text-indigo-300 font-semibold">PR Director of Prime IT Club</strong>, I connect student developers with industry mentors, organize hackathons and bootcamps, and foster technical collaboration across campus.
          </p>

          <div className="pt-4 border-t border-slate-700/80 flex flex-wrap gap-4 text-xs font-mono text-slate-200">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span className="text-slate-200 font-medium">Prime College, Kathmandu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span className="text-slate-200 font-medium">BSc CSIT (Tribhuvan University)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-emerald-300 font-semibold">Actively Building Projects</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights card */}
        <div className="flex flex-col gap-4">
          <div className="glass-panel rounded-2xl p-5 flex items-start gap-4 glass-panel-hover border border-slate-700/80">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Academic Focus</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Algorithms, Data Structures, OOP, Database Systems & Mathematics for Computing.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-5 flex items-start gap-4 glass-panel-hover border border-slate-700/80">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Current Goal</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Publishing open-source Python, Computer Vision, and AI projects on GitHub (<span className="text-indigo-300 font-mono font-semibold">hola-mundo999</span>).
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-5 flex items-start gap-4 glass-panel-hover border border-slate-700/80">
            <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/40 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Creative Eye</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Figma UI prototyping and Photoshop digital assets for tech events and promotional releases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
