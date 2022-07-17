/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto100 : ['Roboto 100'],
        Roboto300 : ['Roboto 300'],
        Roboto400 : ['Roboto 400'],
        Roboto500 : ['Roboto 500'],
        Roboto700 : ['Roboto 700'],
      },
    },
  },
  plugins: [],
}
