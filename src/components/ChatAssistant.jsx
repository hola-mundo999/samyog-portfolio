import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  RotateCcw,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getAssistantResponse, SUGGESTED_QUESTIONS } from '../services/chatService';

const INITIAL_MESSAGES = [
  {
    id: 'initial-greeting',
    sender: 'assistant',
    text: "Hey there! 👋 I'm Samyog's portfolio assistant. I can help you explore his background, projects, technical interests, and ways to connect with him. What would you like to know?",
  },
];

export default function ChatAssistant() {
  const counterRef = useRef(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom on new messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input on open (desktop)
      if (window.innerWidth > 640) {
        setTimeout(() => inputRef.current?.focus(), 150);
      }
    }
  }, [messages, isOpen, isTyping]);

  // Dismiss tooltip after 10 seconds or when opened
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for Escape key to close dialog
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  const sendMessage = async (textToSend) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isTyping) return;

    counterRef.current += 1;
    const userMsg = {
      id: `user-${counterRef.current}`,
      sender: 'user',
      text: messageContent,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const responseText = await getAssistantResponse(messageContent, messages);
      counterRef.current += 1;
      const assistantMsg = {
        id: `assistant-${counterRef.current}`,
        sender: 'assistant',
        text: responseText,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      counterRef.current += 1;
      const errorMsg = {
        id: `err-${counterRef.current}`,
        sender: 'assistant',
        text: 'Sorry, I hit a temporary issue processing that. Please try asking again or feel free to email Samyog directly!',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderFormattedText = (text) => {
    const parts = text.split('\n\n');

    return parts.map((part, pIdx) => {
      const lineParts = part.split('\n');

      return (
        <div key={pIdx} className={pIdx > 0 ? 'mt-2.5' : ''}>
          {lineParts.map((line, lIdx) => {
            const elements = [];
            let key = 0;

            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
            let match;
            let lastIndex = 0;

            while ((match = linkRegex.exec(line)) !== null) {
              if (match.index > lastIndex) {
                elements.push(
                  formatBold(line.substring(lastIndex, match.index), `text-${key++}`)
                );
              }
              elements.push(
                <a
                  key={`link-${key++}`}
                  href={match[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline decoration-cyan-400/50 hover:text-cyan-300 font-semibold inline-flex items-center gap-0.5 mx-0.5 transition-colors"
                >
                  <span>{match[1]}</span>
                  <ExternalLink className="w-2.5 h-2.5 inline" />
                </a>
              );
              lastIndex = match.index + match[0].length;
            }

            if (lastIndex < line.length) {
              elements.push(formatBold(line.substring(lastIndex), `text-${key++}`));
            }

            return (
              <p key={lIdx} className={lIdx > 0 ? 'mt-1' : ''}>
                {elements.length > 0 ? elements : formatBold(line, 'default')}
              </p>
            );
          })}
        </div>
      );
    });
  };

  const formatBold = (str, baseKey) => {
    const boldParts = str.split(/\*\*([^*]+)\*\*/g);
    return boldParts.map((item, idx) => {
      if (idx % 2 === 1) {
        return (
          <strong key={`${baseKey}-b-${idx}`} className="font-semibold text-white">
            {item}
          </strong>
        );
      }
      return item;
    });
  };

  return (
    <aside aria-label="Personal Portfolio Assistant" className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50">
      {/* Tooltip Greeting */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 right-0 mb-2 w-64 p-3 rounded-2xl bg-slate-950/95 border border-cyan-500/30 text-slate-100 text-xs shadow-2xl shadow-cyan-950/40 backdrop-blur-md flex items-start justify-between gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <p className="leading-snug">
                Curious about Samyog? Ask me anything.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              aria-label="Dismiss greeting tooltip"
              className="text-slate-400 hover:text-white transition-colors p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-trigger-btn"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            type="button"
            onClick={handleOpen}
            aria-label="Open portfolio AI chat assistant"
            className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-950 border border-cyan-500/40 text-cyan-300 hover:text-white flex items-center justify-center shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-colors cursor-pointer"
          >
            {/* Subtle breathing glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 animate-ping opacity-30 pointer-events-none" />

            {/* Icon */}
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />

            {/* Ready Status indicator */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window-modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 14 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-heading"
            className="w-[calc(100vw-24px)] sm:w-[380px] h-[480px] sm:h-[520px] max-h-[78dvh] sm:max-h-[82vh] rounded-2xl sm:rounded-3xl bg-white dark:bg-[#060a17]/95 border border-slate-200 dark:border-cyan-500/30 shadow-2xl shadow-slate-900/15 dark:shadow-black/80 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/70 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-sky-500/10 dark:bg-cyan-950/80 border border-sky-500/20 dark:border-cyan-500/40 flex items-center justify-center text-sky-600 dark:text-cyan-400 shadow-xs">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 id="chat-heading" className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                      Ask about Samyog
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                      Ready
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Your guide to my portfolio
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  title="Close assistant"
                  aria-label="Close assistant"
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-slate-50/50 dark:bg-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg bg-sky-500/10 dark:bg-cyan-950/80 border border-sky-500/20 dark:border-cyan-500/30 text-sky-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed text-xs ${
                      msg.sender === 'user'
                        ? 'bg-sky-600 text-white rounded-br-sm shadow-xs'
                        : 'bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-bl-sm shadow-xs'
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2.5 justify-start items-center">
                  <div className="w-6 h-6 rounded-lg bg-sky-500/10 dark:bg-cyan-950/80 border border-sky-500/20 dark:border-cyan-500/30 text-sky-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-bl-sm px-4 py-2.5 flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-cyan-400 animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-cyan-400 animate-bounce"
                      style={{ animationDelay: '0.15s' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-cyan-400 animate-bounce"
                      style={{ animationDelay: '0.3s' }}
                    />
                  </div>
                </div>
              )}

              {/* Suggested Questions (only displayed when conversation is fresh) */}
              {messages.length === 1 && !isTyping && (
                <div className="pt-2">
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold mb-2">
                    Suggested inquiries:
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {SUGGESTED_QUESTIONS.map((q, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => sendMessage(q)}
                        className="text-left px-3.5 py-2.5 rounded-xl bg-white hover:bg-sky-50/60 dark:bg-slate-900/70 dark:hover:bg-cyan-950/50 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 dark:hover:border-cyan-500/40 text-slate-700 hover:text-sky-700 dark:text-slate-200 dark:hover:text-cyan-300 text-xs transition-all flex items-center justify-between group cursor-pointer min-h-[42px] shadow-xs"
                      >
                        <span>{q}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Footer Input */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/80">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Samyog..."
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 focus:border-sky-500 dark:focus:border-cyan-400 focus:outline-none text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium shadow-xs"
                />
                <button
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={!inputMessage.trim() || isTyping}
                  aria-label="Send message"
                  className="absolute right-1.5 p-2 rounded-lg bg-sky-600 hover:bg-sky-500 dark:bg-cyan-400 dark:hover:bg-cyan-300 disabled:opacity-30 disabled:hover:bg-sky-600 dark:disabled:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold transition-all cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center mt-2 tracking-tight">
                Verified portfolio facts · Extensible AI architecture
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
