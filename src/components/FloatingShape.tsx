import { motion } from 'framer-motion';

interface FloatingShapeProps {
  size: number;
  style: React.CSSProperties;
  delay?: number;
}

export function FloatingShape({ size, style, delay = 0 }: FloatingShapeProps) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full bg-gradient-to-br from-sky-400/40 to-fuchsia-500/30 blur-2xl"
      style={{ width: size, height: size, ...style }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0.2, 0.55, 0.2], y: ['0%', '12%', '0%'] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}
