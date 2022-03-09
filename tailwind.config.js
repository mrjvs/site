let plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      colors: {
        bray: {
          100: "#9292AC",
          200: "#4A4A5A",
          300: "#29293B",
          400: "#262636",
          500: "#212131",
          600: "#181826",
          700: "#11111B",
        },
        "thm-green": "#5AE676",
        "thm-green-dark": "#1D2D30",
        "thm-pink": "#EE82A6",
        "thm-pink-dark": "#322032",
        "thm-blue": "#ACACDB",
        "thm-blue-dark": "#1A1C33",
      },
      lineHeight: {
        12: "3rem",
      },
    },
  },
  plugins: [],
};
