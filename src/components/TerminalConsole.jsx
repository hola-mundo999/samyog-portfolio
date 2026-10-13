import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Terminal as TerminalIcon, Sparkles, Play, RotateCcw, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useSound } from '../context/SoundContext';
import { getAssistantResponse } from '../services/chatService';

const PYTHON_BANNER = `Python 3.12.2 (main, Oct 2026, 64-bit) [GCC 13.2.0] on linux
Type "help(samyog)", "dir(samyog)", or click the quick commands below.
>>> import samyog
>>> # Samyog Sapkota initialized. Run Python commands to inspect portfolio.`;

const SAMYOG_DATA = {
  whoami: {
    name: 'Samyog Sapkota',
    role: 'Software & Applied AI Engineer',
    education: "BSc CSIT (Tribhuvan University '27), Prime College, Kathmandu",
    leadership: 'Public Relations Advisor @ Prime IT Club (Former PR Director)',
    technical_focus: [
      'High-Performance Python Architecture & FastAPI',
      'Computer Vision (OpenCV & MediaPipe 21-Landmark Tracking)',
      'Document NLP & Academic RAG Synthesizers',
      'Low-Level Systems Programming (C / C++ memory & algorithms)',
    ],
    status: 'Actively seeking Software & Applied AI Engineering Internships',
  },

  projects: [
    {
      name: 'AI CSIT Study Assistant',
      category: 'Academic NLP & Exam Synthesizer',
      stack: ['Streamlit', 'PyPDF', 'Google Gemini API', 'Python NLP'],
      live_url: 'https://ai-csit-study-assistant.streamlit.app/',
      description: 'PDF chunking, syllabus summarization, and interactive exam generation for TU students.',
    },
    {
      name: 'AI Hand Gesture Controller',
      category: 'Real-Time Vision & HCI Dispatcher',
      stack: ['OpenCV', 'MediaPipe', 'NumPy', 'Python', 'Streamlit'],
      live_url: 'https://ai-gesture-controller.streamlit.app',
      description: '21-landmark hand tracking for touchless slide navigation and media control.',
    },
    {
      name: 'TU CSIT Notice Hub',
      category: 'IOST Scraper & Telegram Bot Dispatcher',
      stack: ['Python', 'BeautifulSoup4', 'SQLite', 'Telegram Bot API'],
      live_url: 'https://tu-csit-notice-app.streamlit.app/',
      description: 'Scrapes Institute of Science & Technology notices with MD5 deduplication.',
    },
    {
      name: 'Prime Event & QR Tickets',
      category: 'FastAPI REST Backend & Cryptographic Gate Scanner',
      stack: ['FastAPI', 'SQLite', 'Pydantic', 'Render', 'QR Security'],
      live_url: 'https://prime-event-ticket-manager.onrender.com/',
      description: 'High-throughput event ticketing with anti-replay QR gate validation.',
    },
  ],

  skills: {
    languages: ['Python', 'C', 'C++', 'JavaScript (ES6+)', 'PHP'],
    ai_and_vision: ['OpenCV', 'MediaPipe', 'LLM Prompt Engineering', 'Groq / Gemini APIs'],
    backends_and_data: ['FastAPI', 'Streamlit', 'SQLite', 'BeautifulSoup4', 'REST Architectures'],
    frontend_and_design: ['React 19', 'Tailwind CSS v4', 'Figma', 'Photoshop'],
    systems_and_tools: ['Linux CLI', 'Git / GitHub', 'Vite', 'Postman API Testing'],
  },

  leadership: [
    {
      role: 'Public Relations Advisor',
      organization: 'Prime IT Club',
      tenure: 'September 2026 – Present',
      summary: 'Advising executive committee on strategic tech partnerships, hackathons, and industry outreach.',
    },
    {
      role: 'Public Relations Director',
      organization: 'Prime IT Club',
      tenure: 'September 2025 – September 2026',
      summary: 'Led the PR department, secured corporate event sponsorships, and organized tech bootcamps.',
    },
    {
      role: 'Public Relations Officer',
      organization: 'Prime IT Club',
      tenure: 'July 2024 – September 2025',
      summary: 'Coordinated campus engagement and designed event creative collateral in Figma and Photoshop.',
    },
  ],

  education: {
    degree: 'BSc Computer Science & Information Technology (BSc CSIT)',
    institution: 'Prime College (Affiliated with Tribhuvan University)',
    location: 'Nayabazar, Kathmandu, Nepal',
    expected_graduation: '2027 (Third Year)',
    core_coursework: [
      'Data Structures & Algorithms',
      'C / C++ Systems Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
    ],
  },

  contact: {
    email: 'samyog.sapkota1@gmail.com',
    github: 'https://github.com/hola-mundo999',
    linkedin: 'https://www.linkedin.com/in/samyogsapkota/',
    location: 'Kathmandu, Nepal (UTC+5:45)',
  },
};

const QUICK_COMMANDS = [
  'samyog.whoami()',
  'samyog.projects()',
  'samyog.skills()',
  'samyog.leadership()',
  'samyog.contact()',
  'help(samyog)',
];

function formatPythonOutput(data) {
  return JSON.stringify(data, null, 2);
}

export default function TerminalConsole() {
  const { playClick } = useSound();
  const [history, setHistory] = useState([
    {
      cmd: 'samyog.whoami()',
      output: formatPythonOutput(SAMYOG_DATA.whoami),
      type: 'success',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState(['samyog.whoami()']);
  const [isProcessing, setIsProcessing] = useState(false);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, isProcessing]);

  const evaluatePython = useCallback(
    async (rawInput) => {
      const clean = rawInput.trim();
      if (!clean) return;

      playClick();
      setCommandHistory((prev) => [...prev, clean]);
      setCmdIndex(-1);

      // 1. Clear command
      if (clean === 'clear()' || clean === 'clear') {
        setHistory([]);
        setInputVal('');
        return;
      }

      // Normalization
      const lower = clean.toLowerCase().replace(/\s+/g, '');

      // 2. Help
      if (lower === 'help()' || lower === 'help' || lower === 'help(samyog)') {
        const helpText = `Help on module samyog in Python 3.12:

NAME
    samyog - Python developer profile for Samyog Sapkota

CLASSES
    Developer(name='Samyog Sapkota', college='Prime College', club='Prime IT Club')

PUBLIC METHODS
    samyog.whoami()      -> Core profile, current academic year & focus
    samyog.projects()    -> 4 deployed systems with live URLs & tech stacks
    samyog.skills()      -> Categorized languages, AI frameworks & tools
    samyog.leadership()  -> Prime IT Club PR Advisor & Director tenure
    samyog.education()   -> BSc CSIT academic details at Prime College (TU '27)
    samyog.contact()     -> Direct email, GitHub, and LinkedIn endpoints
    dir(samyog)          -> Inspect public attributes
    clear()              -> Clear terminal screen buffer

TIP: You can also ask natural language questions directly! Example:
     >>> How did you build the gesture controller?`;
        setHistory((prev) => [...prev, { cmd: clean, output: helpText, type: 'info' }]);
        setInputVal('');
        return;
      }

      // 3. Dir
      if (lower === 'dir(samyog)' || lower === 'dir()') {
        const dirList = [
          'bio',
          'contact',
          'education',
          'experience',
          'leadership',
          'projects',
          'skills',
          'stack',
          'whoami',
        ];
        setHistory((prev) => [
          ...prev,
          { cmd: clean, output: `>>> ${JSON.stringify(dirList)}`, type: 'success' },
        ]);
        setInputVal('');
        return;
      }

      // 4. Object methods
      if (
        lower === 'samyog.whoami()' ||
        lower === 'samyog.bio()' ||
        lower === 'whoami()' ||
        lower === 'whoami'
      ) {
        setHistory((prev) => [
          ...prev,
          { cmd: clean, output: formatPythonOutput(SAMYOG_DATA.whoami), type: 'success' },
        ]);
        setInputVal('');
        return;
      }

      if (
        lower === 'samyog.projects()' ||
        lower === 'samyog.projects' ||
        lower === 'projects()' ||
        lower === 'projects'
      ) {
        setHistory((prev) => [
          ...prev,
          { cmd: clean, output: formatPythonOutput(SAMYOG_DATA.projects), type: 'success' },
        ]);
        setInputVal('');
        return;
      }

      if (
        lower === 'samyog.skills()' ||
        lower === 'samyog.stack()' ||
        lower === 'skills()' ||
        lower === 'skills'
      ) {
        setHistory((prev) => [
          ...prev,
          { cmd: clean, output: formatPythonOutput(SAMYOG_DATA.skills), type: 'success' },
        ]);
        setInputVal('');
        return;
      }

      if (
        lower === 'samyog.leadership()' ||
        lower === 'samyog.experience()' ||
        lower === 'leadership()' ||
        lower === 'leadership'
      ) {
        setHistory((prev) => [
          ...prev,
          { cmd: clean, output: formatPythonOutput(SAMYOG_DATA.leadership), type: 'success' },
        ]);
        setInputVal('');
        return;
      }

      if (lower === 'samyog.education()' || lower === 'education()' || lower === 'education') {
        setHistory((prev) => [
          ...prev,
          { cmd: clean, output: formatPythonOutput(SAMYOG_DATA.education), type: 'success' },
        ]);
        setInputVal('');
        return;
      }

      if (lower === 'samyog.contact()' || lower === 'contact()' || lower === 'contact') {
        setHistory((prev) => [
          ...prev,
          { cmd: clean, output: formatPythonOutput(SAMYOG_DATA.contact), type: 'success' },
        ]);
        setInputVal('');
        return;
      }

      // 5. Basic arithmetic / Python expressions evaluation
      if (/^[0-9+\-*/().\s%^]+$/.test(clean)) {
        try {
          // Safe mathematical expression evaluation
          const sanitized = clean.replace(/\^/g, '**');
          // eslint-disable-next-line no-eval
          const val = Function(`"use strict"; return (${sanitized});`)();
          setHistory((prev) => [...prev, { cmd: clean, output: String(val), type: 'success' }]);
          setInputVal('');
          return;
        } catch {
          // Fall through
        }
      }

      // 6. Natural Language Question Fallback to assistant knowledge
      setIsProcessing(true);
      setInputVal('');

      try {
        const response = await getAssistantResponse(clean);
        const pythonicReply = `# [samyog.ai query resolution]
Query: "${clean}"
Result:
${response}`;
        setHistory((prev) => [...prev, { cmd: clean, output: pythonicReply, type: 'ai' }]);
      } catch {
        const errorMsg = `Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name '${clean}' is not defined.
Try running 'help(samyog)' or inspect 'samyog.skills()'.`;
        setHistory((prev) => [...prev, { cmd: clean, output: errorMsg, type: 'error' }]);
      } finally {
        setIsProcessing(false);
      }
    },
    [playClick]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      evaluatePython(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = cmdIndex === -1 ? commandHistory.length - 1 : Math.max(0, cmdIndex - 1);
      setCmdIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex === -1) return;
      const nextIndex = cmdIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setCmdIndex(-1);
        setInputVal('');
      } else {
        setCmdIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    }
  };

  const handleQuickCommand = (cmd) => {
    setInputVal(cmd);
    evaluatePython(cmd);
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <section id="terminal" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4"
      >
        <div className="flex items-center gap-2">
          <span className="w-8 h-[2px] bg-sky-500 dark:bg-cyan-400" />
          <span className="text-xs uppercase font-mono tracking-widest text-sky-700 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5" />
            Python Interactive REPL
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>CPython 3.12.2 • UTF-8</span>
        </div>
      </motion.div>

      {/* Terminal Window Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-slate-800/90 dark:border-slate-800 bg-[#070b16] overflow-hidden shadow-2xl shadow-slate-900/15 dark:shadow-black/80 font-mono text-xs"
      >
        {/* Title Bar & Quick Chips */}
        <div className="px-4 py-3 bg-[#04060d] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
            <span className="ml-2 text-slate-300 font-semibold text-[11px] hidden sm:inline">
              python3 -i samyog.py
            </span>
          </div>

          {/* Quick Python Method Execution Chips */}
          <div className="flex overflow-x-auto no-scrollbar items-center gap-1.5 py-0.5 max-w-full">
            {QUICK_COMMANDS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => handleQuickCommand(c)}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-[11px] text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shrink-0 min-h-[30px] flex items-center gap-1 font-mono active:scale-95"
              >
                <Play className="w-2.5 h-2.5 text-cyan-400" />
                {c}
              </button>
            ))}
            <button
              type="button"
              onClick={() => evaluatePython('clear()')}
              title="Clear terminal buffer"
              className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white text-[11px] transition-all cursor-pointer shrink-0 min-h-[30px] flex items-center"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Terminal REPL Body */}
        <div
          ref={terminalBodyRef}
          onClick={() => inputRef.current?.focus({ preventScroll: true })}
          className="p-4 sm:p-5 min-h-[380px] max-h-[520px] overflow-y-auto space-y-4 cursor-text selection:bg-cyan-500/30 selection:text-white bg-[#070b16]"
        >
          {/* Initial REPL Boot Banner */}
          <div className="text-slate-400 text-[11px] leading-relaxed whitespace-pre-wrap select-none border-b border-slate-800/80 pb-3">
            {PYTHON_BANNER}
          </div>

          {/* History */}
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              {/* Command Prompt Line */}
              <div className="flex items-start gap-2 text-slate-100">
                <span className="text-cyan-400 font-bold select-none shrink-0">
                  &gt;&gt;&gt;
                </span>
                <span className="text-cyan-300 font-semibold break-all">
                  {item.cmd}
                </span>
              </div>

              {/* Output */}
              <div
                className={`pl-5 leading-relaxed whitespace-pre-wrap ${
                  item.type === 'error'
                    ? 'text-rose-400'
                    : item.type === 'ai'
                      ? 'text-indigo-300 bg-indigo-950/30 p-2.5 rounded-lg border border-indigo-900/40 text-[11px]'
                      : item.type === 'info'
                        ? 'text-slate-400 text-[11px]'
                        : 'text-emerald-400 text-[11px]'
                }`}
              >
                {item.output}
              </div>
            </div>
          ))}

          {/* Real-time processing indicator */}
          {isProcessing && (
            <div className="flex items-center gap-2 pl-5 text-[11px] text-cyan-400 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Evaluating query in Python context...</span>
            </div>
          )}

          {/* Active Command Input Line */}
          <div className="flex items-center gap-2 text-slate-100 pt-1">
            <span className="text-cyan-400 font-bold select-none shrink-0 flex items-center">
              &gt;&gt;&gt;
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. samyog.projects(), help(samyog), or ask a question"
              className="w-full bg-transparent border-none outline-none text-white placeholder-slate-500 font-mono text-xs focus:ring-0 p-0"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>

        {/* Status Footer */}
        <div className="px-4 py-2 bg-[#04060d] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-cyan-400" />
            <span>Interactive Python Mode</span>
          </div>
          <span className="hidden sm:inline">Press Enter to execute • ↑↓ for history</span>
        </div>
      </motion.div>
    </section>
  );
}
