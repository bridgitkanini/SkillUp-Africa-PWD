/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D2C5E",
        secondary: "#F69B0A",
      },
    },
  },
  plugins: [],
};
