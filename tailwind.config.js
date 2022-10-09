/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontColor: 'var(--fontColor)',
        fontGrayTwo: 'var(--fontGrayTwo)',
        primaryColor: 'rgba(52, 102, 246)',
        primaryBg: 'var(--bg)',
        themeBg: 'var(--themeBg)',
      }
    },
  },
  plugins: [],
}
