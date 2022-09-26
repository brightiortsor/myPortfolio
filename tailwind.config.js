/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      colors: {
        ebonyBlue: "(221, 57%, 5%)",
        deepBlue: "hsl(220, 82%, 2%)",
        lightBlue: "hsl(221, 41%, 12%)",
        veryLightBlue: "hsl(219, 23%, 17%)",
      },
      spacing: {
        big: "768px",
      },
      backgroundImage: {
        aboutImg:
          "url('/about.svg')",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
