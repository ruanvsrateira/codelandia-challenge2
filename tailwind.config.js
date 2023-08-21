/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html,js,tss,jsx,tsx}'],
  theme: {  
    extend: {
      fontFamily: {
        'montSerrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'blue': '#00AEFF',
        'lightSilver': '#EBE9EA',
        'extraLightSilver': '#F9F9F9',
        'darkGray': '#181818',
        'gray': '#474747',
      },
      screens: {
        'sm': '400px'
      },
    },
  },
  plugins: [],
}