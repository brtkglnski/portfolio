/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grain': "url('https://raw.githubusercontent.com/brtkglnski/portfolio/refs/heads/master/src/assets/grain.png')"
      },
      blur: {
        '4rem': '4rem', 
        '8rem': '8rem', 
        '12rem': '24rem'
      },
      clipPath: {
        inset: 'inset(0)',
      },
      fontFamily: {
        customFont: ['"Unbounded"', "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

