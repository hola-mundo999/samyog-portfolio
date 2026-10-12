import React from 'react';
import { Sparkles, Hammer, GitPullRequest, ArrowUpRight, Brain, Calendar, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectsRoadmap() {
  const projects = [
    {
      id: 1,
      title: 'AI Lecture & Document Study Companion',
      category: 'AI / Machine Learning',
      status: 'LIVE ON GITHUB',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20',
      icon: Brain,
      description:
        'An intelligent study assistant for BSc CSIT students to query semester PDF notes, summarize complex topics, and generate practice exam questions using Python and modern NLP.',
      stack: ['Python', 'Streamlit', 'pypdf', 'Google Gemini / Groq'],
      architecture: 'Document chunking -> Context grounding -> Academic exam & Q&A generation.',
      phase: 'Completed & Running',
      repoUrl: 'https://github.com/hola-mundo999/ai-csit-study-assistant',
    },
    {
      id: 2,
      title: 'Prime IT Club Community & Event Portal',
      category: 'Full-Stack Web App',
      status: 'Target Build #2',
      badgeClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      icon: Calendar,
      description:
        'A dedicated web platform designed for Prime College tech community to handle workshop registrations, speaker spotlights, hackathon announcements, and resources.',
      stack: ['React / PHP', 'Tailwind CSS', 'PostgreSQL / MySQL', 'Figma Prototyping'],
      architecture: 'Event ticketing, member directory, announcement feeds, and admin panel.',
      phase: 'Design & Wireframing',
    },
    {
      id: 3,
      title: 'Interactive Algorithm & DS Sandbox',
      category: 'CS Fundamentals & Interactive Web',
      status: 'Target Build #3',
      badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      icon: Layers,
      description:
        'An educational visualizer bridging C++ data structure logic with dynamic browser animations, explaining sorting algorithms, linked lists, trees, and pathfinding.',
      stack: ['C++', 'JavaScript Canvas', 'Algorithms', 'Tailwind CSS'],
      architecture: 'Step-by-step memory pointer animation and time-complexity comparisons.',
      phase: 'Core Logic Planning',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-pink-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-pink-400">Featured Builds</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects & Development Roadmap
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Currently moving from foundational learning into building public, open-source projects. Here is the active pipeline of applications being developed.
          </p>
        </div>

        <a
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-200 transition-all hover:scale-[1.02]"
        >
          <GithubIcon className="w-4 h-4 text-white" />
          <span>Follow along on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {projects.map((proj) => {
          const Icon = proj.icon;
          return (
            <div
              key={proj.id}
              className="glass-panel rounded-3xl p-6 flex flex-col justify-between glass-panel-hover group"
            >
              <div>
                {/* Header status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span
                    className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${proj.badgeClass}`}
                  >
                    {proj.status}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 mb-1">
                  {proj.category}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-900 mb-4">
                  <span className="text-[10px] font-mono text-indigo-300 block mb-1">
                    ARCHITECTURE:
                  </span>
                  <span className="text-[11px] text-slate-400 leading-tight block">
                    {proj.architecture}
                  </span>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 mb-3">
                  {proj.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {proj.repoUrl && (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-medium transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository on GitHub &rarr;</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Callout Banner */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-950/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
            <GitPullRequest className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Building in Public on GitHub
            </h4>
            <p className="text-xs text-slate-300 max-w-lg">
              Starting from scratch as a 2nd year CSIT student. Every repository, commit history, and pull request will be documented transparently.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
        >
          Visit github.com/hola-mundo999
        </a>
      </div>
    </section>
  );
}
