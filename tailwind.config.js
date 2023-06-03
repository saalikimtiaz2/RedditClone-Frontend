/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '0px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1336px',
    },
    container: {
      padding: {
        xs: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '3rem',
      },
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
          600: '#38383b',
          700: '#272729',
          800: '#1A1A1B',
        },
      },
    },
  },
  plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
}
