import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { soundEffects, playAiVoiceGreeting, fallbackSpeechSynthesis } from '../services/soundService';

const SoundContext = createContext();

export function SoundProvider({ children }) {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const saved = localStorage.getItem('portfolio-sound');
      return saved === null ? true : saved === 'true';
    } catch {
      return true;
    }
  });

  const hasPlayedThisLoad = useRef(false);
  const audioInstance = useRef(null);
  const isSoundEnabledRef = useRef(isSoundEnabled);

  useEffect(() => {
    isSoundEnabledRef.current = isSoundEnabled;
  }, [isSoundEnabled]);

  const toggleSound = useCallback(() => {
    setIsSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('portfolio-sound', String(next));
      } catch {
        // Storage safe
      }
      if (next) {
        soundEffects.playClick();
      } else {
        if (audioInstance.current) {
          audioInstance.current.pause();
          audioInstance.current.currentTime = 0;
        }
        setIsPlayingVoice(false);
      }
      return next;
    });
  }, []);

  const playGreeting = useCallback(() => {
    if (typeof window === 'undefined' || !isSoundEnabledRef.current) return;
    setIsPlayingVoice(true);
    playAiVoiceGreeting(
      () => setIsPlayingVoice(true),
      () => setIsPlayingVoice(false)
    );
  }, []);

  // Play greeting on page load (if sound enabled)
  useEffect(() => {
    if (typeof window === 'undefined' || !isSoundEnabledRef.current) return;

    let audio;
    try {
      audio = new Audio('/greeting.mp3');
      audio.preload = 'auto';
      audio.volume = 0.9;
      audioInstance.current = audio;
    } catch {
      return;
    }

    const startAudio = () => {
      if (hasPlayedThisLoad.current || !isSoundEnabledRef.current || !audio) return;

      try {
        const promise = audio.play();
        if (promise !== undefined) {
          promise
            .then(() => {
              hasPlayedThisLoad.current = true;
              setIsPlayingVoice(true);
              cleanup();
            })
            .catch(() => {
              // Browser policy safely prevented autoplay; listener waits for first user gesture
            });
        }
      } catch {
        // Safe fallback
      }
    };

    audio.onended = () => {
      setIsPlayingVoice(false);
    };

    audio.onerror = () => {
      if (!hasPlayedThisLoad.current && isSoundEnabledRef.current) {
        hasPlayedThisLoad.current = true;
        try {
          fallbackSpeechSynthesis(
            () => setIsPlayingVoice(true),
            () => setIsPlayingVoice(false)
          );
        } catch {
          // Ignore
        }
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

    // Attempt subtle playback if already permitted by user gesture
    startAudio();

    window.addEventListener('pointerdown', startAudio, { capture: true, passive: true });
    window.addEventListener('click', startAudio, { capture: true, passive: true });
    window.addEventListener('keydown', startAudio, { capture: true, passive: true });
    window.addEventListener('touchstart', startAudio, { capture: true, passive: true });
    window.addEventListener('touchend', startAudio, { capture: true, passive: true });
    document.addEventListener('pointerdown', startAudio, { capture: true, passive: true });
    document.addEventListener('click', startAudio, { capture: true, passive: true });

    return () => {
      cleanup();
    };
  }, []);

  const playClick = useCallback(() => {
    if (isSoundEnabledRef.current) {
      soundEffects.playClick();
    }
  }, []);

  const playChime = useCallback(() => {
    if (isSoundEnabledRef.current) {
      soundEffects.playChime();
    }
  }, []);

  const playSuccess = useCallback(() => {
    if (isSoundEnabledRef.current) {
      soundEffects.playSuccess();
    }
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
