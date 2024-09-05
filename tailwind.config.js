/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        details: "#0147FF",
        complementary: "#282828",
        whiteSmoke: "#F7F7F7",
        dots: "#EDEDED",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        robotoFlex: ["Roboto Flex", "sans-serif"],
      },
    },
  },
  plugins: [],
};
