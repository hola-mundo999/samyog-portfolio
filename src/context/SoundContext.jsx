import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { soundEffects, playAiVoiceGreeting, fallbackSpeechSynthesis } from '../services/soundService';

const SoundContext = createContext();

export function SoundProvider({ children }) {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const isSoundEnabled = true;

  // In-memory ref so greeting plays once per page load and replays upon page refresh
  const hasPlayedThisLoad = useRef(false);
  const audioInstance = useRef(null);

  // Clear any legacy muted preference so it never silences the portfolio
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('portfolio-sound');
        sessionStorage.removeItem('portfolio-welcomed');
      } catch {
        // Storage clean-up safe
      }
    }
  }, []);

  const playGreeting = useCallback(() => {
    if (typeof window === 'undefined') return;
    setIsPlayingVoice(true);
    playAiVoiceGreeting(
      () => setIsPlayingVoice(true),
      () => setIsPlayingVoice(false)
    );
  }, []);

  // Play greeting on page load (or upon first touch/click/key if browser autoplay blocks)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Single preloaded Audio instance with max volume
    const audio = new Audio('/greeting.mp3');
    audio.preload = 'auto';
    audio.volume = 1.0;
    audioInstance.current = audio;

    const startAudio = () => {
      if (hasPlayedThisLoad.current) return;

      const promise = audio.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            hasPlayedThisLoad.current = true;
            setIsPlayingVoice(true);
            cleanup();
          })
          .catch(() => {
            // Autoplay blocked by browser policy; capture listeners remain active
          });
      }
    };

    audio.onended = () => {
      setIsPlayingVoice(false);
    };

    audio.onerror = () => {
      if (!hasPlayedThisLoad.current) {
        hasPlayedThisLoad.current = true;
        fallbackSpeechSynthesis(
          () => setIsPlayingVoice(true),
          () => setIsPlayingVoice(false)
        );
        cleanup();
      }
    };

    const cleanup = () => {
      window.removeEventListener('pointerdown', startAudio, true);
      window.removeEventListener('click', startAudio, true);
      window.removeEventListener('keydown', startAudio, true);
      window.removeEventListener('touchstart', startAudio, true);
      window.removeEventListener('touchend', startAudio, true);
      document.removeEventListener('pointerdown', startAudio, true);
      document.removeEventListener('click', startAudio, true);
    };

    // 1. Immediate attempt on page load
    startAudio();
    const t1 = setTimeout(startAudio, 200);
    const t2 = setTimeout(startAudio, 600);

    // 2. Global capture listeners for the very first interaction (click, touch, key)
    window.addEventListener('pointerdown', startAudio, { capture: true, passive: true });
    window.addEventListener('click', startAudio, { capture: true, passive: true });
    window.addEventListener('keydown', startAudio, { capture: true, passive: true });
    window.addEventListener('touchstart', startAudio, { capture: true, passive: true });
    window.addEventListener('touchend', startAudio, { capture: true, passive: true });
    document.addEventListener('pointerdown', startAudio, { capture: true, passive: true });
    document.addEventListener('click', startAudio, { capture: true, passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      cleanup();
    };
  }, []);

  const toggleSound = useCallback(() => {
    // Kept for backward compatibility
    playGreeting();
  }, [playGreeting]);

  const playClick = useCallback(() => {
    soundEffects.playClick();
  }, []);

  const playChime = useCallback(() => {
    soundEffects.playChime();
  }, []);

  const playSuccess = useCallback(() => {
    soundEffects.playSuccess();
  }, []);

  return (
    <SoundContext.Provider
      value={{
        isSoundEnabled,
        isPlayingVoice,
        toggleSound,
        playGreeting,
        playClick,
        playChime,
        playSuccess,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}
