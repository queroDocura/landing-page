module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#BCA276',
      primaryDark: '#8A7757',
      secondary: '#DE7012',
      secondaryDark: '#AB570E',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};