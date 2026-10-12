import React, { useState } from 'react';
import { Mail, Copy, Check, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const email = 'samyog.sapkota1@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(e.target.subject.value);
    const message = encodeURIComponent(e.target.message.value);
    setFormSent(true);

    // Trigger user's mail client
    window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[1px] bg-cyan-400" />
        <span className="text-[11px] uppercase font-mono tracking-widest text-cyan-400 font-bold">
          06 // Inquiries & Communication
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Direct Inquiries & Links */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Whether you want to discuss Python backend architectures, explore computer vision projects, coordinate an event with Prime IT Club, or discuss engineering internships—my inbox is always open.
          </p>

          <div className="space-y-3.5">
            {/* Direct Email Card */}
            <div className="surface-card rounded-2xl p-4 flex items-center justify-between gap-3 border-slate-800/80">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-bold text-white hover:text-cyan-300 transition-colors truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono font-semibold cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
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
              className="surface-card rounded-2xl p-4 flex items-center justify-between gap-3 border-slate-800/80 hover:border-cyan-500/40 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">
                    Professional Network
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    linkedin.com/in/samyogsapkota
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/hola-mundo999"
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card rounded-2xl p-4 flex items-center justify-between gap-3 border-slate-800/80 hover:border-slate-700 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">
                    Code Repository
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors">
                    github.com/hola-mundo999
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Column: Direct Dispatch Form */}
        <div className="surface-card rounded-3xl p-6 sm:p-8 border-slate-800/80">
          <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
          <p className="text-xs text-slate-400 mb-6 font-mono">
            Direct dispatch to <span className="text-cyan-400 font-semibold">{email}</span>.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] font-mono font-bold text-slate-400 block mb-1 uppercase tracking-wider">
                Subject
              </label>
              <input
                name="subject"
                required
                placeholder="Software Collaboration / Prime IT Club / General Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-400 font-medium transition-colors"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono font-bold text-slate-400 block mb-1 uppercase tracking-wider">
                Message Content
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Hi Samyog, I wanted to reach out regarding..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-400 font-medium resize-none transition-colors"
              />
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
            <div className="mt-4 p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 text-xs flex items-start gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white text-xs">Email Draft Created!</div>
                <p className="mt-0.5 text-slate-300">
                  Your mail app opened with the formatted message. You can also email directly at <strong className="text-white">{email}</strong>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
