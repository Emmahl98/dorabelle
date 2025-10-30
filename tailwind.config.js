/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#effdf6',
          100: '#d9fbe9',
          200: '#b7f3d4',
          300: '#86e7b8',
          400: '#4fd399',
          500: '#22c07b',
          600: '#16a564',
          700: '#148a55',
          800: '#136e46',
          900: '#115a3b'
        }
      }
    }
  },
  plugins: []
};
