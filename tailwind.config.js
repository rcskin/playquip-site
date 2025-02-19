/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',       // For Next.js 13 App Router
    './pages/**/*.{js,jsx}',     // If you use the Pages Router
    './components/**/*.{js,jsx}', // For your components
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
