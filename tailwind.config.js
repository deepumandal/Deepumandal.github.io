/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundLight: "#F1F7FF",
        backgroundDark: "",
      },
      fontFamily: {
        inter: ["inter"],
      },
      screens: {
        tabView: "490px",
        // => @media (min-width: 490px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      spacing: {
        "space-avialable": "-webkit-fill-available",
      },
    },
  },
  plugins: [],
};
