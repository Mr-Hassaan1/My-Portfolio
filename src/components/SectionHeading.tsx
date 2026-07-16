import type { ReactNode } from 'react';

interface SectionHeadingProps {
  align?: 'left' | 'center';
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, children, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="text-sm uppercase tracking-[0.35em] text-sky-300/70">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base text-slate-300 sm:text-lg">{description}</p>
      {children}
    </div>
  );
}
