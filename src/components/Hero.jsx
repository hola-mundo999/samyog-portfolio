import React from 'react';
import { Sparkles, ArrowRight, Mail, Code2, Compass } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-md shadow-lg shadow-indigo-950/40 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>PR Director @ Prime IT Club</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">Prime College · BSc CSIT '27</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I'm <span className="gradient-accent">Samyog Sapkota</span>
        </h1>

        {/* Dynamic Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl mb-6 leading-relaxed">
          BSc CSIT student at Prime College, dedicated to mastering{' '}
          <span className="text-indigo-400 font-medium">Python</span>,{' '}
          <span className="text-purple-400 font-medium">AI/ML</span>, and building solid software foundations from algorithms to the web.
        </p>

        <p className="text-sm text-slate-400 max-w-xl mb-10 leading-normal">
          Driven by curiosity and community leadership. Open to collaborative developer projects, internships, and exploring intelligent systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.03] active:scale-95"
          >
            <span>Project Roadmap & Plans</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel hover:border-indigo-500/50 text-slate-200 hover:text-white font-medium text-sm transition-all hover:scale-[1.03] active:scale-95"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Get in Touch</span>
          </a>

          <a
            href="https://github.com/hola-mundo999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl glass-panel hover:border-slate-500 text-slate-300 hover:text-white text-sm transition-all hover:scale-[1.03]"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="font-mono text-xs">hola-mundo999</span>
          </a>

          <a
            href="https://www.linkedin.com/in/samyogsapkota/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl glass-panel hover:border-sky-500/50 text-slate-300 hover:text-sky-300 text-sm transition-all hover:scale-[1.03]"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span className="text-xs">LinkedIn</span>
          </a>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          <div className="glass-panel rounded-2xl p-4 text-left glass-panel-hover">
            <div className="text-xs text-indigo-400 font-mono mb-1">DEGREE</div>
            <div className="text-base font-semibold text-white">BSc CSIT</div>
            <div className="text-[11px] text-slate-400">Prime College (TU)</div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-left glass-panel-hover">
            <div className="text-xs text-purple-400 font-mono mb-1">GRADUATION</div>
            <div className="text-base font-semibold text-white">2027</div>
            <div className="text-[11px] text-slate-400">Class of 2027</div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-left glass-panel-hover">
            <div className="text-xs text-pink-400 font-mono mb-1">FOCUS</div>
            <div className="text-base font-semibold text-white">Python & AI</div>
            <div className="text-[11px] text-slate-400">Software & ML</div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-left glass-panel-hover">
            <div className="text-xs text-sky-400 font-mono mb-1">COMMUNITY</div>
            <div className="text-base font-semibold text-white">PR Director</div>
            <div className="text-[11px] text-slate-400">Prime IT Club</div>
          </div>
        </div>
      </div>
    </section>
  );
}
