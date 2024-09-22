/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      mobile:'320px',
      tablet:'768px',
      palmtop:'1152',
      laptop:'1440px',
      desktop:'1920px'
    },
    extend: {},
  },
  plugins: [],
}

