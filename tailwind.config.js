/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pinkImg: 'url(/src/assets/bg-desktop.png)'
      },
      colors: {
        pink: {
          100: '#DF9194'
        }
      },
    },
  },
  plugins: [],
}
