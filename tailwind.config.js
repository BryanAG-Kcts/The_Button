/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors : {
        "light-Beige" : "#fefae0",
        "dark-Gray" : "#46494c",
        "dark-Mode" : "#343434",

        "dark-Green" : "#008000",
        "light-Green" : "#38b000",
        "dark-Red" : "#a4161a",
        "light-Red" : "#e5383b",
        "dark-Blue" : "#5e60ce",
        "light-Blue" : "#5390d9"
      },
      fontFamily : {
        "Quick" : ["Quick", "sans-serif"],
      }
    },
  },
  plugins: [],
}