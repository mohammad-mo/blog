const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8f8f8',
        primaryBlack: '#111827',
      },
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        sansSerif: ['Varela Round', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        hero: 'url(/src/assets/hero.jpg)',
      },
      gridTemplateColumns: {
        category: 'repeat(auto-fit, minmax(4rem, 1fr))',
        posts: 'repeat(auto-fill, minmax(16rem, 1fr))',
      },
      height: {
        '3lines': 'calc(3 * 1.25rem)',
      },
    },
  },
  plugins: [],
}
