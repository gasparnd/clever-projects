module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    width: {
      mw: "300px",
      "80%": "80%",
      "1/2": "50%",
    },
    extend: {
      colors: {
        primary: "#6a35ff",
        white: "#fef7fd",
        black: "#1b1b1f",
      },
      height: {
        mh: "33.3%",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
