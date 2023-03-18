module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "main": "#5479F7",
        "main-active": "#2B58F1",
        "img-strok": "#9EBDFF",
        "strok-divider": "#BBBBBB",
        "back": "#f6f9fd"
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
