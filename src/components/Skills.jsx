import React from 'react';
import { Code2, Cpu, Globe, Palette } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      accent: 'text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      items: [
        { name: 'Python', role: 'Primary Language', focus: 'AI, Vision & APIs', highlight: true },
        { name: 'C', role: 'Systems Foundation', focus: 'Pointers & Memory Architecture' },
        { name: 'C++', role: 'Object-Oriented', focus: 'Data Structures & Algorithms' },
        { name: 'JavaScript', role: 'Modern Web', focus: 'ES6+, DOM & Async Logic' },
        { name: 'PHP', role: 'Server Scripting', focus: 'Backend Database Interfacing' },
      ],
    },
    {
      title: 'Applied AI & Computer Vision',
      icon: Cpu,
      accent: 'text-blue-600 dark:text-blue-400 border-blue-500/30 bg-blue-500/10',
      items: [
        { name: 'OpenCV & MediaPipe', role: 'Computer Vision', focus: '21-Point Landmark Tracking', highlight: true },
        { name: 'Applied LLMs & NLP', role: 'Intelligent Tools', focus: 'Document Chunking & Prompt Tuning', highlight: true },
        { name: 'FastAPI & REST APIs', role: 'Modern Backends', focus: 'Async Request Handlers' },
        { name: 'Data Structures & Algorithms', role: 'CS Fundamentals', focus: 'Tree Traversals & Graph Logic' },
      ],
    },
    {
      title: 'Web Systems & Automation',
      icon: Globe,
      accent: 'text-indigo-600 dark:text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
      items: [
        { name: 'Streamlit Framework', role: 'Rapid AI Deployment', focus: 'Interactive Scientific Web Apps' },
        { name: 'React 19 & Vite', role: 'Frontend Architecture', focus: 'Modular Components & State' },
        { name: 'Tailwind CSS', role: 'Modern UI Styling', focus: 'Responsive Design & Design Systems' },
        { name: 'Web Scraping & SQLite', role: 'Data Pipelines', focus: 'BeautifulSoup4 & Structured Storage' },
      ],
    },
    {
      title: 'Design & Developer Tooling',
      icon: Palette,
      accent: 'text-violet-600 dark:text-violet-400 border-violet-500/30 bg-violet-500/10',
      items: [
        { name: 'Figma', role: 'UI/UX Design', focus: 'Interactive Prototypes & Wireframing' },
        { name: 'Adobe Photoshop', role: 'Digital Branding', focus: 'Event Visuals & Club Creatives' },
        { name: 'Git & GitHub', role: 'Version Control', focus: 'Branching, Releases & Open Source' },
        { name: 'Linux CLI & Terminal', role: 'Developer Env', focus: 'Shell Scripting & Workflows' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
        <span className="text-xs uppercase font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
          Technical Skills
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Technologies & Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            The programming languages, frameworks, and developer tools I build with regularly.
          </p>
        </div>
      </div>

      {/* Grid of 4 Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="surface-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                  <div className={`p-2 sm:p-2.5 rounded-xl border ${cat.accent}`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Module {idx + 1}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                  {cat.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className={`p-3 rounded-xl border transition-all ${
                        item.highlight
                          ? 'bg-cyan-500/10 dark:bg-cyan-950/20 border-cyan-500/30 dark:border-cyan-500/40 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          {item.name}
                          {item.highlight && (
                            <span className="text-[9px] font-mono uppercase font-extrabold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                              Core
                            </span>
                          )}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                          {item.role}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        {item.focus}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
