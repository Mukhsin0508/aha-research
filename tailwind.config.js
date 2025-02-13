/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '22.5rem',//390px dan 1366px
      xl: '85.3rem',//1366px dan full 
    },
    colors: {
      'white': '#fff',
      'white400': '#FEFEFE',
      'black': '#000',
      'gray500': '#494949',
      'blue': '#2722DF',
      'blue200': '#ECEFF7',
    },
    
    extend: {

    },
  },
  plugins: [],
}