import React, { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, Copy, Check } from 'lucide-react';

const COMMANDS = {
  whoami: `Samyog
Role: Software & Applied AI Engineer
Education: BSc CSIT (Class of '27), Prime College, Kathmandu
Focus: High-performance Python, Computer Vision, Document NLP, Systems C/C++
Club: PR Director @ Prime IT Club`,

  projects: `4 Featured Systems Deployed & Live:
1. [AI CSIT Study Assistant] - PDF Chunking & Academic Exam Synthesizer
   -> https://ai-csit-study-assistant.streamlit.app/
2. [AI Hand Gesture Controller] - 21-Landmark Vision Tracking & HCI Dispatcher
   -> https://ai-gesture-controller.streamlit.app
3. [TU CSIT Notice Hub] - IOST Scraper, MD5 Deduplication & Telegram Bot
   -> https://tu-csit-notice-app.streamlit.app/
4. [Prime Event & QR Tickets] - FastAPI REST Backend & Cryptographic Gate Scanner
   -> https://prime-event-ticket-manager.onrender.com/`,

  skills: `Primary Stack & Tooling:
Languages: Python, C, C++, JavaScript (ES6+), PHP
AI & Vision: OpenCV, MediaPipe, LLM Prompt Engineering, Groq/Gemini APIs
Backends: FastAPI, Streamlit, SQLite, BeautifulSoup4, REST Architectures
Design & UI: React 19, Tailwind CSS, Figma, Photoshop, Linux CLI`,

  contact: `Direct Transmissions:
Email: samyog.sapkota1@gmail.com
GitHub: https://github.com/hola-mundo999
LinkedIn: https://www.linkedin.com/in/samyogsapkota/`,

  help: `Available commands:
• whoami    - Core developer profile
• projects  - 4 deployed systems with live URLs
• skills    - Technical capabilities & languages
• contact   - Communication endpoints
• clear     - Clear terminal buffer`,
};

export default function TerminalConsole() {
  const [history, setHistory] = useState([
    {
      cmd: 'whoami',
      output: COMMANDS.whoami,
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const clean = cmdText.trim().toLowerCase();
    if (!clean) return;

    if (clean === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = COMMANDS[clean] || `Command not found: "${clean}". Type "help" to inspect valid instructions.`;

    setHistory((prev) => [...prev, { cmd: clean, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  const copyCloneCmd = () => {
    navigator.clipboard.writeText('git clone https://github.com/hola-mundo999/samyog-portfolio.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span className="text-[11px] uppercase font-mono tracking-widest text-cyan-400 font-bold">
            Interactive Dev Console // Terminal
          </span>
        </div>

        <button
          onClick={copyCloneCmd}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all cursor-pointer"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
          <span>{copied ? 'Copied clone!' : 'git clone repo'}</span>
        </button>
      </div>

      {/* Terminal Window Frame */}
      <div className="surface-card rounded-2xl border-slate-800/90 overflow-hidden shadow-2xl shadow-black/80 font-mono text-xs">
        {/* Title Bar */}
        <div className="px-4 py-3 bg-[#030612] border-b border-slate-800/90 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-slate-400 text-[11px]">samyog@dev-terminal:~</span>
          </div>

          {/* Quick Clickable Chips */}
          <div className="hidden sm:flex items-center gap-1.5">
            {['whoami', 'projects', 'skills', 'contact', 'clear'].map((c) => (
              <button
                key={c}
                onClick={() => handleCommand(c)}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-[10px] text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="p-4 sm:p-6 bg-[#030510]/95 min-h-[260px] max-h-[380px] overflow-y-auto space-y-4 cursor-text"
        >
          <div className="text-slate-400 text-[11px] leading-relaxed">
            Welcome to Samyog's interactive environment. Type <span className="text-cyan-400 font-bold">help</span> or click the buttons above to query systems.
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span className="text-slate-400">samyog@prime:~$</span>
                <span>{item.cmd}</span>
              </div>
              <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed pl-4 border-l border-slate-800 text-[11px]">
                {item.output}
              </pre>
            </div>
          ))}

          {/* Input Line */}
          <div className="flex items-center gap-2 text-cyan-400 pt-1">
            <span className="text-slate-400">samyog@prime:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type whoami, projects, skills..."
              className="flex-1 bg-transparent border-none outline-none text-white text-xs font-mono placeholder-slate-400"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
}
