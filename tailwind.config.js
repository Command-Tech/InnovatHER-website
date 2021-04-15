module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        openSans: "Open Sans, sans-serif",
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
