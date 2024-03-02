/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  fontFamily: {
    mainFont: ["Montserrat", "sans-serif"],
    inter: ["Inter", "sans-serif"],
    rubik: ["Rubik", "sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        primaryColor: "#00B87C",
        "text-dark": "#101727",
        "secondary-dark": "#1A1A1C",
        blue: "#0DA3FF",
        white: "#FFFFFF",
        lightGray: "#F6F6F6",
        black: "#000000",
      },
      backgroundImage: {
        buttonBlue:
          "background: linear-gradient(98.57deg, #00579B 15.34%, #45A1F7 91.64%)",
      },
    },
    screens: {
      sm: "650px",
      lg: "960px",
    },
  },

  plugins: [],
};
