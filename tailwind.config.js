/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '250px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1336px',
    },
    extend: {
      colors: {
        primary: '#FF5414',
        secondary: '#0572C4',
        black: '#000000',
        white: '#ffffff',
        gray: {
          100: '#F8F9FA',
          200: '#E4E6E7',
          300: '#DAE0E6',
          500: '#7E8183',
          700: '#272729',
          800: '#1A1A1B',
        },
      },
    },
  },
  plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
}
