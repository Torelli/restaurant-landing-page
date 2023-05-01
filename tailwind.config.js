/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        dish: "calc(100% - 7.5rem)",
      },
      keyframes: {
        up: {
          "0%": { transform: "translateY(4rem)" },
          "100%": { transform: "translateY(0)" },
        },
        side: {
          "0%": { transform: "translateX(-4rem)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
