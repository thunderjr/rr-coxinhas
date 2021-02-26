module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      rr: '#ce1a26'
    }),
    filter: {
      'invert': 'invert(1)',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(3px)',
    },
  },
  variants: {
    extend: {},
    backdropFilter: ['responsive'],
  },
  plugins: [
    require('tailwindcss-filters')
  ],
}
