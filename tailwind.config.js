/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        vert_citron : "#b5fe1f",
        bleu_roi : "#2f3baa"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

