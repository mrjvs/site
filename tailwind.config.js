module.exports = {
  theme: {
    extend: {
      colors: {
        bray: {
          100: "#9292AC",
          200: "#606070",
          250: "#323244",
          300: "#29293B",
          400: "#262636",
          500: "#212131",
          600: "#181826",
          700: "#11111B",
        },
        "thm-green": "#5AE676",
        "thm-green-dark": "#43C677",
        "thm-pink": "#EE82A6",
        "thm-pink-dark": "#EB5587",
        "thm-blue": "#ACACDB",
        "thm-blue-dark": "#344DCB",
      },
      fontFamily: {
        sans: '"Open Sans", Helvetica, Arial, sans-serif',
        display: '"Libre Franklin", Helvetica, Arial, sans-serif',
      },
      lineHeight: {
        12: "3rem",
      },
      outline: {
        white: ["2px solid white", "5px"],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      translate: ["group-hover"],
      outline: ["focus-visible"],
    },
  },
};
