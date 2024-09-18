/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      fontFamily: {
      'caslon': ['Lato', 'sans-serif'],
      'play': ['Playfair Display', 'serif'],
    }
  },
  plugins: [],
}