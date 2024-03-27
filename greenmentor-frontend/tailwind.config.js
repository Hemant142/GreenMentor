/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-darkpink': '#f18382',
        'custom-pink': '#f5cac2',
        'custom-green':'#6c877c'
      },
      textColor: {
        'custom-pink': '#f8aba8',
        'custom-darkpink': '#f18382',
        'custom-green':'#6c877c'
      },
      boxShadow: {
        'my-shadow': '#2b6777 0px 5px 15px;',
      },
      borderColor:{
        'custom-darkpink': '#f18382',
        'custom-blue': '#c8d8e4',
        'custom-green': '#52ab98',
      },
      borderRadius:{
        'custom-border-radius':"40px"
      },
      border:{
        'custom-green':'#6c877c'
      }
    },
  },
  plugins: [],
}

