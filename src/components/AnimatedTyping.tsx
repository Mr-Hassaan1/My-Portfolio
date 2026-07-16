'use client';

import { useEffect, useState } from 'react';

const phrases = [
  'Design systems with motion.',
  'Scalable web products.',
  'Performance-first experiences.',
  'Premium developer interfaces.',
];

export function AnimatedTyping() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const delay = deleting ? 60 : 120;

    const timeout = window.setTimeout(() => {
      if (!deleting) {
        setText(currentPhrase.slice(0, letterIndex + 1));
        setLetterIndex((current) => current + 1);
        if (letterIndex + 1 === currentPhrase.length) {
          window.setTimeout(() => setDeleting(true), 900);
        }
      } else {
        setText(currentPhrase.slice(0, letterIndex - 1));
        setLetterIndex((current) => current - 1);
        if (letterIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
        }
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [letterIndex, deleting, phraseIndex]);

  return (
    <span className="inline-flex items-center gap-2 text-xl font-medium text-sky-300 sm:text-2xl">
      <span>{text}</span>
      <span className="h-8 animate-pulse border-r border-sky-300/80" />
    </span>
  );
}
