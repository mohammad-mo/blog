const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8f8f8',
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
        fluid: 'repeat(auto-fit, minmax(4rem, 1fr))',
        posts: 'repeat(auto-fit, minmax(16rem, 1fr))',
      },
    },
  },
  plugins: [],
}
