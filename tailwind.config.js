/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        accent: {
          DEFAULT: '#d4af37',
          muted: 'rgba(212, 175, 55, 0.1)',
        },
        border: 'rgba(255, 255, 255, 0.1)',
        muted: {
          DEFAULT: '#a3a3a3',
          foreground: '#d4d4d4',
        },
        gold: {
          400: '#f1c40f',
          500: '#d4af37',
          600: '#b8860b',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}