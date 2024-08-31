/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/accaro.png')",
        'about-pattern': "url('./src/assets/model.png')",
      }
    },
  },
  plugins: [],
}