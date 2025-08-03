/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // adjust to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0064ffb0',
        blackGray: 'rgb(0 0 0 / 0.7)',
        accent: '#4CAF50',
        background: '#F9FAFB',
      },
      fontFamily: {
        base: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
