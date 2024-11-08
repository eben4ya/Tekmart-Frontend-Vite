/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    colors:{
      'yellow': '#FFDE4D',
      'black': '#343131',
      'white': '#FFFFFF',
      'white2': '#E4E4E7',
    },
    extend: {
      fontFamily:{
        vinque: ['Vinque', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

