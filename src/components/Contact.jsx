import React, { useState } from 'react';
import { Mail, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [lastMessage, setLastMessage] = useState('');
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
    setLastMessage(e.target.message.value);
    setFormSent(true);

    // Trigger default email app
    window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-indigo-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-bold">Get In Touch</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Direct Links & Copy */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8">
            Whether you're looking to collaborate on student tech projects, invite Prime IT Club to an event, or discuss software engineering and AI/ML, my inbox is always open.
          </p>

          <div className="space-y-4">
            {/* Email card */}
            <div className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-3 border border-slate-700/80">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-mono text-slate-300 font-bold block">DIRECT EMAIL</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-bold text-white hover:text-indigo-300 transition-colors truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 hover:text-white transition-all shrink-0 flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-md"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-300" />
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
              className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-3 border border-slate-700/80 hover:border-sky-400 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/40 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-300 font-bold block">PROFESSIONAL NETWORK</span>
                  <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    linkedin.com/in/samyogsapkota
                  </span>
                </div>
              </div>
              <span className="text-xs text-sky-400 font-bold">Connect &rarr;</span>
            </a>

            {/* GitHub card */}
            <a
              href="https://github.com/hola-mundo999"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-3 border border-slate-700/80 hover:border-slate-500 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-600 text-slate-200 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-300 font-bold block">CODE REPOSITORY</span>
                  <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    github.com/hola-mundo999
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-300 font-bold">View &rarr;</span>
            </a>
          </div>
        </div>

        {/* Right Column: Quick Message Form */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700/80">
          <h3 className="text-xl font-bold text-white mb-2">Send a Quick Message</h3>
          <p className="text-xs sm:text-sm text-slate-200 mb-6">
            Sends your message directly to <strong className="text-indigo-300">samyog.sapkota1@gmail.com</strong>.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">SUBJECT</label>
              <input
                name="subject"
                required
                placeholder="Collaboration / Project / Prime IT Club"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-400 focus:outline-none text-sm text-white placeholder-slate-400 font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">MESSAGE</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Hi Samyog, I wanted to reach out regarding..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-400 focus:outline-none text-sm text-white placeholder-slate-400 font-medium resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.01] active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>

          {/* Feedback Banner if submitted */}
          {formSent && (
            <div className="mt-4 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-400/50 text-emerald-200 text-xs flex items-start gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white text-sm">Message Generated!</div>
                <p className="mt-0.5 text-slate-200">
                  Your mail app opened with the draft. You can also email directly at <strong className="text-white">samyog.sapkota1@gmail.com</strong>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
