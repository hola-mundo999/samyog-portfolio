/**
 * Sound & Voice Synthesis Engine
 * 
 * Provides:
 * 1. Deep male voice welcome greeting using Web Speech API (window.speechSynthesis).
 * 2. Lightweight Web Audio API micro-interaction sound effects (tactile clicks,
 *    theme switch chimes, success chords) generated mathematically with zero audio file downloads.
 */

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Tone generator helper
function playTone({ freq, type = 'sine', duration = 0.1, gain = 0.1, rampTo = null }) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    if (rampTo) {
      osc.frequency.exponentialRampToValueAtTime(rampTo, ctx.currentTime + duration);
    }

    gainNode.gain.setValueAtTime(gain, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Audio context play error handled gracefully
  }
}

export const soundEffects = {
  // Tactile button / filter click
  playClick() {
    playTone({ freq: 800, type: 'triangle', duration: 0.04, gain: 0.05, rampTo: 300 });
  },

  // Theme toggle or mode switch chime
  playChime() {
    playTone({ freq: 523.25, type: 'sine', duration: 0.15, gain: 0.06 }); // C5
    setTimeout(() => {
      playTone({ freq: 659.25, type: 'sine', duration: 0.2, gain: 0.05 }); // E5
    }, 80);
  },

  // Success / dispatch confirmation chord
  playSuccess() {
    playTone({ freq: 440, type: 'sine', duration: 0.18, gain: 0.06 }); // A4
    setTimeout(() => {
      playTone({ freq: 554.37, type: 'sine', duration: 0.2, gain: 0.05 }); // C#5
    }, 90);
    setTimeout(() => {
      playTone({ freq: 659.25, type: 'sine', duration: 0.28, gain: 0.05 }); // E5
    }, 180);
  },
};

/**
 * Speaks a welcome message in a calibrated, deep male voice.
 */
export function speakMaleGreeting(onStart, onEnd) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const text =
    "Welcome to the portfolio of Samyog Sapkota — BSc CSIT student and software developer.";

  const utterance = new SpeechSynthesisUtterance(text);

  const setVoiceAndSpeak = () => {
    const voices = window.speechSynthesis.getVoices();

    // Look for deep, clear English male voices
    const maleVoice =
      voices.find(
        (v) =>
          v.lang.startsWith('en') &&
          (v.name.includes('David') ||
            v.name.includes('Guy') ||
            v.name.includes('George') ||
            v.name.includes('Daniel') ||
            v.name.includes('Male') ||
            v.name.includes('Natural'))
      ) ||
      voices.find((v) => v.lang.startsWith('en') && !v.name.includes('Zira') && !v.name.includes('Jenny') && !v.name.includes('Female')) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      voices[0];

    if (maleVoice) {
      utterance.voice = maleVoice;
    }

    // Calibrate for a deep, confident, and professional male voice
    utterance.pitch = 0.88; // Lower pitch for warm resonant tone
    utterance.rate = 0.94;  // Measured, articulate speaking rate
    utterance.volume = 1.0;

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  };

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    setVoiceAndSpeak();
  } else {
    // Voices might load asynchronously in some browsers
    window.speechSynthesis.onvoiceschanged = () => {
      setVoiceAndSpeak();
    };
    // Fallback if event doesn't fire
    setTimeout(setVoiceAndSpeak, 100);
  }
}

export function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
