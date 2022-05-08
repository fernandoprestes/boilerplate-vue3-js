module.exports = {
  content: ['./src/**/*.{html,js,vue}', './src/**/*', './index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          300: '#B99EE0',
          500: '#422471',
          600: '#2C0B61',
          800: '#15052E',
        },
      },
    },
  },
  plugins: [],
};
