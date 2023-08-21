/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html,js,tss,jsx,tsx}'],
  theme: {  
    extend: {
      fontFamily: {
        'montSerrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'brand': '#574AE8',
        'brand-blue': '#3EA1DB',
        'dark-10': '#1A202C',
        'dark-20': '#717171',
        'dark-30': '#F3F5F7',
        'dark-40': '#FFFFFF',
        'dark-50': '#1A202C',
        'support-1': '#2962FF',
        'support-2': '#0BB07B',
        'support-3': '#FFCE52',
        'support-4': '#F03D3D',
        'support-5': '#E0E0E0',
      },
      screens: {
        'sm': '400px'
      },
    },
  },
  plugins: [],
}