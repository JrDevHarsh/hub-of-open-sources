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
      },
    },
  },
  plugins: [],
};
