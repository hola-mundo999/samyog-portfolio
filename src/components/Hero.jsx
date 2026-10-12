import React from 'react';
import { ArrowRight, Mail, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between pt-28 pb-12 px-4 max-w-5xl mx-auto">
      {/* Top Cybernetic HUD Header Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400 pb-8 border-b border-slate-900">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
          <span className="text-white font-semibold tracking-wider">SYS_STATE: ONLINE</span>
          <span className="text-slate-600">//</span>
          <span className="text-cyan-400 font-medium">KATHMANDU (27.71° N, 85.32° E)</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>4 PRODUCTION BUILDS LIVE</span>
          </div>
          <span className="text-slate-800 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>ZERO CLUNKY AUDIO</span>
          </div>
        </div>
      </div>

      {/* Hero Centerpiece: Monumental Typography */}
      <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-6 shadow-sm shadow-cyan-500/10">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Software Engineer & Applied AI Specialist</span>
        </div>

        {/* Monumental Hero Headline */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white mb-6 uppercase leading-none select-none">
          SAMYOG
        </h1>

        {/* Dynamic Role & Core Thesis */}
        <p className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 max-w-3xl mb-6 tracking-tight leading-snug">
          Architecting High-Throughput Python Backends, Computer Vision & Intelligent NLP Systems.
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-12 leading-relaxed font-normal">
          Rigorous computer science fundamentals engineered into living software. Building real-time 21-landmark hand gesture controllers, semantic document chunking engines, and cryptographic QR ticket verification platforms.
        </p>

        {/* Modern Rocking CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <a
            href="#projects"
            className="flex items-center gap-2.5 px-7 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-400/25 hover:shadow-cyan-400/40 hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            <span>Launch Live Demos (4)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-4 rounded-xl surface-card hover:border-slate-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Direct Transmission</span>
          </a>

          <a
            href="https://github.com/hola-mundo999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 px-5 py-4 rounded-xl surface-card hover:border-slate-500 text-slate-200 hover:text-white text-xs font-mono transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span className="font-semibold">hola-mundo999</span>
          </a>

          <a
            href="https://www.linkedin.com/in/samyogsapkota/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 px-5 py-4 rounded-xl surface-card hover:border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-semibold transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* 4 Technical Pillar Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full max-w-4xl text-left">
          <div className="surface-card rounded-2xl p-4 border-slate-800/90">
            <span className="text-[10px] font-mono font-bold text-cyan-400 block mb-1">01 // SYSTEMS</span>
            <div className="text-sm font-bold text-white">C / C++ & DSA</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Memory & Algorithms</div>
          </div>

          <div className="surface-card rounded-2xl p-4 border-slate-800/90">
            <span className="text-[10px] font-mono font-bold text-blue-400 block mb-1">02 // VISION & HCI</span>
            <div className="text-sm font-bold text-white">MediaPipe & OpenCV</div>
            <div className="text-[11px] text-slate-400 mt-0.5">21 Spatial Landmarks</div>
          </div>

          <div className="surface-card rounded-2xl p-4 border-slate-800/90">
            <span className="text-[10px] font-mono font-bold text-indigo-400 block mb-1">03 // APPLIED NLP</span>
            <div className="text-sm font-bold text-white">Gemini & Groq</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Document Intelligence</div>
          </div>

          <div className="surface-card rounded-2xl p-4 border-slate-800/90">
            <span className="text-[10px] font-mono font-bold text-emerald-400 block mb-1">04 // BACKENDS</span>
            <div className="text-sm font-bold text-white">FastAPI & SQLite</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Cryptographic Endpoints</div>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Scroll Hook */}
      <div className="flex flex-col items-center justify-center pt-6 text-slate-400 text-[10px] font-mono tracking-widest uppercase">
        <span className="mb-2">EXPLORE ARCHITECTURE</span>
        <div className="w-4 h-7 rounded-full border border-slate-800 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
