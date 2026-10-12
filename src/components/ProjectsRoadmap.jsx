import React from 'react';
import {
  Brain,
  Hand,
  Bell,
  Ticket,
  ExternalLink,
  ArrowUpRight,
  GitBranch,
  Layers,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectsRoadmap() {
  const projects = [
    {
      id: 1,
      index: '01',
      title: 'AI CSIT Study & Lecture Notes Assistant',
      category: 'Applied AI / NLP & LLMs',
      status: 'VERIFIED LIVE',
      accent: 'cyan',
      icon: Brain,
      description:
        'An intelligent academic assistant tailored for BSc CSIT semester courses. Ingests dense lecture PDFs, performs context-aware document chunking, and generates topic summaries along with rigorous practice exam questions via Google Gemini and Groq.',
      stack: ['Python', 'Streamlit', 'pypdf', 'Google Gemini / Groq'],
      architecture: 'PDF Extraction → Chunk Indexing → Semantic Context Retrieval → Exam Question Synthesizer',
      demoUrl: 'https://ai-csit-studyassistant.streamlit.app/',
      repoUrl: 'https://github.com/hola-mundo999/ai-csit-study-assistant',
    },
    {
      id: 2,
      index: '02',
      title: 'AI Virtual Hand Gesture Controller',
      category: 'Computer Vision & HCI',
      status: 'VERIFIED LIVE',
      accent: 'blue',
      icon: Hand,
      description:
        'A real-time, touchless Human-Computer Interaction interface. Leverages MediaPipe to track 21 three-dimensional hand landmarks at high frame rates, computing Euclidean vector angles to dispatch virtual slide transitions, system volume scaling, and media controls.',
      stack: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit'],
      architecture: 'Webcam Stream → 21-Landmark Cartesian Vectorization → Angle Thresholding → System Event Dispatcher',
      demoUrl: 'https://ai-gesture-controller.streamlit.app',
      repoUrl: 'https://github.com/hola-mundo999/ai-gesture-controller-',
    },
    {
      id: 3,
      index: '03',
      title: 'TU CSIT Notice & Routine Alert Hub',
      category: 'Backend Automation & Web Scraping',
      status: 'ACTIVE PIPELINE',
      accent: 'indigo',
      icon: Bell,
      description:
        'Automated background scraper tracking Tribhuvan University (IOST) notice boards. Filters and categorizes upcoming exam schedules and published results, utilizing cryptographic MD5 hashing for deduplication, persisting to SQLite, and dispatching real-time Telegram alerts.',
      stack: ['Python', 'BeautifulSoup4', 'SQLite', 'Telegram Bot API'],
      architecture: 'IOST Notice Poller → MD5 Content Hashing → SQLite Database → Telegram Bot Markdown Formatter',
      demoUrl: 'https://tu-csit-notice-app.streamlit.app/',
      repoUrl: 'https://github.com/hola-mundo999/tu-csit-notice-hub',
    },
    {
      id: 4,
      index: '04',
      title: 'Prime Event & QR Ticket Management System',
      category: 'Backend REST API & Event Tool',
      status: 'VERIFIED LIVE',
      accent: 'emerald',
      icon: Ticket,
      description:
        'A production event RSVP and gate ticketing solution built for Prime IT Club hackathons and workshops. Issues cryptographically hashed attendance tokens rendered as base64 dynamic QR passes, featuring a dedicated real-time gate terminal for check-in verification.',
      stack: ['Python', 'FastAPI', 'Pydantic', 'qrcode / Pillow'],
      architecture: 'FastAPI REST Endpoints → Cryptographic Token Generation → Base64 QR Image → Live Gate Scanner Terminal',
      demoUrl: 'https://prime-event-ticket-manager.onrender.com/',
      repoUrl: 'https://github.com/hola-mundo999/prime-event-ticket-manager',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[1px] bg-cyan-400" />
        <span className="text-[11px] uppercase font-mono tracking-widest text-cyan-400 font-bold">
          03 // Featured Systems & Production Builds
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineered Systems & Live Deployments
          </h2>
          <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            Real software systems engineered in Python across Computer Vision, Applied AI, Web Automation, and High-Performance APIs.
          </p>
        </div>

        <a
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-200 hover:text-white transition-all hover:scale-[1.02]"
        >
          <GithubIcon className="w-4 h-4 text-cyan-400" />
          <span>github.com/hola-mundo999</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

      {/* 2x2 Large Architectural Cards Grid */}
      <div className="grid md:grid-cols-2 gap-7 mb-12">
        {projects.map((proj) => {
          const Icon = proj.icon;
          return (
            <div
              key={proj.id}
              className="surface-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border-slate-800/80 group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-extrabold text-cyan-400">
                      {proj.index}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block mr-1.5 animate-pulse" />
                    {proj.status}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1">
                  {proj.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* System Architecture Blueprint */}
                <div className="p-3.5 rounded-2xl bg-[#030611] border border-slate-800/90 mb-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-cyan-400 mb-1">
                    <Layers className="w-3 h-3" />
                    <span>SYSTEM ARCHITECTURE:</span>
                  </div>
                  <span className="text-xs text-slate-300 font-mono leading-relaxed block">
                    {proj.architecture}
                  </span>
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-5">
                  {proj.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Dual Action Buttons: Live Web Demo & View Code */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Web Demo</span>
                  </a>

                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Callout Banner */}
      <div className="surface-card rounded-3xl p-6 sm:p-8 border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Building Open Source in Public
            </h4>
            <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
              Explore full Git commit histories, technical issue trackers, and software design benchmarks on GitHub.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10 cursor-pointer"
        >
          Visit github.com/hola-mundo999
        </a>
      </div>
    </section>
  );
}
