// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#141b41',      // Para Encabezado, hover de botones, active de campos
        'brand-primary': '#306bac',   // Para Títulos, botones principales
        'brand-secondary': '#6f9ceb',  // Para otros botones
        'brand-accent': '#98b9f2',    // Para hover de menú de navegación
        'brand-accent-hover': '#918ef4' // Para hover de enlaces de footer
      },
    },
  },
  plugins: [],
};