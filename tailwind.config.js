/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Tangerine: ['Tangerine'],
        Sacramento: ['Sacramento']
      }

    },
  },
  plugins: [require("daisyui")],
}
