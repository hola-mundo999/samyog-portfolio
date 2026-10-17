import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import ShimmerButton from './ui/ShimmerButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 sm:pt-28 pb-10 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center"
      >
        {/* Profile Avatar Badge */}
        <motion.div variants={itemVariants} className="relative mb-5 group">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-tr from-sky-500 via-indigo-500 to-cyan-400 dark:from-cyan-400 dark:via-sky-400 dark:to-indigo-500 shadow-xl shadow-sky-500/20 dark:shadow-cyan-400/30">
            <span className="absolute -inset-1 rounded-full bg-sky-400/20 dark:bg-cyan-400/15 blur-md animate-pulse" aria-hidden="true" />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-2 border-white dark:border-[#060813]">
              <img
                src="/samyog.jpg"
                alt="Samyog Sapkota"
                className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Live active status indicator dot on avatar */}
            <span
              className="absolute top-1 right-1 z-50 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#060813] flex items-center justify-center shadow-xs"
              title="Online"
            >
              <span className="w-2 h-2 rounded-full bg-white dark:bg-slate-950" />
            </span>
          </div>
        </motion.div>

        {localTime && (
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2.5 mb-6 sm:mb-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium shadow-xs backdrop-blur-xs">
              <MapPin className="w-3 h-3 text-sky-600 dark:text-cyan-400" />
              <span>Kathmandu</span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <Clock className="w-3 h-3 text-sky-600 dark:text-cyan-400" />
              <span>{localTime} NPT</span>
            </div>
          </motion.div>
        )}

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-6 leading-[1.18] sm:leading-[1.15]"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-300">
            Samyog Sapkota
          </span>
          .
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200 mb-8 sm:mb-10 tracking-tight"
        >
          Software Developer & CS Student
        </motion.p>

        {/* Clear, Natural Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal"
        >
          Developer based in Kathmandu, Nepal, and Public Relations Advisor at Prime IT Club. I build practical software with Python, explore computer vision with OpenCV, and engineer clean web backends with strong fundamentals in C and C++.
        </motion.p>

        {/* Primary Calls to Action featuring 21st.dev ShimmerButton */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none mx-auto mb-6 sm:mb-7"
        >
          <ShimmerButton href="#projects" className="w-full sm:w-auto min-h-[48px]">
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </ShimmerButton>

          <motion.a
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            href="#contact"
            className="w-full sm:w-auto min-h-[48px] flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/85 hover:bg-white border border-slate-300/80 text-slate-900 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-700/80 dark:text-white font-medium text-sm transition-colors shadow-xs cursor-pointer text-center backdrop-blur-xs"
          >
            <Mail className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
            <span>Contact Me</span>
          </motion.a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2.5 mb-12 sm:mb-16">
          <motion.a
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/hola-mundo999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 sm:p-3.5 rounded-xl bg-white/85 hover:bg-white border border-slate-300/80 text-slate-700 hover:text-slate-950 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors shadow-xs cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-xs"
            title="GitHub (@hola-mundo999)"
          >
            <GithubIcon className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/samyogsapkota/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 sm:p-3.5 rounded-xl bg-white/85 hover:bg-white border border-slate-300/80 text-slate-700 hover:text-sky-600 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors shadow-xs cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-xs"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:samyog.sapkota1@gmail.com"
            aria-label="Direct Email"
            className="p-3 sm:p-3.5 rounded-xl bg-white/85 hover:bg-white border border-slate-300/80 text-slate-700 hover:text-sky-600 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors shadow-xs cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-xs"
            title="Email (samyog.sapkota1@gmail.com)"
          >
            <Mail className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Subtle Scroll Indicator */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-xs">
          <span className="mb-2">Scroll to explore</span>
          <div className="w-4 h-7 rounded-full border border-slate-300 dark:border-slate-800 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-sky-500 dark:bg-cyan-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
