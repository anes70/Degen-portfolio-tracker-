/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {

      colors: {

        background: "#050507",

        card: "#0b0e11",

        borderDark: "#1f2937",

        neonGreen: "#00ff88",

        dangerRed: "#ff3344",

        electricBlue: "#008cff",

        neonPurple: "#b026ff"

      },

      backdropBlur: {

        glass: "18px"

      },

      boxShadow: {

        neon:
          "0 0 25px rgba(0,255,136,0.35)",

        danger:
          "0 0 25px rgba(255,51,68,0.35)"

      }

    }
  },

  plugins: []
};
