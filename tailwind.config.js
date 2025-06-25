/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "'Poppins',sans - serif",
        'bakbak': "'Bakbak One', sans - serif",
        'young': "'Young Serif', sans-serif",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1140px",
        }
      },
    },
  },
  plugins: [],
}

