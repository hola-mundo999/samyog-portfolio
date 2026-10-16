import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

/**
 * 21st.dev SpotlightCard
 * Interactive card with cursor-following radial spotlight illumination.
 * Fully compatible with React 19, Tailwind CSS v4, and Motion.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor,
  as = 'div',
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handlePointerEnter = () => {
    setOpacity(1);
  };

  const handlePointerLeave = () => {
    setOpacity(0);
  };

  const Component = as === 'motion' ? motion.div : as;

  return (
    <Component
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`relative overflow-hidden min-w-0 surface-card ${className}`}
      {...props}
    >
      {/* 21st.dev Cursor-Tracking Radial Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 ease-out z-0"
        style={{
          opacity,
          background:
            spotlightColor ||
            `radial-gradient(450px circle at ${position.x}px ${position.y}px, var(--spotlight-glow, rgba(56, 189, 248, 0.1)), transparent 75%)`,
        }}
        aria-hidden="true"
      />
      {/* Content wrapper — min-w-0 so long URLs wrap instead of escaping the card */}
      <div className="relative z-10 w-full h-full min-w-0 min-h-0">
        {children}
      </div>
    </Component>
  );
}
