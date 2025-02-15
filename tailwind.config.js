/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#7FD17F",
        grass: "#218421",
        orange100: "#FFD09C",
        orange200: "#FFA33D",
        pink: "#FEDBEF",
        netural: "#D3D3D3",
      },
      maxWidth: {
        half: "680px",
      },
    },
  },
  plugins: [],
};
