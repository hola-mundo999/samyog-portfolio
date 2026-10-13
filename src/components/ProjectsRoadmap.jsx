import React, { useState } from 'react';
import {
  Brain,
  Hand,
  Bell,
  Ticket,
  ExternalLink,
  ArrowUpRight,
  GitBranch,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectsRoadmap() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      index: '01',
      title: 'AI CSIT Study & Lecture Notes Assistant',
      filterCategory: 'AI',
      category: 'Applied AI & NLP',
      icon: Brain,
      description:
        'An intelligent academic assistant tailored for BSc CSIT students. Ingests semester PDF lecture notes, extracts topics, and generates clear summaries along with practice exam questions using Google Gemini and Groq.',
      stack: ['Python', 'Streamlit', 'pypdf', 'Gemini / Groq LLMs'],
      architecture: 'PDF Ingestion → Semantic Chunking → Context Retrieval → Exam Question Synthesis',
      demoUrl: 'https://ai-csit-studyassistant.streamlit.app/',
      repoUrl: 'https://github.com/hola-mundo999/ai-csit-study-assistant',
    },
    {
      id: 2,
      index: '02',
      title: 'AI Virtual Hand Gesture Controller',
      filterCategory: 'VISION',
      category: 'Computer Vision & HCI',
      icon: Hand,
      description:
        'A touchless computer vision control system mapping 21 spatial hand landmarks to system actions. Enables real-time slide deck navigation, volume control, and media toggling directly through a webcam.',
      stack: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit'],
      architecture: 'Webcam Stream → 21-Landmark Cartesian Vectorization → Angle Thresholding → System Event Dispatcher',
      demoUrl: 'https://ai-gesture-controller.streamlit.app',
      repoUrl: 'https://github.com/hola-mundo999/ai-gesture-controller-',
    },
    {
      id: 3,
      index: '03',
      title: 'TU CSIT Notice & Routine Alert Hub',
      filterCategory: 'BACKEND',
      category: 'Backend Automation & Scraping',
      icon: Bell,
      description:
        'Automated scraper monitoring Tribhuvan University (IOST) notice boards. Automatically parses exam schedules and results, deduplicates notices via MD5 hashing, stores to SQLite, and dispatches real-time Telegram alerts.',
      stack: ['Python', 'BeautifulSoup4', 'SQLite3', 'Telegram Bot API'],
      architecture: 'IOST Notice Poller → MD5 Content Hashing → SQLite Database → Telegram Bot Markdown Formatter',
      demoUrl: 'https://tu-csit-notice-app.streamlit.app/',
      repoUrl: 'https://github.com/hola-mundo999/tu-csit-notice-hub',
    },
    {
      id: 4,
      index: '04',
      title: 'Prime Event & QR Ticket Management System',
      filterCategory: 'BACKEND',
      category: 'REST API & Event Tools',
      icon: Ticket,
      description:
        'Full-stack event RSVP and gate ticketing solution designed for Prime IT Club hackathons. Generates cryptographic attendance tokens as base64 QR passes, paired with a real-time gate scanner terminal.',
      stack: ['FastAPI', 'Pydantic', 'qrcode / Pillow', 'Tailwind CSS'],
      architecture: 'FastAPI REST Endpoints → Cryptographic Token Generation → Base64 QR Image → Live Gate Scanner Terminal',
      demoUrl: 'https://prime-event-ticket-manager.onrender.com/',
      repoUrl: 'https://github.com/hola-mundo999/prime-event-ticket-manager',
    },
  ];

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-cyan-400" />
        <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-bold">
          Featured Projects
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Systems
          </h2>
          <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            Hands-on systems engineered across Computer Vision, Applied AI, Web Automation, and REST APIs.
          </p>
        </div>

        <a
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-all"
        >
          <GithubIcon className="w-4 h-4 text-cyan-400" />
          <span>Follow on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {[
          { key: 'ALL', label: 'All Projects' },
          { key: 'AI', label: 'Applied AI & NLP' },
          { key: 'VISION', label: 'Computer Vision' },
          { key: 'BACKEND', label: 'APIs & Backend' },
        ].map((f) => (
          <button
            type="button"
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeFilter === f.key
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 2x2 Large Architectural Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {filteredProjects.map((proj) => {
          const Icon = proj.icon;
          return (
            <div
              key={proj.id}
              className="bg-slate-950/80 rounded-3xl p-6 sm:p-7 border border-slate-800/90 hover:border-slate-700 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 group min-w-0"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 shrink-0">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Architecture Note */}
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 mb-4 min-w-0">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 block mb-1">
                    SYSTEM ARCHITECTURE
                  </span>
                  <span className="text-xs text-slate-300 leading-relaxed block break-words">
                    {proj.architecture}
                  </span>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 mb-5">
                  {proj.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    <span>Live Web Demo</span>
                  </a>

                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
                  >
                    <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Banner */}
      <div className="rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Building Open Source in Public
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore source code, commit history, and system design on GitHub.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10 cursor-pointer"
        >
          Visit github.com/hola-mundo999
        </a>
      </div>
    </section>
  );
}
