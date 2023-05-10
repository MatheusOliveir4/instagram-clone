/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    './src/screens/*.tsx',
    './src/components/*.tsx',
  ],
    theme: {
      extend: {
        colors: {
          blue: {
            500: '#3797EF'
          },
          gray: {
            100: '#FAFAFA',
            200: '#ABABAB'
          },
          black: {
            900: '#000000',
            700: '#262626'
          },
          yellow: '#FBAA47',
          red: '#D91A46',
          purple: '#A60F93',
          white: '#FFFFFF'
        },

        fontFamily: {
          regular: 'Karla_400Regular',
          bold: 'Karla_700Bold'
        }
      },
    },
  plugins: [],
}