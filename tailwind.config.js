/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      display: ['Lora', 'Serif', 'monospace'],
      body: ['Lora', 'Serif', 'monospace'],
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

