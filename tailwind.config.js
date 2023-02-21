/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1535px",
      },
      colors: {
        "youtube-dark": "#020202",
        "youtube-light": "#e2e2e2",
      },
    },
  },
  plugins: [],
};
