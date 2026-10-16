import React, { useState } from 'react';
import { Mail, Copy, Check, Send, CheckCircle2, ArrowUpRight, AlertCircle, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { useSound } from '../context/SoundContext';
import SpotlightCard from './ui/SpotlightCard';
import { supabase } from '../lib/supabase';

const LIMITS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
};

const SUBMIT_COOLDOWN_MS = 30000;

export default function Contact() {
  const { playChime, playSuccess } = useSound();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [sentEmail, setSentEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const targetEmail = 'samyog.sapkota1@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    playChime();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const max = LIMITS[name];
    const next = max ? value.slice(0, max) : value;
    setFormData((prev) => ({ ...prev, [name]: next }));
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);

    try {
      if (formData.company.trim()) {
        playSuccess();
        setSentEmail(formData.email.trim());
        setFormSent(true);
        setFormData({ name: '', email: '', subject: '', message: '', company: '' });
        return;
      }

      const lastSubmit = Number(sessionStorage.getItem('contact-last-submit') || 0);
      if (Date.now() - lastSubmit < SUBMIT_COOLDOWN_MS) {
        setSubmitError('Please wait a moment before sending another message.');
        return;
      }

      const { error: dbError } = await supabase.from('messages').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      if (dbError) {
        throw dbError;
      }

      sessionStorage.setItem('contact-last-submit', String(Date.now()));
      playSuccess();
      setSentEmail(formData.email.trim());
      setFormSent(true);
      setFormData({ name: '', email: '', subject: '', message: '', company: '' });
    } catch {
      setSubmitError('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (hasError) =>
    `w-full min-w-0 px-4 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900 border ${
      hasError
        ? 'border-red-500 focus:border-red-500'
        : 'border-slate-300/80 dark:border-slate-800 focus:border-sky-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-slate-900'
    } focus:outline-none text-sm text-slate-900 dark:text-white placeholder-slate-400 font-medium transition-colors`;

  const channelClass =
    'flex-1 min-h-[4.75rem] min-w-0 p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3';

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-20">
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
          Have a question, an idea to share, or an opportunity to discuss? Feel free to reach out. I'm always happy to connect and explore meaningful conversations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45 }}
          className="min-w-0 h-full"
        >
          <SpotlightCard className="surface-card-flush h-full lg:min-h-[38rem] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-300/80 dark:border-slate-800 bg-white/80 dark:bg-[#070b16] shadow-lg shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-md">
            <div className="h-full min-h-0 flex flex-col gap-5">
              <div className="shrink-0 flex flex-col justify-center gap-2 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    Direct Endpoints
                  </h3>
                  <span className="shrink-0 text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold whitespace-nowrap">
                    Fast Response &lt; 24h
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Verified communication channels.
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-3 min-h-0 min-w-0">
                <div className={`${channelClass} group hover:border-sky-500/40 dark:hover:border-cyan-500/40 transition-colors`}>
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 dark:bg-cyan-500/10 text-sky-600 dark:text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                        Email
                      </span>
                      <a
                        href={`mailto:${targetEmail}`}
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-300 transition-colors block font-mono break-all"
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
                    className="shrink-0 py-2 px-2.5 sm:px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-cyan-300 transition-all flex items-center gap-1.5 text-xs font-mono font-medium cursor-pointer min-h-[36px]"
                    title="Copy email to clipboard"
                    aria-label={copied ? 'Email copied' : 'Copy email to clipboard'}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </motion.button>
                </div>

                <a
                  href="https://www.linkedin.com/in/samyogsapkota/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${channelClass} group hover:border-sky-500/40 dark:hover:border-cyan-500/40 transition-colors cursor-pointer`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="p-2.5 rounded-lg bg-slate-200/60 dark:bg-slate-800 text-sky-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                        LinkedIn
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors block font-mono break-all">
                        linkedin.com/in/samyogsapkota
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors shrink-0" />
                </a>

                <a
                  href="https://github.com/hola-mundo999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${channelClass} group hover:border-sky-500/40 dark:hover:border-cyan-500/40 transition-colors cursor-pointer`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="p-2.5 rounded-lg bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-200 shrink-0 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                        GitHub
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors block font-mono break-all">
                        github.com/hola-mundo999
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors shrink-0" />
                </a>

                <div className={channelClass}>
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="p-2.5 rounded-lg bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold block uppercase">
                        Location
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white block font-mono break-words">
                        Kathmandu, Nepal (UTC+5:45)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="min-w-0 h-full"
        >
          <SpotlightCard className="surface-card-flush h-full lg:min-h-[38rem] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-300/80 dark:border-slate-800 bg-white/80 dark:bg-[#070b16] shadow-lg shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-md">
            <form onSubmit={handleFormSubmit} className="relative h-full min-h-0 flex flex-col gap-5" noValidate>
              <div className="shrink-0 flex flex-col justify-center gap-2 min-w-0">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  I usually reply within a day.
                </p>
              </div>

              <div
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="flex-1 flex flex-col gap-4 min-h-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="min-w-0">
                    <label htmlFor="contact-name" className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      maxLength={LIMITS.name}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className={fieldClass(Boolean(errors.name))}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="contact-email" className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      maxLength={LIMITS.email}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@company.com"
                      className={fieldClass(Boolean(errors.email))}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="min-w-0">
                  <label htmlFor="contact-subject" className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    maxLength={LIMITS.subject}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Collaboration or internship inquiry"
                    className={fieldClass(Boolean(errors.subject))}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="min-w-0 flex-1 flex flex-col">
                  <label htmlFor="contact-message" className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    maxLength={LIMITS.message}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Samyog, I wanted to reach out regarding..."
                    className={`${fieldClass(Boolean(errors.message))} resize-none flex-1 min-h-[8.5rem]`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-auto pt-1">
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.015 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer min-h-[44px] ${
                    isSubmitting
                      ? 'bg-sky-400 dark:bg-cyan-300 opacity-70 cursor-wait'
                      : 'bg-sky-600 hover:bg-sky-500 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-white dark:text-slate-950 shadow-sky-600/20 dark:shadow-cyan-400/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {formSent && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      id="contact-success-banner"
                      className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-xs flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-xs">
                          Message Sent!
                        </div>
                        <p className="mt-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                          Your message has been saved. I'll get back to you soon at{' '}
                          <strong className="text-slate-900 dark:text-white">{sentEmail || 'your email'}</strong>.
                        </p>
                      </div>
                    </motion.div>
                  )}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-3 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-800 dark:text-red-300 text-xs flex items-start gap-2.5"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs">Submission Failed</div>
                        <p className="mt-0.5 text-[11px]">{submitError}</p>
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
