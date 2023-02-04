/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1440px",
      },
      colors: {
        "c-black": {
          1: "#0a0a0a",
          2: "#333333",
          3: "#111111",
        },
        "c-gray": {
          1: "#9f9f9f",
        },
        "c-white": {
          1: "#c9d1d9",
        },
      },
      backgroundImage: {
        dim: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
      },
    },
  },
  plugins: [],
};
