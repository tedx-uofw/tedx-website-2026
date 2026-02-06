/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      lineHeight: {
        '72.61': '72.61px',
        '100.80': '100.80px',
        '67.20': '67.20px',
        '53.16': '53.16px',
        '56': '56px',
      },
    },
  },
  plugins: [],
}