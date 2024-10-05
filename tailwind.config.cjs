/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        shade: {
          800: '#0A0C0B',
          400: '#9FAAA5',
          350: '#C6B39C',
          300: '#EFDCC3',
        },
        primary: {
          100: '#E1AD69'
        }
      },
    },
    fontFamily: {
      body: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['"Crimson Pro"', '"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
};
