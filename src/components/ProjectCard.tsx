import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  image: string;
}

export function ProjectCard({ title, description, tech, demoUrl, repoUrl, image }: ProjectCardProps) {
  return (
    <motion.article
      className="group glass-panel card-glow rounded-[2rem] border border-slate-700/70 overflow-hidden shadow-2xl shadow-sky-500/5"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
      </div>
      <div className="space-y-5 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sky-300/70">open source</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-600/60">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={demoUrl} target="_blank" rel="noreferrer" className="rounded-full bg-sky-400/15 px-4 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-400/25">
            Live Demo
          </a>
          <a href={repoUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10">
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
