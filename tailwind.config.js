/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
        colors: {
          brightRed: 'hsl(12, 80%, 59%)',
          brightRedLight: 'hsl(12, 88%, 69%)',
        },
      spacing:{
        "big":"768px"
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
