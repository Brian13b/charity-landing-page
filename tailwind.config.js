import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"], 
      },
      colors: {
        'fondo': "#F9F4E8",
        'primary': "#016144",
        'secondary': "#FBCE46",
        'textprimary': "#223534",
        'textsecondary': "#4B5C5E"
      }
    },
  },
  plugins: [],
});
