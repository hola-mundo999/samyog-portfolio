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
  const startupAttempted = useRef(false);

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

  // Startup voice playback on page open / first interaction
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (startupAttempted.current) return;
    startupAttempted.current = true;

    const alreadyWelcomed = sessionStorage.getItem('portfolio-welcomed');
    if (alreadyWelcomed || !isSoundEnabled) return;

    let played = false;

    const handleFirstPlay = () => {
      if (played) return;
      played = true;
      sessionStorage.setItem('portfolio-welcomed', 'true');
      playGreeting();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('pointerdown', handleFirstPlay);
      window.removeEventListener('keydown', handleFirstPlay);
      window.removeEventListener('scroll', handleFirstPlay);
    };

    // Try playing on page mount after slight delay
    const initialTimer = setTimeout(() => {
      try {
        handleFirstPlay();
      } catch {
        // Handled via event listeners if autoplay policy blocks
      }
    }, 600);

    window.addEventListener('pointerdown', handleFirstPlay, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstPlay, { once: true, passive: true });
    window.addEventListener('scroll', handleFirstPlay, { once: true, passive: true });

    return () => {
      clearTimeout(initialTimer);
      cleanupListeners();
    };
  }, [isSoundEnabled, playGreeting]);

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
