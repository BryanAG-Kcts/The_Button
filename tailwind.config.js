/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors : {
        "light-Beige" : "#fefae0",

        "dark-Green" : "#008000",
        "light-Green" : "#38b000",
        "dark-red" : "#a4161a",
        "light-red" : "#e5383b",
        "dark-blue" : "#5e60ce",
        "light-blue" : "#5390d9"
      },
      fontFamily : {
        "Quick" : ["Quick", "sans-serif"],
      }
    },
  },
  plugins: [],
}