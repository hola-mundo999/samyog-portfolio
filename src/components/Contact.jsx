import React, { useState } from 'react';
import { Mail, Copy, Check, Send, CheckCircle2, ArrowUpRight, AlertCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { useSound } from '../context/SoundContext';

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

    // Launch mail client
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
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
        <span className="text-xs uppercase font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
          Contact
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Direct Inquiries & Links */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Whether you want to discuss software engineering, Python backends, computer vision, coordinate an event with Prime IT Club, or discuss engineering internships—my inbox is always open.
          </p>

          <div className="space-y-3.5">
            {/* Direct Email Card */}
            <div className="surface-card rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${targetEmail}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors block break-all"
                  >
                    {targetEmail}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="self-stretch sm:self-auto justify-center py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono font-semibold cursor-pointer active:scale-95"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/samyogsapkota/"
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card rounded-2xl p-4 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-all group cursor-pointer min-w-0"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                    Professional Network
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors block break-all">
                    linkedin.com/in/samyogsapkota
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/hola-mundo999"
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card rounded-2xl p-4 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-all group cursor-pointer min-w-0"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 group-hover:scale-105 transition-transform shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                    Code Repositories
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors block break-all">
                    github.com/hola-mundo999
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors shrink-0" />
            </a>
          </div>
        </div>

        {/* Right Column: Direct Dispatch Form */}
        <div className="surface-card rounded-2xl sm:rounded-3xl p-5 sm:p-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            Send a Message
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
            Direct dispatch to <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{targetEmail}</span>.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
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
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                  } focus:outline-none text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium transition-colors`}
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
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                  } focus:outline-none text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium transition-colors`}
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
                placeholder="Software Collaboration / Prime IT Club / Internship"
                className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                  errors.subject
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                } focus:outline-none text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium transition-colors`}
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
                className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                } focus:outline-none text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium resize-none transition-colors`}
              />
              {errors.message && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-95 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>

          {/* Feedback confirmation banner */}
          {formSent && (
            <div
              id="contact-success-banner"
              className="mt-4 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-800 dark:text-cyan-200 text-xs flex items-start gap-3 animate-fade-in"
            >
              <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">
                  Email Draft Created!
                </div>
                <p className="mt-0.5 text-slate-600 dark:text-slate-300">
                  Your default mail client was triggered with your formatted message. You can also reach Samyog directly at{' '}
                  <strong className="text-slate-900 dark:text-white">{targetEmail}</strong>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
