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
    },
  },
  plugins: [],
};
