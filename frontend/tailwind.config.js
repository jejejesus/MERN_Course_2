/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '2rem',
        md: '10rem',
      },

    },
    colors: {
      'pink': '#f7cac9',
      'dark-pink': '#f7786b',
      'blue': '#92a8d1',
      'dark-blue': '#034f84',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#808080',
      'dark-gray': '#404040',
    }
  },
  plugins: [],
}

