import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-950/90 border border-indigo-400/50 text-indigo-200 text-xs font-semibold mb-8 backdrop-blur-md shadow-lg shadow-indigo-950/50">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>PR Director @ Prime IT Club</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-200">Prime College · BSc CSIT '27</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
          Hi, I'm <span className="gradient-accent">Samyog Sapkota</span>
        </h1>

        {/* Dynamic Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-100 font-normal max-w-2xl mb-6 leading-relaxed">
          BSc CSIT student at Prime College, mastering{' '}
          <span className="text-indigo-300 font-semibold underline decoration-indigo-500/50">Python</span>,{' '}
          <span className="text-purple-300 font-semibold underline decoration-purple-500/50">AI/ML</span>, and building high-performance software from algorithms to the web.
        </p>

        <p className="text-sm sm:text-base text-slate-200 max-w-xl mb-10 leading-relaxed font-light">
          Driven by curiosity and community leadership. Open to collaborative developer projects, internships, and exploring intelligent systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explore Projects & Demos</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel hover:border-indigo-400 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Get in Touch</span>
          </a>

          <a
            href="https://github.com/hola-mundo999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl glass-panel hover:border-slate-400 text-slate-100 hover:text-white text-sm transition-all hover:scale-105 cursor-pointer"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span className="font-mono text-xs font-semibold">hola-mundo999</span>
          </a>

          <a
            href="https://www.linkedin.com/in/samyogsapkota/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl glass-panel hover:border-sky-400 text-sky-300 hover:text-sky-200 text-sm transition-all hover:scale-105 cursor-pointer"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold">LinkedIn</span>
          </a>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          <div className="glass-panel rounded-2xl p-4 text-left glass-panel-hover border border-slate-700/80">
            <div className="text-xs text-indigo-300 font-mono font-bold mb-1">DEGREE</div>
            <div className="text-base font-bold text-white">BSc CSIT</div>
            <div className="text-xs text-slate-200">Prime College (TU)</div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-left glass-panel-hover border border-slate-700/80">
            <div className="text-xs text-purple-300 font-mono font-bold mb-1">GRADUATION</div>
            <div className="text-base font-bold text-white">2027</div>
            <div className="text-xs text-slate-200">Class of 2027</div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-left glass-panel-hover border border-slate-700/80">
            <div className="text-xs text-pink-300 font-mono font-bold mb-1">FOCUS</div>
            <div className="text-base font-bold text-white">Python & AI</div>
            <div className="text-xs text-slate-200">Software & ML</div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-left glass-panel-hover border border-slate-700/80">
            <div className="text-xs text-sky-300 font-mono font-bold mb-1">COMMUNITY</div>
            <div className="text-base font-bold text-white">PR Director</div>
            <div className="text-xs text-slate-200">Prime IT Club</div>
          </div>
        </div>
      </div>
    </section>
  );
}
