/**
 * Sound & Voice Synthesis Engine
 * 
 * Supports:
 * 1. Custom human voice greeting (if /welcome.mp3 exists in public directory).
 * 2. Fallback Web Speech API (window.speechSynthesis) with adjusted phonetic clarity:
 *    "Welcome to the portfolio of Samyog Sapkota."
 * 3. Pure Web Audio API tone synthesis for tactile micro-interactions (clicks, chimes, chords).
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
 * Plays the welcome greeting using Web Speech API AI voice.
 * Text: "Hello, I am Samyog Sapkota."
 */
export function speakMaleGreeting(onStart, onEnd) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  try {
    window.speechSynthesis.cancel();

    const text = 'Hello, I am Samyog Sapkota.';
    const utterance = new SpeechSynthesisUtterance(text);

    const pickAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();

      // Look for clear natural English male voice
      const preferredVoice =
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.includes('David') ||
              v.name.includes('Guy') ||
              v.name.includes('George') ||
              v.name.includes('Daniel') ||
              v.name.includes('Male') ||
              v.name.includes('Natural') ||
              v.name.includes('Google US English'))
        ) ||
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            !v.name.includes('Zira') &&
            !v.name.includes('Jenny') &&
            !v.name.includes('Female')
        ) ||
        voices.find((v) => v.lang.startsWith('en')) ||
        voices[0];

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.pitch = 0.95;
      utterance.rate = 0.95;
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
    if (voices && voices.length > 0) {
      pickAndSpeak();
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        pickAndSpeak();
      };
      setTimeout(pickAndSpeak, 120);
    }
  } catch {
    if (onEnd) onEnd();
  }
}

export function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Audio cancel handled safely
    }
  }
}

