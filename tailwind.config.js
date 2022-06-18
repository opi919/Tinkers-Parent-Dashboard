const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F296D",
        secondary: "#F1554C",
        // Purple
        "custom-purple": {
          DEFAULT: "#A63D86",
          dark: "#814E71",
        },
        text: {
          DEFAULT: "#393D54",
          gray: "#BFBFBF",
        },
        bg: "#F3F5FB",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
