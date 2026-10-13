import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { useSound } from '../context/SoundContext';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Terminal', href: '#terminal', id: 'terminal' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isSoundEnabled, toggleSound, playClick } = useSound();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Scroll background state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Escape closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -65% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    playClick();
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sky-500 text-white dark:bg-cyan-400 dark:text-slate-950 font-bold rounded-xl shadow-xl transition-all"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 py-2.5 sm:py-4 transition-all duration-300">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Main Navigation"
          style={{
            backdropFilter: scrolled ? 'blur(28px)' : 'blur(16px)',
            WebkitBackdropFilter: scrolled ? 'blur(28px)' : 'blur(16px)',
          }}
          className={`w-full max-w-5xl rounded-2xl px-3.5 sm:px-5 py-2.5 transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? 'bg-white/90 dark:bg-[#060813]/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl shadow-slate-950/10 dark:shadow-black/70'
              : 'bg-white/60 dark:bg-[#060813]/60 border border-slate-200/60 dark:border-slate-800/50 shadow-xs'
          }`}
        >
          {/* Brand Avatar & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Samyog Sapkota Home"
            onClick={() => handleLinkClick('hero')}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700 shadow-sm shrink-0 group-hover:border-sky-500 dark:group-hover:border-cyan-400/60 transition-colors bg-slate-200 dark:bg-slate-800">
              <img
                src="/samyog.jpg"
                alt="Samyog Sapkota"
                className="w-full h-full object-cover object-[center_18%]"
              />
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
              Samyog Sapkota
            </span>
          </a>

          {/* Desktop Navigation Links with 21st.dev Tubelight Sliding Lamp Indicator */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-slate-950 dark:text-white'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {/* Tubelight Lamp Indicator from 21st.dev */}
                  {isActive && (
                    <motion.div
                      layoutId="tubelight-pill"
                      className="absolute inset-0 bg-white dark:bg-slate-800/90 rounded-lg shadow-xs border border-slate-200/70 dark:border-transparent -z-10"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      {/* Top indicator line */}
                      <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-6 h-[2px] bg-sky-600 dark:bg-cyan-400 rounded-full shadow-none dark:shadow-[0_0_8px_#38bdf8]">
                        <div className="hidden dark:block absolute w-8 h-2 bg-cyan-400/30 rounded-full blur-[2px] -top-1 -left-1" />
                      </div>
                    </motion.div>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Audio Feedback Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={toggleSound}
              aria-label={isSoundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer flex items-center justify-center shadow-xs"
              title={isSoundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
            >
              {isSoundEnabled ? (
                <Volume2 className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              )}
            </motion.button>

            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer flex items-center justify-center shadow-xs"
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600 transition-transform hover:-rotate-12" />
              )}
            </motion.button>

            {/* Social Icons (Desktop) */}
            <div className="hidden sm:flex items-center gap-1">
              <a
                href="https://github.com/hola-mundo999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl transition-all"
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
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex text-xs font-semibold px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 transition-colors shadow-xs"
            >
              Contact Me
            </motion.a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Backdrop & Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                id="mobile-nav"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden absolute top-16 sm:top-20 inset-x-3 sm:inset-x-4 bg-white/95 dark:bg-[#060813]/95 backdrop-blur-2xl rounded-2xl p-4 sm:p-5 flex flex-col gap-1 shadow-2xl border border-slate-200 dark:border-slate-800 z-50 text-slate-900 dark:text-slate-100"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-sm font-semibold text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-cyan-300 py-3 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-colors min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={toggleSound}
                      aria-label={isSoundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
                      className="p-2.5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                      title={isSoundEnabled ? 'Mute sound' : 'Unmute sound'}
                    >
                      {isSoundEnabled ? (
                        <Volume2 className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                      ) : (
                        <VolumeX className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    <a
                      href="https://github.com/hola-mundo999"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="p-2.5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/samyogsapkota/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="p-2.5 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-cyan-400 dark:text-slate-950 active:scale-95 transition-transform min-h-[44px] flex items-center"
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
