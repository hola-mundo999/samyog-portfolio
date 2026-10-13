import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 max-w-4xl mx-auto text-center">
      {/* Clean Status Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium mb-8 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Available for projects & internships</span>
      </div>

      {/* Main Elegant Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
        Hi, I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
          Samyog Sapkota
        </span>
        .<br />
        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-200 block mt-2 font-sans tracking-tight">
          Building Intelligent Systems & Vision AI
        </span>
      </h1>

      {/* Natural, Clear Subtitle */}
      <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        BSc CSIT student at Prime College, Kathmandu (TU Class of '27) & PR Director at Prime IT Club. Engineering real-time computer vision pipelines, document NLP tools, and high-performance Python backends.
      </p>

      {/* Tasteful Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-400/20 cursor-pointer"
        >
          <span>Explore My Work</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Mail className="w-4 h-4 text-cyan-400" />
          <span>Let's Connect</span>
        </a>

        <a
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 cursor-pointer"
          title="GitHub (@hola-mundo999)"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        <a
          href="https://www.linkedin.com/in/samyogsapkota/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all duration-200 hover:scale-105 cursor-pointer"
          title="LinkedIn Profile"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        <a
          href="mailto:samyog.sapkota1@gmail.com"
          aria-label="Direct Email"
          className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all duration-200 hover:scale-105 cursor-pointer"
          title="Email (samyog.sapkota1@gmail.com)"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="flex flex-col items-center justify-center text-slate-400 text-xs">
        <span className="mb-2">Scroll to explore</span>
        <div className="w-4 h-7 rounded-full border border-slate-800 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
