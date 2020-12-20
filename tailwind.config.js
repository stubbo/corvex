const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './resources/js/**.*.tsx'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      }
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
