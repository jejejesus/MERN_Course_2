/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
    container: {
      padding: {
        DEFAULT: '2rem',
        md: '10rem',
      },

    },
    colors: {
      'pink': '#F7CAC9',
      'dark-pink': '#F7786B',
      'blue': '#92A8D1',
      'dark-blue': '#034F84',
      'white': '#FFFFFF',
      'black': '#000000',
      'really-light-gray': '#F0F0F0',
      'light-gray': '#C0C0C0',
      'gray': '#808080',
      'dark-gray': '#404040',
      'green': '#57C785',
      'red': '#C70039',
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.underline-dotted': {
          'text-decoration': 'underline',
          'text-decoration-style': 'dotted',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

