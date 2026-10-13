import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Sun, Moon, VolumeX } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useSound } from '../context/SoundContext';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isSoundEnabled, isPlayingVoice, toggleSound, playClick } = useSound();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sky-500 text-white dark:bg-cyan-400 dark:text-slate-950 font-bold rounded-xl shadow-xl transition-all"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 transition-all duration-300">
        <nav
          aria-label="Main Navigation"
          className={`w-full max-w-5xl rounded-2xl px-5 py-3 transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5 dark:shadow-black/60'
              : 'bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/40'
          }`}
        >
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Samyog Sapkota Home"
          >
            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-sky-600 dark:text-cyan-400 group-hover:border-sky-500 dark:group-hover:border-cyan-400/50 transition-colors">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
              Samyog Sapkota
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={playClick}
                className="text-xs font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Sound & Voice Equalizer Toggle */}
            <button
              type="button"
              onClick={toggleSound}
              aria-label={isSoundEnabled ? 'Mute portfolio sound and voice' : 'Enable portfolio sound and voice greeting'}
              className={`px-2.5 py-1.5 rounded-xl border transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-sm text-xs font-mono font-semibold ${
                isSoundEnabled
                  ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-700 dark:text-cyan-300'
                  : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
              }`}
              title={
                isSoundEnabled
                  ? 'Sound FX & Voice: ACTIVE (Click to mute)'
                  : 'Sound FX & Voice: MUTED (Click to enable & listen)'
              }
            >
              {isSoundEnabled ? (
                <div className="flex items-end gap-[2px] h-3.5 px-0.5">
                  <span className="w-[2.5px] bg-cyan-600 dark:bg-cyan-400 rounded-full animate-eq-1" />
                  <span className="w-[2.5px] bg-cyan-600 dark:bg-cyan-400 rounded-full animate-eq-2" />
                  <span className="w-[2.5px] bg-cyan-600 dark:bg-cyan-400 rounded-full animate-eq-3" />
                  <span className="w-[2.5px] bg-cyan-600 dark:bg-cyan-400 rounded-full animate-eq-4" />
                </div>
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              )}
              <span className="text-[10px] hidden sm:inline uppercase">
                {isSoundEnabled ? (isPlayingVoice ? 'Voice Active' : 'Sound ON') : 'Sound'}
              </span>
            </button>

            {/* Theme Toggle Button in Top-Right Corner */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center shadow-sm"
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Social Icons (Desktop) */}
            <div className="hidden sm:flex items-center gap-1.5">
              <a
                href="https://github.com/hola-mundo999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl transition-all"
                title="GitHub (@hola-mundo999)"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/samyogsapkota/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex text-xs font-semibold px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-900 dark:hover:bg-slate-800 dark:border dark:border-slate-700 dark:text-white transition-all hover:scale-[1.02] active:scale-95 shadow-sm"
            >
              Contact Me
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden absolute top-20 inset-x-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl rounded-2xl p-5 flex flex-col gap-3 shadow-2xl border border-slate-200 dark:border-slate-800 animate-fade-in z-50 text-slate-900 dark:text-slate-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-cyan-300 py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/hola-mundo999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samyogsapkota/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold px-4 py-2 rounded-xl bg-sky-600 text-white dark:bg-cyan-500 dark:text-slate-950"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
