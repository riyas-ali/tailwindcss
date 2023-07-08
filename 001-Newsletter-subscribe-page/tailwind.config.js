/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fira Sans', ...defaultTheme.fontFamily.sans],
      },
      // colors: {
      //   'primary': '#5555ff'
      // },
      // height: {
      //   '86': '3.25rem'
      // }
    },
  },
  plugins: [],
}

