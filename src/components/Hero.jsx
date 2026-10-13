import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, MapPin, Clock, Volume2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useSound } from '../context/SoundContext';

export default function Hero() {
  const { playGreeting } = useSound();
  const [localTime, setLocalTime] = useState('');

  // Live Kathmandu Local Time
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kathmandu',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setLocalTime(timeStr);
      } catch {
        setLocalTime('');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 max-w-4xl mx-auto text-center">
      {/* Top Lively Pills: Status + Kathmandu Local Time */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-7">
        {/* Availability Beacon: Open for internships only */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium backdrop-blur-md shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Open for internships</span>
        </div>

        {/* Live Kathmandu Location & Time */}
        {localTime && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono font-medium backdrop-blur-md shadow-xs">
            <MapPin className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
            <span>Kathmandu</span>
            <span className="text-slate-400 dark:text-slate-600">·</span>
            <Clock className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
            <span>{localTime} NPT</span>
          </div>
        )}
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15]">
        Hi, I'm{' '}
        <span className="inline-flex items-center gap-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-300">
            Samyog Sapkota
          </span>
          <button
            type="button"
            onClick={playGreeting}
            aria-label="Listen to pronunciation of Samyog Sapkota"
            title="Listen to pronunciation (Samyog's voice)"
            className="p-1 rounded-full text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all inline-flex items-center justify-center cursor-pointer"
          >
            <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </span>
        .<br />
        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200 block mt-2 tracking-tight">
          Software Developer & CS Student
        </span>
      </h1>

      {/* Clear, Natural Subtitle */}
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        Developer based in Kathmandu, Nepal, and Public Relations Advisor at Prime IT Club. I build practical software with Python, explore computer vision with OpenCV, and engineer clean web backends with strong fundamentals in C and C++.
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
