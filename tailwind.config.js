/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#FFDE4D",
      black: "#343131",
      white: "#FFFFFF",
      white2: "#E4E4E7",
      zinc: "#EEEEF0",
      gray: "#D7D6D6",
      red: "#FF0000",
      "blue-link": "#2F80ED",
    },
    extend: {
      fontFamily: {
        vinque: ["Vinque", "serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [import("@tailwindcss/aspect-ratio")],
};
