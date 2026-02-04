/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        accent: {
          DEFAULT: '#d4af37',
          light: '#e5c158',
          dark: '#b8860b',
          muted: 'rgba(212, 175, 55, 0.1)',
        },
        border: 'rgba(255, 255, 255, 0.1)',
        muted: {
          DEFAULT: '#a3a3a3',
          foreground: '#d4d4d4',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}