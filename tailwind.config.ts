import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(56,189,248,0.18)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 35%)',
        'hero-grid': 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 28%)',
      },
      colors: {
        surface: '#070b16',
        panel: 'rgba(16,24,40,0.7)',
        accent: '#4fd1c5',
        accentSoft: '#22d3ee',
      },
    },
  },
  plugins: [],
};

export default config;
