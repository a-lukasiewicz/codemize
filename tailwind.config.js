/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-1': '#5596d8',
        'main-2': '#8bc5f5',
        'main-3': '#add5f7',
        'main-4': '#cfe6f9',
        'main-5': '#f2f7fc',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
}
