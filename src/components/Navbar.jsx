import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-2xl px-5 py-3 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/60'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            Samyog
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/hola-mundo999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-xl transition-all"
            title="GitHub (@hola-mundo999)"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/samyogsapkota/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white transition-all hover:scale-[1.02] active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-4 bg-slate-950/95 backdrop-blur-xl rounded-2xl p-5 flex flex-col gap-3 shadow-2xl border border-slate-800 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 hover:text-cyan-300 py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href="https://github.com/hola-mundo999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/samyogsapkota/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-300 hover:text-cyan-400 rounded-lg bg-slate-900 border border-slate-800"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-cyan-500 text-slate-950"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
