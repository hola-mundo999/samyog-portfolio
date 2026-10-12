import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 max-w-4xl mx-auto text-center">
      {/* Clean Status Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium mb-8 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Available for projects & collaboration</span>
      </div>

      {/* Main Elegant Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
        Hi, I'm <span className="text-cyan-400">Samyog</span>.<br />
        Building intelligent software & AI systems.
      </h1>

      {/* Natural, Clear Subtitle */}
      <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        BSc CSIT student at Prime College, Kathmandu. Engineering real-time Computer Vision pipelines, intelligent document NLP tools, and high-performance Python web applications.
      </p>

      {/* Tasteful Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-white/10 cursor-pointer"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Mail className="w-4 h-4 text-cyan-400" />
          <span>Get in Touch</span>
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
