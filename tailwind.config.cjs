/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gold: {
        100: "#B78E4B",
      },
      gray: {
        50: "#fafafa",
        100: "#e4e5f1",
        200: "#d2d3db",
        300: "#9394a5",
        400: "#484b6a",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      bodoni: ['"Bodoni Moda"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
