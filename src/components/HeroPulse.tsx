'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroPulse() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-pulse-dot', {
        opacity: 0,
        scale: 0.65,
        duration: 1.3,
        ease: 'elastic.out(1, 0.65)',
        stagger: 0.15,
      });
      gsap.to('.hero-pulse-line', {
        scaleX: 1,
        duration: 1.25,
        delay: 0.3,
        ease: 'power3.out',
        stagger: 0.12,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="hero-pulse-dot absolute left-14 top-16 h-4 w-4 rounded-full bg-cyan-300/80 blur-2xl" />
      <span className="hero-pulse-dot absolute right-16 top-24 h-3 w-3 rounded-full bg-fuchsia-300/80 blur-2xl" />
      <span className="hero-pulse-dot absolute left-24 bottom-28 h-5 w-5 rounded-full bg-sky-300/80 blur-2xl" />
      <span className="hero-pulse-line absolute left-10 top-40 h-0.5 w-20 origin-left rounded-full bg-sky-400/30 scale-x-0" />
      <span className="hero-pulse-line absolute right-12 bottom-36 h-0.5 w-24 origin-left rounded-full bg-fuchsia-400/30 scale-x-0" />
    </div>
  );
}
