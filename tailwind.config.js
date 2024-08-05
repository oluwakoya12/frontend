/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mybg: 'rgb(30,30,30)',
        secondbg: 'rgb(50,50,50)',
        inputBg: 'rgb(40,40,40)'
      }
    },
  },
  plugins: [],
}

