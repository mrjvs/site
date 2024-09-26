/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        shade: {
          800: '#0A0C0B',
          400: '#9FAAA5',
          300: '#EFDCC3',
        }
      }
    },
  },
  plugins: [],
};
