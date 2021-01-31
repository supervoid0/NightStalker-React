module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    'primary': '#161b22',
    'secondary': '#0d1117',
    'sp': 'rgba(56,139,253,0.1)',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
