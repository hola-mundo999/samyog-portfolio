import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900/80 py-12 px-4 text-xs text-slate-400">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-slate-200">Samyog Sapkota</span>
          <span className="text-slate-600">·</span>
          <span>BSc CSIT, Prime College (TU '27)</span>
        </div>

        <div className="text-slate-400 text-center sm:text-left text-[11px] leading-relaxed">
          Designed and built with modern web standards and responsive 3D interaction.
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 font-mono text-slate-400 text-xs">
            <a
              href="https://github.com/hola-mundo999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samyogsapkota/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:samyog.sapkota1@gmail.com"
              className="hover:text-cyan-300 transition-colors"
            >
              Email
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 pt-6 border-t border-slate-900/40 text-center text-[11px] text-slate-400">
        © 2025 Samyog Sapkota · All rights reserved.
      </div>
    </footer>
  );
}
