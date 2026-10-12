import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-32 pb-12 px-4 max-w-5xl mx-auto">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/70 text-slate-200 text-xs font-mono mb-8 backdrop-blur-md shadow-lg shadow-black/40">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 font-semibold">PR Director @ Prime IT Club</span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-300">BSc CSIT '27 · Prime College</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">Samyog</span>
        </h1>

        {/* Dynamic Role & Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-medium max-w-3xl mb-6 leading-snug">
          Software & Applied AI Engineer building high-performance{' '}
          <span className="text-cyan-400 font-semibold">Python backends</span>,{' '}
          <span className="text-blue-400 font-semibold">Computer Vision</span>, and intelligent systems.
        </p>

        {/* Editorial Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-12 leading-relaxed font-normal">
          BSc CSIT student at Prime College, Kathmandu. Rooted in rigorous computer science foundations from low-level C/C++ memory architectures to modern distributed scraping, NLP document reasoning, and real-time HCI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <a
            href="#projects"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Explore Systems & Demos</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl surface-card hover:border-slate-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Direct Contact</span>
          </a>

          <a
            href="https://github.com/hola-mundo999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl surface-card hover:border-slate-500 text-slate-200 hover:text-white text-xs font-mono transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            title="GitHub (@hola-mundo999)"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span className="font-semibold">hola-mundo999</span>
          </a>

          <a
            href="https://www.linkedin.com/in/samyogsapkota/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl surface-card hover:border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-semibold transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* 4 Architectural Focus Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full max-w-4xl">
          <div className="surface-card rounded-2xl p-4 text-left border-slate-800/80">
            <div className="text-[11px] font-mono font-bold text-cyan-400 mb-1">01 // SYSTEMS</div>
            <div className="text-base font-bold text-white">C & C++ / DSA</div>
            <div className="text-xs text-slate-300 mt-0.5">Algorithms & Memory</div>
          </div>

          <div className="surface-card rounded-2xl p-4 text-left border-slate-800/80">
            <div className="text-[11px] font-mono font-bold text-blue-400 mb-1">02 // APPLIED AI</div>
            <div className="text-base font-bold text-white">Vision & LLMs</div>
            <div className="text-xs text-slate-300 mt-0.5">OpenCV & Document NLP</div>
          </div>

          <div className="surface-card rounded-2xl p-4 text-left border-slate-800/80">
            <div className="text-[11px] font-mono font-bold text-indigo-400 mb-1">03 // BACKEND</div>
            <div className="text-base font-bold text-white">FastAPI & Python</div>
            <div className="text-xs text-slate-300 mt-0.5">REST APIs & SQLite</div>
          </div>

          <div className="surface-card rounded-2xl p-4 text-left border-slate-800/80">
            <div className="text-[11px] font-mono font-bold text-emerald-400 mb-1">04 // LEADERSHIP</div>
            <div className="text-base font-bold text-white">Prime IT Club</div>
            <div className="text-xs text-slate-300 mt-0.5">PR Director & Events</div>
          </div>
        </div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <div className="flex flex-col items-center justify-center pt-8 text-slate-400 text-[10px] font-mono tracking-widest uppercase">
        <span className="mb-2">SCROLL TO EXPLORE</span>
        <div className="w-5 h-8 rounded-full border border-slate-700/80 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
