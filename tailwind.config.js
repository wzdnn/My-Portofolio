/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#fffffe",
        light: "#0f0e17",
        primary: "#ff8906",
        secondary: "#f25f4c",
        paragraph: "#a7a9be",
        backg: "#fffffe",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0f0e17 8px, #0f0e17 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0f0e17 8px, #0f0e17 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0f0e17 6px,#0f0e17 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0f0e17 4px,#0f0e17 40px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
