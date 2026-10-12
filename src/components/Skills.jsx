import React from 'react';
import { Code, Cpu, Globe, Palette, GitBranch, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
      skills: [
        { name: 'Python', status: 'Active Focus', level: 'Learning & Building', highlight: true },
        { name: 'C', status: 'Solid Base', level: 'Pointers & Systems', highlight: false },
        { name: 'C++', status: 'Solid Base', level: 'OOP & Data Structures', highlight: false },
        { name: 'JavaScript', status: 'Proficient', level: 'ES6+ & Web Logic', highlight: false },
        { name: 'PHP', status: 'Familiar', level: 'Backend Scripting', highlight: false },
      ],
    },
    {
      title: 'Web & Development',
      icon: Globe,
      badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
      skills: [
        { name: 'HTML5 & CSS3', status: 'Proficient', level: 'Responsive Layouts & Flex/Grid' },
        { name: 'Tailwind CSS', status: 'Exploring', level: 'Modern Utility Styling' },
        { name: 'React', status: 'Learning', level: 'Component-driven Architecture' },
        { name: 'Git & GitHub', status: 'Core Tool', level: 'Branches, Commits & Collaboration' },
      ],
    },
    {
      title: 'AI / ML Exploration',
      icon: Cpu,
      badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
      skills: [
        { name: 'Python for AI/Data', status: 'In Progress', level: 'Scripting, Automation, Data Processing', highlight: true },
        { name: 'Machine Learning Concepts', status: 'Studying', level: 'Supervised Learning & Algorithms' },
        { name: 'Modern AI APIs', status: 'Exploring', level: 'Integrating Intelligent Models' },
        { name: 'Problem Solving', status: 'Daily Practice', level: 'Algorithmic Thinking & CSIT Math' },
      ],
    },
    {
      title: 'Design & Creative Tools',
      icon: Palette,
      badgeColor: 'border-pink-500/30 text-pink-400 bg-pink-500/10',
      skills: [
        { name: 'Figma', status: 'Familiar', level: 'UI/UX Wireframing & App Mockups' },
        { name: 'Adobe Photoshop', status: 'Familiar', level: 'Event Creatives, PR Posters & Graphics' },
        { name: 'VS Code & Linux CLI', status: 'Daily Driver', level: 'Developer Environments' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-purple-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-purple-400">Skills & Tech Stack</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Toolkit & Learning Path
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Core foundations combined with active exploration in Python and AI engineering.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span>Open to pairing & building new stacks</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-6 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl border ${cat.badgeColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-2xl border transition-all ${
                        skill.highlight
                          ? 'bg-indigo-950/30 border-indigo-500/30 shadow-sm'
                          : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                          {skill.name}
                          {skill.highlight && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                              HOT
                            </span>
                          )}
                        </span>
                        <span className="text-xs font-mono text-indigo-400/90">{skill.status}</span>
                      </div>
                      <div className="text-xs text-slate-400">{skill.level}</div>
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
