'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, type PointerEvent } from 'react';

interface MagneticButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary';
}

export function MagneticButton({ href, text, variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const shadow = useTransform(x, (value) => `${Math.abs(value) / 6}px`);

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((event.clientX - centerX) / 4);
    y.set((event.clientY - centerY) / 4);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
        variant === 'primary'
          ? 'bg-sky-400/10 text-sky-200 border border-sky-400/20 backdrop-blur-lg hover:bg-sky-400/15'
          : 'bg-white/5 text-slate-100 border border-slate-600 hover:bg-white/10'
      }`}
      style={{ x, y, boxShadow: shadow }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {text}
    </motion.a>
  );
}
