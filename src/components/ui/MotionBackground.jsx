import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';
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
 * Combines 21st.dev Flickering Grid + Fluid Motion Animated Auroras
 * Art-directed for both soothing, anti-glare Light Mode & deep atmospheric Dark Mode.
 */
export default function MotionBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Base Canvas - Soothing Anti-Glare Wash (Non-glaring, eye-friendly foundation) */}
      <div
        className="absolute inset-0 transition-colors duration-700 ease-out"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 15%, #081126 0%, #060813 60%, #03040a 100%)'
            : 'radial-gradient(circle at 50% 0%, #f5f5f3 0%, #f0efed 40%, #eae9e6 100%)',
        }}
      />

      {/* 2. 21st.dev Flickering Grid Background with Vignette Mask (Active in both modes) */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]">
        <FlickeringGridCanvas
          color={isDark ? '#38bdf8' : '#a8a29e'}
          squareSize={2.5}
          gridGap={22}
          maxOpacity={isDark ? 0.24 : 0.10}
          flickerChance={0.16}
        />
      </div>

      {/* 3. Fluid Living Motion Auroras (Motion.div floating beams for both Dark and Light modes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]">
        {/* Aurora 1: Floating Primary Sapphire / Cyan Beam */}
        <motion.div
          animate={{
            x: [-20, 35, -25, -20],
            y: [-15, 25, -20, -15],
            scale: [1, 1.12, 0.94, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 left-1/4 w-[650px] h-[480px] rounded-full blur-[110px] pointer-events-none"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(56, 189, 248, 0.26) 0%, rgba(14, 165, 233, 0.12) 50%, transparent 75%)'
              : 'radial-gradient(circle, rgba(168, 162, 158, 0.12) 0%, rgba(120, 113, 108, 0.06) 50%, transparent 75%)',
          }}
        />

        {/* Aurora 2: Floating Ethereal Violet / Indigo Beam */}
        <motion.div
          animate={{
            x: [25, -35, 30, 25],
            y: [20, -25, 15, 20],
            scale: [1, 0.92, 1.14, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 -right-28 w-[580px] h-[520px] rounded-full blur-[120px] pointer-events-none"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(129, 140, 248, 0.24) 0%, rgba(168, 85, 247, 0.10) 50%, transparent 75%)'
              : 'radial-gradient(circle, rgba(214, 211, 209, 0.15) 0%, rgba(168, 162, 158, 0.07) 50%, transparent 75%)',
          }}
        />

        {/* Aurora 3: Floating Warm Sunrise Amber / Teal Accent Beam */}
        <motion.div
          animate={{
            x: [-15, 25, -30, -15],
            y: [15, -20, 25, 15],
            scale: [0.95, 1.1, 0.96, 0.95],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 left-1/3 w-[600px] h-[450px] rounded-full blur-[115px] pointer-events-none"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(45, 212, 191, 0.16) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 75%)'
              : 'radial-gradient(circle, rgba(245, 245, 244, 0.20) 0%, rgba(214, 211, 209, 0.10) 50%, transparent 75%)',
          }}
        />
      </div>

      {/* 4. Fine Architectural Micro-Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)'
            : 'linear-gradient(rgba(15, 23, 42, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.35) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
