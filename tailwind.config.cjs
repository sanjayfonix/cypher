/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: { xs: "400px" },
      fontFamily: {
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "0.8" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        blink: "blink 3s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

