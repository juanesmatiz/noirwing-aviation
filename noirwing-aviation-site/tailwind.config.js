
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand: { gold: "#D4AF37", black: "#0A0A0A" } },
      boxShadow: { luxe: "0 10px 30px rgba(0,0,0,0.35)" }
    }
  },
  plugins: []
};

