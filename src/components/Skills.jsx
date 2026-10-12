import React from 'react';
import { Code, Cpu, Globe, Palette } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      badgeColor: 'border-indigo-400/40 text-indigo-300 bg-indigo-500/20',
      skills: [
        { name: 'Python', status: 'Active Focus', level: 'Learning & Building AI Systems', highlight: true },
        { name: 'C', status: 'Solid Base', level: 'Pointers & Systems Programming', highlight: false },
        { name: 'C++', status: 'Solid Base', level: 'OOP & Data Structures (DSA)', highlight: false },
        { name: 'JavaScript', status: 'Proficient', level: 'ES6+, DOM & Async Logic', highlight: false },
        { name: 'PHP', status: 'Familiar', level: 'Server-side Backend Scripting', highlight: false },
      ],
    },
    {
      title: 'Web & Development',
      icon: Globe,
      badgeColor: 'border-sky-400/40 text-sky-300 bg-sky-500/20',
      skills: [
        { name: 'HTML5 & CSS3', status: 'Proficient', level: 'Responsive Layouts, Flexbox & Grid' },
        { name: 'Tailwind CSS', status: 'Core Tool', level: 'Modern High-Performance Styling' },
        { name: 'React', status: 'Building', level: 'Component Architecture & Vite' },
        { name: 'Git & GitHub', status: 'Core Tool', level: 'Branching, Commits & Collaboration' },
      ],
    },
    {
      title: 'AI / ML & Computer Vision',
      icon: Cpu,
      badgeColor: 'border-purple-400/40 text-purple-300 bg-purple-500/20',
      skills: [
        { name: 'Applied AI & LLMs', status: 'Building', level: 'Document Analysis, Prompt Engineering', highlight: true },
        { name: 'Computer Vision (OpenCV)', status: 'Building', level: 'Hand Tracking & Gesture Recognition', highlight: true },
        { name: 'FastAPI & REST APIs', status: 'Building', level: 'Low-latency Backend Endpoints' },
        { name: 'Problem Solving (DSA)', status: 'Daily Practice', level: 'Algorithmic Thinking & CSIT Syllabus' },
      ],
    },
    {
      title: 'Design & Creative Tools',
      icon: Palette,
      badgeColor: 'border-pink-400/40 text-pink-300 bg-pink-500/20',
      skills: [
        { name: 'Figma', status: 'Proficient', level: 'UI/UX Wireframing & App Mockups' },
        { name: 'Adobe Photoshop', status: 'Proficient', level: 'Event Creatives, PR Posters & Graphics' },
        { name: 'VS Code & Linux CLI', status: 'Daily Driver', level: 'Modern Developer Environments' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-purple-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-purple-400 font-bold">Skills & Tech Stack</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Toolkit & Active Horizons
          </h2>
          <p className="text-slate-200 text-sm mt-1">
            Core computer science foundations paired with practical Python and web systems.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          <span>Open to pairing & building new stacks</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-6 glass-panel-hover flex flex-col justify-between border border-slate-700/80"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl border ${cat.badgeColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3.5 rounded-2xl border transition-all ${
                        skill.highlight
                          ? 'bg-indigo-950/60 border-indigo-500/50 shadow-sm'
                          : 'bg-slate-900/90 border-slate-700/80 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-white flex items-center gap-2">
                          {skill.name}
                          {skill.highlight && (
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/40">
                              ACTIVE
                            </span>
                          )}
                        </span>
                        <span className="text-xs font-mono font-medium text-indigo-300">{skill.status}</span>
                      </div>
                      <div className="text-xs text-slate-300">{skill.level}</div>
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
