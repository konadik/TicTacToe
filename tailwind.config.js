/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-pink': '#E09DAD',
        'light-pink': '#EEC4CB',
        'light-green': '#AEBC6E',
        'dark-green': '#768D4C',
        'darker-green': '#335243',
        'white-dirty': '#F5F2E3'
      },
    },
  },
  plugins: [],
}
