import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { soundEffects, speakMaleGreeting, stopSpeech } from '../services/soundService';

const SoundContext = createContext();

export function SoundProvider({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-sound') === 'true';
    }
    return false;
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
    setIsPlayingVoice(true);
    speakMaleGreeting(
      () => setIsPlayingVoice(true),
      () => setIsPlayingVoice(false)
    );
  }, []);

  const toggleSound = useCallback(() => {
    setIsSoundEnabled((prev) => {
      const next = !prev;
      if (next) {
        soundEffects.playChime();
        // Trigger voice introduction
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
