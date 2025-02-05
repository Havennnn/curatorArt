module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        base: '#0D0D0D',
        secondary: '#404040',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
