import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { soundEffects, speakMaleGreeting, stopSpeech } from '../services/soundService';

const SoundContext = createContext();

export function SoundProvider({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio-sound');
      if (stored !== null) return stored === 'true';
      return true; // Enabled by default on startup
    }
    return true;
  });

  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-sound', isSoundEnabled ? 'true' : 'false');
    }
    if (!isSoundEnabled) {
      stopSpeech();
    }
  }, [isSoundEnabled]);

  const playGreeting = useCallback(() => {
    if (!isSoundEnabled) return;
    setIsPlayingVoice(true);
    speakMaleGreeting(
      () => setIsPlayingVoice(true),
      () => setIsPlayingVoice(false)
    );
  }, [isSoundEnabled]);

  // In-memory ref so greeting plays once per page load and plays again on page refresh
  const hasPlayedThisLoad = useRef(false);

  // Play greeting once on page load (or upon first interaction if browser autoplay blocks)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const attemptPlay = () => {
      if (hasPlayedThisLoad.current) return;
      hasPlayedThisLoad.current = true;
      cleanup();
      playGreeting();
    };

    const cleanup = () => {
      window.removeEventListener('pointerdown', attemptPlay);
      window.removeEventListener('keydown', attemptPlay);
      window.removeEventListener('scroll', attemptPlay);
      window.removeEventListener('click', attemptPlay);
    };

    // Attempt immediately shortly after mount
    const timer = setTimeout(() => {
      try {
        attemptPlay();
      } catch {
        // Handled via user interaction listeners
      }
    }, 500);

    // Listeners in case browser autoplay blocks unprompted audio
    window.addEventListener('pointerdown', attemptPlay, { once: true, passive: true });
    window.addEventListener('keydown', attemptPlay, { once: true, passive: true });
    window.addEventListener('scroll', attemptPlay, { once: true, passive: true });
    window.addEventListener('click', attemptPlay, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [playGreeting]);

  const toggleSound = useCallback(() => {
    setIsSoundEnabled((prev) => {
      const next = !prev;
      if (next) {
        soundEffects.playChime();
        playGreeting();
      } else {
        stopSpeech();
        setIsPlayingVoice(false);
      }
      return next;
    });
  }, [playGreeting]);

  const playClick = useCallback(() => {
    if (isSoundEnabled) {
      soundEffects.playClick();
    }
  }, [isSoundEnabled]);

  const playChime = useCallback(() => {
    if (isSoundEnabled) {
      soundEffects.playChime();
    }
  }, [isSoundEnabled]);

  const playSuccess = useCallback(() => {
    if (isSoundEnabled) {
      soundEffects.playSuccess();
    }
  }, [isSoundEnabled]);

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
