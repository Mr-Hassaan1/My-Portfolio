import { motion } from 'framer-motion';
import type { ComponentType } from 'react';

interface SkillCardProps {
  name: string;
  level: string;
  Icon: ComponentType<{ className?: string }>;
}

export function SkillCard({ name, level, Icon }: SkillCardProps) {
  return (
    <motion.div
      className="glass-panel card-glow rounded-3xl border border-slate-700/70 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:border-sky-300/30"
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/80 text-sky-300 shadow-glow">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-slate-400">{level}</p>
        </div>
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-fuchsia-500" style={{ width: level === 'Expert' ? '100%' : level === 'Advanced' ? '85%' : '68%' }} />
      </div>
    </motion.div>
  );
}
