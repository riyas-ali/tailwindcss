/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      flex: {
        '1/4': '1 1 25%',
        '1/2': '1 1 50%',
      }
    },
  },
  plugins: [],
}

