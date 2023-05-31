/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '250px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1336px',
    },
    extend: {},
  },
  plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
}
