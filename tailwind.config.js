/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'game': "url('../src/assets/game-2.jpg')",
      },
      fontFamily:{
        "BungeeSpice": ['Bungee Spice', 'cursive']
      },
      animation: {
        'gradient-xy':'gradient-xy 2s ease-in-out infinite',
        'matrix-effect-5000':'matrix 5s ease infinite',
        'matrix-effect-10000':'matrix 10s ease infinite',
        'matrix-effect-3000':'matrix 3s ease infinite',
        'matrix-effect-15000':'matrix 15s ease infinite',

      },
      keyframes:{
        'gradient-xy': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'400% 400%',
              'background-position': 'right center'
          }
      },
      'matrix':{
        '0%':{
          'transform': 'translateY(-100%)',
        },
        '100%':{
          'transform': 'translateY(200%)',
        }
      }
      }
    },
  },
  plugins: [],
}
