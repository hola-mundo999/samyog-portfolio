import React from 'react';
import { Sparkles, Terminal, Code2, Cpu, Globe, Award } from 'lucide-react';

export default function TechMarquee() {
  const items = [
    { text: 'Python 3.12 & Modern Backends', icon: Terminal },
    { text: 'Computer Vision (OpenCV & MediaPipe)', icon: Cpu },
    { text: 'FastAPI High-Performance REST APIs', icon: Code2 },
    { text: 'Prime IT Club — PR Advisor', icon: Award },
    { text: 'Tribhuvan University — BSc CSIT Class of 2027', icon: Sparkles },
    { text: 'Applied LLMs & Semantic Retrieval', icon: Globe },
    { text: 'Low-Level Systems & DSA (C/C++)', icon: Code2 },
    { text: 'React 19 & Tailwind CSS v4 Architecture', icon: Globe },
  ];

  // Duplicate items for a seamless infinite loop
  const marqueeItems = [...items, ...items];

  return (
    <div
      aria-label="Core Competencies Stream"
      className="relative w-full overflow-hidden py-4 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950/50 backdrop-blur-sm select-none"
    >
      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--bg-canvas)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--bg-canvas)] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8">
        {marqueeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 shrink-0 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs transition-colors hover:text-cyan-600 dark:hover:text-cyan-300"
            >
              <Icon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>{item.text}</span>
              <span className="text-slate-300 dark:text-slate-700 ml-1">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
