  // tailwind.config.js
  module.exports = {
    purge: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          'black': '#252a34',
          'green': '#08d9d6',
          'red': '#ff2e63',
          'gray': '#eaeaea'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }