module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#E63E3A',
        black: '#101820',
      },
      fontFamily: {
        suisseIntl: ['SuisseIntl', 'sans-serif'],
      },
      screen: {
        xl: '1366px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
