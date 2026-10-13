import React from 'react';
import { motion } from 'motion/react';

/**
 * 21st.dev ShimmerButton
 * High-polish call-to-action button with a flowing edge shimmer
 * and responsive spring micro-interactions.
 */
export default function ShimmerButton({
  children,
  onClick,
  href,
  className = '',
  shimmerColor = 'rgba(56, 189, 248, 0.5)',
  ...props
}) {
  const isLink = Boolean(href);
  const Component = isLink ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-xl group font-semibold text-sm cursor-pointer shadow-lg shadow-sky-500/10 dark:shadow-cyan-500/20 ${className}`}
      {...props}
    >
      {/* Animated continuous edge shimmer gradient */}
      <span
        className="absolute inset-[-1000%] animate-[spin_3.5s_linear_infinite] opacity-75 group-hover:opacity-100 transition-opacity"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 40%, ${shimmerColor} 50%, transparent 60%, transparent 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Button Interior */}
      <span className="relative inline-flex items-center justify-center gap-2 w-full h-full px-5 py-3 rounded-[11px] bg-slate-900 text-white dark:bg-cyan-400 dark:text-slate-950 font-bold text-sm transition-colors group-hover:bg-slate-800 dark:group-hover:bg-cyan-300">
        {children}
      </span>
    </Component>
  );
}
