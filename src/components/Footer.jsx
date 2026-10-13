import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 py-12 px-4 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700 shadow-xs shrink-0 bg-slate-200 dark:bg-slate-800">
            <img
              src="/samyog.jpg"
              alt="Samyog Sapkota"
              className="w-full h-full object-cover object-[center_18%]"
            />
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-200">Samyog Sapkota</span>
          <span className="text-slate-400 dark:text-slate-600">·</span>
          <span>Prime College (TU '27)</span>
        </div>

        <div className="text-slate-500 dark:text-slate-400 text-center sm:text-left text-[11px] leading-relaxed">
          Designed and built with modern web standards and responsive 3D interaction.
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 font-mono text-slate-600 dark:text-slate-400 text-xs">
            <a
              href="https://github.com/hola-mundo999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samyogsapkota/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:samyog.sapkota1@gmail.com"
              className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors"
            >
              Email
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer shadow-xs min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/40 text-center text-[11px] text-slate-500 dark:text-slate-400">
        © {CURRENT_YEAR} Samyog Sapkota · All rights reserved.
      </div>
    </footer>
  );
}
