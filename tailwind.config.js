/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    letterSpacing:{
      'extrawide': '.4em'
    },
    fontFamily: {
      'main': ['Montserrat','sans-serif'],
      'title': ['Fraunces', 'sans-serif']
    },
    extend: {
      colors:{
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'white': 'hsl(0, 0%, 100%)',
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'cream': 'hsl(30, 38%, 92%)'
      },
      backgroundImage:{
        'desktop-product': "url('./images/image-product-mobile.jpg')",
        'phone-product': "URL('./images/image-product-mobile.jpg')"
      },
      height:{
        '102': '30rem'
      },
      width: {
        '74': '18.75rem',
        '148': '26.75rem'
      }
    },
  },
  plugins: [],
}
