import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 max-w-4xl mx-auto text-center">
      {/* Clean Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium mb-7 backdrop-blur-md shadow-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Open for software engineering internships & projects</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15]">
        Hi, I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-300">
          Samyog Sapkota
        </span>
        .<br />
        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200 block mt-2 tracking-tight">
          CS Student & Software Developer
        </span>
      </h1>

      {/* Clear, Natural Subtitle */}
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        BSc CSIT student at Prime College, Kathmandu (TU Class of '27) and Public Relations Advisor at Prime IT Club. I build practical software with Python, develop computer vision tools with OpenCV, and create clean web backends with strong fundamentals in C and C++.
      </p>

      {/* Calls to Action */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-slate-950 font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-slate-900/10 dark:shadow-cyan-400/20 cursor-pointer"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-700/80 dark:text-white font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
        >
          <Mail className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
          <span>Contact Me</span>
        </a>

        <a
          href="https://github.com/hola-mundo999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-950 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white transition-all duration-200 hover:scale-105 shadow-sm cursor-pointer"
          title="GitHub (@hola-mundo999)"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        <a
          href="https://www.linkedin.com/in/samyogsapkota/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-sky-600 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-cyan-400 transition-all duration-200 hover:scale-105 shadow-sm cursor-pointer"
          title="LinkedIn Profile"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        <a
          href="mailto:samyog.sapkota1@gmail.com"
          aria-label="Direct Email"
          className="p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-sky-600 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-cyan-400 transition-all duration-200 hover:scale-105 shadow-sm cursor-pointer"
          title="Email (samyog.sapkota1@gmail.com)"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-xs">
        <span className="mb-2">Scroll to explore</span>
        <div className="w-4 h-7 rounded-full border border-slate-300 dark:border-slate-800 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-sky-500 dark:bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
