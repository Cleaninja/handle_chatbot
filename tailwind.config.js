module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'main': '#5479F7',
        'main-active': '#2B58F1',
      },
      padding: {
        'container': '186px'
      },
      top: {
        '1px': '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
