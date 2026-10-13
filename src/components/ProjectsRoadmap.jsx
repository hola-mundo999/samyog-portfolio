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
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon } from './SocialIcons';
import { useSound } from '../context/SoundContext';
import SpotlightCard from './ui/SpotlightCard';

function ProjectCard({ proj, playClick }) {
  const Icon = proj.icon;

  return (
    <SpotlightCard className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 h-full group shadow-sm hover:shadow-xl dark:hover:shadow-cyan-500/5 transition-shadow duration-300">
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shrink-0">
              {proj.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
            {proj.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
            {proj.description}
          </p>
        </div>

        <div>
          {/* Architecture Pipeline Callout */}
          <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 mb-4 min-w-0">
            <span className="text-[10px] font-mono font-bold text-sky-600 dark:text-cyan-400 block mb-1">
              SYSTEM ARCHITECTURE
            </span>
            <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed block break-words font-mono text-[11px]">
              {proj.architecture}
            </span>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/80 mb-5">
            {proj.stack.map((t, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={proj.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-white dark:text-slate-950 text-xs font-bold transition-colors shadow-md shadow-sky-600/20 dark:shadow-cyan-400/20 cursor-pointer text-center min-h-[44px]"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span>Live Web Demo</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={proj.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white text-xs font-semibold transition-colors cursor-pointer text-center min-h-[44px]"
            >
              <GithubIcon className="w-3.5 h-3.5 shrink-0" />
              <span>View Code</span>
            </motion.a>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function ProjectsRoadmap() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const { playClick } = useSound();

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
      demoUrl: 'https://ai-csit-study-assistant.streamlit.app/',
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

  const handleFilterClick = (key) => {
    setActiveFilter(key);
    playClick();
  };

  const filterTabs = [
    { key: 'ALL', label: 'All Projects' },
    { key: 'AI', label: 'Applied AI & NLP' },
    { key: 'VISION', label: 'Computer Vision' },
    { key: 'BACKEND', label: 'APIs & Backend' },
  ];

  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-sky-500 dark:bg-cyan-400" />
        <span className="text-xs uppercase font-mono tracking-widest text-sky-600 dark:text-cyan-400 font-bold">
          Featured Projects
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            Hands-on systems engineered across Computer Vision, Applied AI, Web Automation, and REST APIs.
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all shadow-xs min-h-[44px]"
        >
          <GithubIcon className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
          <span>Follow on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
        </motion.a>
      </div>

      {/* Filter Tabs with Motion Layout Indicator */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap mb-8">
        {filterTabs.map((f) => {
          const isSelected = activeFilter === f.key;
          return (
            <button
              type="button"
              key={f.key}
              onClick={() => handleFilterClick(f.key)}
              className={`relative whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-medium transition-colors shrink-0 cursor-pointer min-h-[44px] flex items-center ${
                isSelected
                  ? 'text-white dark:text-slate-950 font-bold'
                  : 'bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="active-project-filter"
                  className="absolute inset-0 bg-sky-500 dark:bg-cyan-400 rounded-xl shadow-md shadow-sky-500/20 dark:shadow-cyan-400/20 -z-0"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          );
        })}
      </div>

      {/* 2x2 Large Architectural Cards Grid with 21st.dev Spotlight and Motion AnimatePresence */}
      <motion.div
        layout
        className="grid md:grid-cols-2 gap-6 mb-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard proj={proj} playClick={playClick} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub Open Source Banner */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 15 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/30 text-sky-600 dark:text-cyan-400 shrink-0">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Building Open Source in Public
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore source code, commit history, and system design on GitHub.
            </p>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-slate-950 font-bold text-xs transition-colors shadow-sm cursor-pointer shrink-0"
        >
          Visit github.com/hola-mundo999
        </motion.a>
      </motion.div>
    </section>
  );
}
