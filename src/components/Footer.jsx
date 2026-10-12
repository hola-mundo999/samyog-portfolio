import React from 'react';
import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/80 py-10 px-4 text-center text-xs text-slate-500">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-indigo-400" />
          <span className="font-semibold text-slate-400">Samyog Sapkota</span>
          <span>·</span>
          <span>BSc CSIT, Prime College</span>
        </div>

        <div>
          Designed & built with clean 3D interaction. No noisy game controls.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hola-mundo999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samyogsapkota/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:samyog.sapkota1@gmail.com"
            className="hover:text-indigo-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
