const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenor: ["Avenor"],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        heroBg: "url('/hero-bg.png')",
        headerBg: "linear-gradient(180deg, #151515 27.62%, #1A1C1F 100%)",
        goldGr: "linear-gradient(94.02deg, #FFC300 8.31%, #FF9A00 95.06%)",
      },
      colors: {
        jungleGreen: "#222528",
        gray: "#4A4A76",
      },
      screens: {
        mid: "1320px",
      },
    },
  },
  plugins: [],
};