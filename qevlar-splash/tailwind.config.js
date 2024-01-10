/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{jsx,js,ts,tsx,html",
    "./src/components/*.{jsx,js,ts,tsx,html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d2332",
        secondary: "#defeab",
        tertiary: "#c4b7cb",
        dark: "#0E1017",
      },
      fontFamily: {
        customFont: ['"Roboto"', "sans"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
