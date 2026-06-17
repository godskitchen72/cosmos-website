import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: '#030711',
        navy: '#071B3A',
        midnight: '#0D2C5A',
        cosmos: '#00B8FF',
        cyan: '#00D4FF'
      },
      boxShadow: {
        glow: '0 0 28px rgba(0, 184, 255, .35)',
        card: '0 20px 80px rgba(0, 0, 0, .45)'
      }
    }
  },
  plugins: []
};

export default config;
