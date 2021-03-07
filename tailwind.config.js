module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      width: {
        '768': '768px',
        '900': '900px'
      },
      height: {
        '500': '500px',
        '768': '768px',
        '900': '900px'
      },
    },
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
