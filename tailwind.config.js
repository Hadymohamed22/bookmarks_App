/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg": "#F8F4E1",
        "main": "#FEBA17",
        "heading": "#74512D",
        "dark": "#74512D"
      },
      fontFamily: {
        "poetsen": ["Poetsen One", "sans-serif"],
        "cairo": ['"Cairo"', 'sans-serif']
      }
    },
  },
  plugins: [],
}