// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        recoleta: ["Recoleta", "serif"],
        averia: ["'Averia Serif Libre'", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00715D",
        secondary: "#FDD65B",
        accent: "#003B29",
        text: "#0C2117",
        paragraph: "#898989",
        light: "#F9F5E8",
      },
    },
  },
  plugins: [],
};
