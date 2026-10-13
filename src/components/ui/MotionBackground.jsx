import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * 21st.dev FlickeringGrid Canvas Engine
 * High-performance canvas-based grid with glowing flickering nodes
 */
function FlickeringGridCanvas({ color, maxOpacity = 0.45, squareSize = 4, gridGap = 16, flickerChance = 0.25 }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => {
    if (typeof window === 'undefined') return 'rgba(56, 189, 248,';
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return 'rgba(56, 189, 248,';
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    return `rgba(${r}, ${g}, ${b},`;
  }, [color]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const setupCanvas = useCallback(
    (canvas, w, h) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const cols = Math.floor(w / (squareSize + gridGap));
      const rows = Math.floor(h / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const { cols, rows, squares, dpr } = setupCanvas(canvas, dimensions.width, dimensions.height);

    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const updateSquares = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;

      if (delta > interval) {
        lastTime = time - (delta % interval);
        for (let i = 0; i < squares.length; i++) {
          if (Math.random() < flickerChance) {
            squares[i] = Math.random() * maxOpacity;
          }
        }
      }
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const index = i * rows + j;
          const opacity = squares[index];
          if (opacity > 0.04) {
            ctx.fillStyle = `${memoizedColor}${opacity})`;
            ctx.fillRect(
              i * (squareSize + gridGap) * dpr,
              j * (squareSize + gridGap) * dpr,
              squareSize * dpr,
              squareSize * dpr
            );
          }
        }
      }
    };

    const loop = (time) => {
      updateSquares(time);
      drawGrid();
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, squareSize, gridGap, flickerChance, maxOpacity, memoizedColor, setupCanvas]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="pointer-events-none w-full h-full" />
    </div>
  );
}

/**
 * 21st.dev MotionBackground Component
 * Combines 21st.dev Flickering Grid + Motion Animated Beams & Flowing Aurora Orbs.
 */
export default function MotionBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Deep Atmospheric Gradient Base */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 15%, #081126 0%, #060813 60%, #03040a 100%)'
            : 'radial-gradient(circle at 50% 10%, #ffffff 0%, #f8fafc 55%, #f1f5f9 100%)',
        }}
      />

      {/* 2. 21st.dev Flickering Grid Background with Vignette Mask */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]">
        <FlickeringGridCanvas
          color={isDark ? '#38bdf8' : '#94a3b8'}
          squareSize={2.5}
          gridGap={24}
          maxOpacity={isDark ? 0.22 : 0.08}
          flickerChance={0.15}
        />
      </div>

      {/* 3. Subtle Engineered Ambient Glows (Crisp, non-distracting) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Top Glow Header Sheen */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[100px] pointer-events-none opacity-30 dark:opacity-30"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(99, 102, 241, 0.1) 60%, transparent 80%)'
              : 'radial-gradient(circle, rgba(2, 132, 199, 0.1) 0%, rgba(99, 102, 241, 0.04) 60%, transparent 80%)',
          }}
        />

        {/* Minimal Peripheral Accent */}
        <div
          className="absolute top-1/2 right-0 translate-x-1/3 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none opacity-20 dark:opacity-20"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(129, 140, 248, 0.25) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* 4. Subtle Ambient Architectural Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)'
            : 'linear-gradient(rgba(15, 23, 42, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
