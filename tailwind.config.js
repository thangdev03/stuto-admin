/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#9069FF',
        secondaryColor: '#E0E9F8',
        backgroundColor: '#E0E9F8',
        boxBackground: '#FFFFFF',
        textColor: '#222222',
        textInactive: '#777777',
      },
      boxShadow: {
        blockShadow: '1px 3px 4px 0px rgba(0, 0, 0, 0.10)',
      }
    },
  },
  plugins: [],
}

