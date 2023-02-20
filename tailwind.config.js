/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens:{
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        black: '#232536',
        yellow: '#FFD050',
        purple: '#592EA9',
        darkgrey: '#4C4C4C',
        mdgrey: '#6D6E760',
        lightgrey: '#F4F4F4',
        lavender: '#F4F0F8',
        lightyellow: '#FBF6EA',
        light: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
