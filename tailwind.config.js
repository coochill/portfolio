/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    colors: {
      aurora: "#a0f0ff",
    },
  },
},
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("tailwindcss-animate"),
  ],
} 
