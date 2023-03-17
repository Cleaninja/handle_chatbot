module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        "main": "#5479F7",
        "main-active": "#2B58F1",
        "img-strok": "#9EBDFF",
        "strok-divider": "#BBBBBB",
        "back": "f6f9fd"
      },
      textColor: {
        "main": "#5479F7",
        "main-active": "#2B58F1",
        "img-strok": "#9EBDFF",
        "strok-divider": "#BBBBBB",
      },
      padding: {
        container: "186px",
      },
      height: {
        74: "74px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
