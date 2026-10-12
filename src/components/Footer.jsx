import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 py-12 px-4 text-xs text-slate-400">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-slate-300">Samyog</span>
          <span className="text-slate-600">·</span>
          <span>BSc CSIT, Prime College (TU '27)</span>
        </div>

        <div className="text-slate-400 text-center sm:text-left">
          Crafted with 3D interaction & engineering focus. No clunky audio or generic templates.
        </div>

        <div className="flex items-center gap-5 font-mono text-slate-400">
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
      </div>
    </footer>
  );
}
