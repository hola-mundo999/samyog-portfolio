import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'samyog.sapkota1@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-indigo-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-indigo-400">Get In Touch</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Direct Links & Copy */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            Whether you're looking to collaborate on student tech projects, invite Prime IT Club to an event, or discuss software engineering and AI/ML, my inbox is always open.
          </p>

          <div className="space-y-4">
            {/* Email card */}
            <div className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-3 border border-slate-800">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-mono text-slate-400 block">DIRECT EMAIL</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0 flex items-center gap-1.5 text-xs"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn card */}
            <a
              href="https://www.linkedin.com/in/samyogsapkota/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-3 border border-slate-800 hover:border-sky-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">PROFESSIONAL NETWORK</span>
                  <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    linkedin.com/in/samyogsapkota
                  </span>
                </div>
              </div>
              <span className="text-xs text-sky-400 font-medium">Connect &rarr;</span>
            </a>

            {/* GitHub card */}
            <a
              href="https://github.com/hola-mundo999"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-3 border border-slate-800 hover:border-slate-600 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">CODE REPOSITORY</span>
                  <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    github.com/hola-mundo999
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-medium">View &rarr;</span>
            </a>
          </div>
        </div>

        {/* Right Column: Quick Message Form */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-2">Send a Quick Message</h3>
          <p className="text-xs text-slate-400 mb-6">
            Opens your default mail app pre-filled to send directly to Samyog.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const subject = encodeURIComponent(e.target.subject.value);
              const message = encodeURIComponent(e.target.message.value);
              window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">SUBJECT</label>
              <input
                name="subject"
                required
                placeholder="Collaboration / Project / Prime IT Club"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none text-sm text-white placeholder-slate-500"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">MESSAGE</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Hi Samyog, I wanted to reach out regarding..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none text-sm text-white placeholder-slate-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 hover:scale-[1.01] active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
