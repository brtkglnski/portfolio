/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grain': "url('src/assets/grain.png')"
      },
      blur: {
        '4rem': '4rem', 
        '8rem': '8rem', 
        '12rem': '24rem'
      },
      clipPath: {
        inset: 'inset(0)',
      },
    },
  },
  plugins: [],
}

