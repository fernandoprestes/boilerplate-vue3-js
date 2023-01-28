/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,vue}', './index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: '#e9e8ff',
          100: '#d8d5ff',
          200: '#bbb4ff',
          300: '#9787ff',
          400: '#8159ff',
          500: '#7533ff',
          600: '#7210ff',
          700: '#6f06fc',
          800: '#5809ca',
          900: '#2c0b61',
        },
      },
      fontSize: {
        'display-2xl': ['4.5rem', 1],
        'display-xl': ['3.75rem', 1],
        'display-lg': ['3rem', 1],
        'display-md': ['2.25rem', '2.5rem'],
        'display-sm': ['1.875rem', '2.25rem'],
        'display-xs': ['1.5rem', '2rem'],
        'xl': ['1.25rem', '1.875rem'],
        'lg': ['1.125rem', '1.75rem'],
        'md': ['1rem', '1.5rem'],
        'sm': ['0.875rem', '1.25rem'],
        'xs': [' 0.75rem', '1.125rem'],
      },
    },
  },
  plugins: [],
};
