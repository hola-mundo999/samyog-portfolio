import React, { useState } from 'react';
import { Mail, Copy, Check, Send, CheckCircle2, ArrowUpRight, AlertCircle, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { useSound } from '../context/SoundContext';
import SpotlightCard from './ui/SpotlightCard';

export default function Contact() {
  const { playChime, playSuccess } = useSound();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const targetEmail = 'samyog.sapkota1@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    playChime();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
    }
    return errs;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const encodedSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    try {
      window.location.href = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    } catch (err) {
      console.warn('Mail client launch error:', err);
    }
    playSuccess();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-sky-500 dark:bg-cyan-400" />
          <span className="text-xs uppercase font-mono tracking-widest text-sky-700 dark:text-cyan-400 font-bold">
            Contact & Collaboration
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
          Let's Connect & Collaborate
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
          Whether you want to discuss software engineering, Python backends, computer vision, coordinate an event with Prime IT Club, or discuss engineering internships—my inbox is always open.
        </p>
      </motion.div>

      {/* Symmetrical Two-Column Grid (Identical Heights & Baseline Alignment) */}
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column: Direct Inquiries & Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45 }}
          className="h-full flex flex-col"
        >
          <SpotlightCard className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070b16] shadow-sm dark:shadow-black/60">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Direct Endpoints
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    Fast Response &lt; 24h
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                  Verified communication channels for recruiters and collaborators.
                </p>

                <div className="space-y-3.5">
                  {/* Email Card */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-sky-500/40 dark:hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-lg bg-sky-500/10 dark:bg-cyan-500/10 text-sky-600 dark:text-cyan-400 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                          Email Transmission
                        </span>
                        <a
                          href={`mailto:${targetEmail}`}
                          className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-300 transition-colors block break-all font-mono"
                        >
                          {targetEmail}
                        </a>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={handleCopyEmail}
                      className="self-stretch sm:self-auto justify-center py-2 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-cyan-300 transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono font-medium cursor-pointer min-h-[36px]"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                          <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* LinkedIn Card */}
                  <a
                    href="https://www.linkedin.com/in/samyogsapkota/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 group hover:border-sky-500/40 dark:hover:border-cyan-500/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-lg bg-slate-200/60 dark:bg-slate-800 text-sky-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                          Professional Network
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors block break-all font-mono">
                          linkedin.com/in/samyogsapkota
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors shrink-0" />
                  </a>

                  {/* GitHub Card */}
                  <a
                    href="https://github.com/hola-mundo999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 group hover:border-sky-500/40 dark:hover:border-cyan-500/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-lg bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-200 shrink-0 group-hover:scale-105 transition-transform">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                          Code Repositories
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors block break-all font-mono">
                          github.com/hola-mundo999
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors shrink-0" />
                  </a>

                  {/* Location & Academic Base */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                        Physical Base
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white block font-mono">
                        Kathmandu, Nepal (UTC+5:45)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Availability Status Badge */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2.5 min-h-[48px]">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                  Open for Software & Applied AI Internship Opportunities
                </span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Right Column: Direct Dispatch Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="h-full flex flex-col"
        >
          <SpotlightCard className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070b16] shadow-sm dark:shadow-black/60">
            <form onSubmit={handleFormSubmit} className="h-full flex flex-col justify-between" noValidate>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-sky-500/10 dark:bg-cyan-500/10 text-sky-700 dark:text-cyan-400 border border-sky-500/20 dark:border-cyan-500/20 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Instant Dispatch
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                  Direct dispatch to <span className="text-sky-700 dark:text-cyan-400 font-semibold">{targetEmail}</span>.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-cyan-400'
                        } focus:outline-none text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jane@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-cyan-400'
                        } focus:outline-none text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                      Subject *
                    </label>
                    <input
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Collaboration / Prime IT Club / Internship"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-cyan-400'
                        } focus:outline-none text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                      Message Content *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Samyog, I wanted to reach out regarding..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-cyan-400'
                      } focus:outline-none text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium resize-none transition-colors`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Area (Exact baseline alignment with Left Column badge) */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex flex-col justify-center min-h-[48px]">
                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-sky-600/20 dark:shadow-cyan-400/20 cursor-pointer min-h-[44px]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </motion.button>

                {/* Feedback confirmation banner */}
                <AnimatePresence>
                  {formSent && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      id="contact-success-banner"
                      className="mt-3 p-3 rounded-xl bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/30 dark:border-cyan-500/40 text-sky-800 dark:text-cyan-200 text-xs flex items-start gap-2.5 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-xs">
                          Email Client Triggered
                        </div>
                        <p className="mt-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                          Your default mail client has prepared your message for{' '}
                          <strong className="text-slate-900 dark:text-white">{targetEmail}</strong>.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
