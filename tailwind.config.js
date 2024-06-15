module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "6px 6px 0px -3px rgba(255,255,255,1)",
      },
      backgroundImage: {
        "mountain": 'url("./src/assets/parallax.jpg")',
        "mountain2": 'url("./src/assets/parallax2.jpg")',
        "abstract": 'url("./src/assets/parallax3.svg")',
        "dune": 'url("./src/assets/dune.jpg")',
        "dune2": 'url("./src/assets/dune2.jpg")',
      },
      colors: {
        dark: "#212121",
        lightDark: "#323232",
        darkBlue: "#0F4C75",
        normalBlue: "#3282B8",
        lightBlue: "#BBE1FA"
      },
      textColor: {
        darkTheme: "white",
        lightTheme: "#151515",
      },
      fontFamily:{
        'Dune': ['Dune']
      },
      blur: {
        xs: '1.5px',
      }
    },
  },
  plugins: [],
};
