/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        logo: ["praise", "cursive"],
        handlee: ["Handlee", "cursive"],
      },
      backgroundImage: {
        'my-image': "url('./assets/pranit.jpg')",
      }
    },
  },
  plugins: [],
}

