import React, { useState } from 'react';
import { MessageSquare, Star, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSound } from '../context/SoundContext';
import SpotlightCard from './ui/SpotlightCard';
import { supabase } from '../lib/supabase';

const CATEGORIES = [
  { value: 'general', label: 'General Feedback' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'ui_ux', label: 'UI/UX Improvement' },
  { value: 'bug', label: 'Bug Report' },
  { value: 'other', label: 'Other' },
];

export default function Feedback() {
  const { playSuccess } = useSound();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general',
    website: '',
  });
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const LIMITS = { name: 100, email: 254, message: 4000 };

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
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please write at least 5 characters.';
    }
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
    }
    return errs;
  };

  const handleSubmit = async (e) => {
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
      if (formData.website.trim()) {
        playSuccess();
        setSubmitted(true);
        return;
      }

      const lastSubmit = Number(sessionStorage.getItem('feedback-last-submit') || 0);
      if (Date.now() - lastSubmit < 30000) {
        setSubmitError('Please wait a moment before sending more feedback.');
        return;
      }

      const { error: dbError } = await supabase.from('feedback').insert({
        name: formData.name.trim() || null,
        email: formData.email.trim() || null,
        message: formData.message.trim().slice(0, 4000),
        rating: rating || null,
        category: formData.category,
      });

      if (dbError) {
        throw dbError;
      }

      sessionStorage.setItem('feedback-last-submit', String(Date.now()));
      playSuccess();
      setSubmitted(true);
    } catch {
      setSubmitError('Could not save your feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '', category: 'general', website: '' });
    setRating(0);
    setSubmitted(false);
    setSubmitError('');
  };

  return (
    <section id="feedback" className="py-16 px-4 max-w-2xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        <SpotlightCard className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-stone-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#070b16] shadow-lg shadow-stone-900/5 dark:shadow-black/60 backdrop-blur-md">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
                  Thank you for your feedback!
                </h3>
                <p className="text-sm text-stone-600 dark:text-slate-400 mb-6">
                  Your response has been recorded. It helps me improve.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-xl bg-amber-500/10 dark:bg-amber-500/10 border border-amber-500/20 dark:border-amber-500/30 text-amber-600 dark:text-amber-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                    Feedback &amp; Suggestions
                  </h3>
                </div>
                <p className="text-xs text-stone-500 dark:text-slate-400 mb-6 ml-[44px] font-mono">
                  Help me improve — your honest thoughts are valued.
                </p>

                <div className="space-y-4">
                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="feedback-website">Website</label>
                    <input
                      id="feedback-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Category */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-stone-600 dark:text-slate-400 block mb-1.5 uppercase tracking-wider">
                      Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, category: cat.value }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                            formData.category === cat.value
                              ? 'bg-amber-500/15 border-amber-500/40 text-amber-700 dark:text-amber-400'
                              : 'bg-stone-100/70 dark:bg-slate-900 border-stone-200 dark:border-slate-800 text-stone-600 dark:text-slate-400 hover:border-amber-500/30'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-stone-600 dark:text-slate-400 block mb-2 uppercase tracking-wider">
                      Rating <span className="text-stone-400 dark:text-slate-600 font-normal">(Optional)</span>
                    </label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className="p-1 cursor-pointer transition-transform hover:scale-110"
                          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                        >
                          <Star
                            className={`w-5 h-5 transition-colors ${
                              star <= (hoveredStar || rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-stone-300 dark:text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                      {rating > 0 && (
                        <button
                          type="button"
                          onClick={() => setRating(0)}
                          className="text-[10px] text-stone-400 dark:text-slate-500 ml-2 cursor-pointer hover:text-stone-600 dark:hover:text-slate-300 transition-colors"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Name & Email (optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-stone-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                        Name <span className="text-stone-400 dark:text-slate-600 font-normal">(Optional)</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Anonymous"
                        maxLength={100}
                        className="w-full min-w-0 px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-slate-800 focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none text-sm text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-slate-500 font-medium transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono font-bold text-stone-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                        Email <span className="text-stone-400 dark:text-slate-600 font-normal">(Optional)</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        maxLength={254}
                        className={`w-full min-w-0 px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-900 border ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-stone-200 dark:border-slate-800 focus:border-amber-500 dark:focus:border-amber-400'
                        } focus:outline-none text-base sm:text-xs text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-slate-500 font-medium transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-stone-600 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                      Your Feedback *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What did you like? What could be better? Any suggestions?"
                      maxLength={4000}
                      className={`w-full min-w-0 px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-900 border ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-stone-200 dark:border-slate-800 focus:border-amber-500 dark:focus:border-amber-400'
                      } focus:outline-none text-base sm:text-xs text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-slate-500 font-medium resize-none transition-colors`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-5 space-y-2">
                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.015 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer min-h-[44px] ${
                      isSubmitting
                        ? 'bg-amber-400 dark:bg-amber-300 opacity-70 cursor-wait'
                        : 'bg-amber-500 hover:bg-amber-400 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-stone-950 shadow-amber-500/20'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Feedback</span>
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-800 dark:text-red-300 text-xs flex items-start gap-2"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-red-500" />
                        <span>{submitError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </SpotlightCard>
      </motion.div>
    </section>
  );
}
