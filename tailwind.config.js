/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors : {
        "light-Beige" : "#fefae0",
        "dark-Green" : "#008000",
        "light-Green" : "#38b000"
      },
      fontFamily : {
        "Quick" : ["Quick", "sans-serif"],
      }
    },
  },
  plugins: [],
}