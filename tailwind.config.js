/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        dish: "calc(100% - 7.5rem)",
      },
    },
  },
  plugins: [],
};
