/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
        'gunmetal': "#1b232c",
        'flash-white': "#f4f5f8",
        'slate-grey': '#808997',
        'light-white': '#FAFCFF',
        'medium-blue': '#3026B9',
        'davy-grey': '#4A4E55',
        'persian-rose': '#FC2EB0',
        'brown': '#90722C',
        'light-brown': '#FCF2D9',
        'green': '#2E6638',
        'light-green': '#DCEEDE',
        'blue': '#101749',
        'light-blue': '#EAE8F7',
        'purple': '#7A4C7A',
        'light-purple': '#FCE9FC',
        'pine-green': '#19746A',
        'light-pine-green': '#E7FBF9',
        'pigment-green': '#4DAA5D'
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'lilita': ['Lilita One', 'cursive']
      },
      screens: {
        'xs': '420px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px'
      },
      boxShadow: {
        'tab-item': 'rgba(0, 0, 0, 0.1) 0px 3px 5px',
        'tab-item-hover': 'rgba(0, 0, 0, 0.2) 0px 3px 8px',
        'nav': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      }
    },
  },
  plugins: [],
}

