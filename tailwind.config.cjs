/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["'DM Sans', sans-serif"],
        "sans-pro": ["'Source Sans Pro', sans-serif"],
      },
      colors: {
        "primary-color": "#203271",
        "font-color": "#101C45",
        "acc-background": "#9BEAE0",
      },
    },
  },
  plugins: [],
};
