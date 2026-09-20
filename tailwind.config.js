/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0D1117", paper: "#F5F6F3", brand: "#3468F5" },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        sans: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
