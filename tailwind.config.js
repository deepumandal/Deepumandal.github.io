/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Theme
        "background-l": "#E7EDFA", // Light gray background
        "primary-l": "#FFFFFF", // Slate blue primary color
        "secondary-l": "#F9F8FA", // Soft blue secondary color
        "heading-l": "#2E3440", // Dark gray for headings
        "text-l": "#4C566A", // Medium gray for text
        "link-l": "#4C566A", // Medium gray for text
        "border-l": "#FFFFFF",

        // Dark Theme
        "background-d": "#1B2531", // Dark blue-gray background
        "primary-d": "#283142", // Light blue primary color
        "secondary-d": "#434C5E", // Dark slate blue secondary color
        "heading-d": "#D8DEE9", // Light gray for headings
        "text-d": "#AEB7C4", // Medium gray for text
        "link-d": "#AEB7C4", // Medium gray for text
        "border-d": "#FFFFFF",
      },
      fontFamily: {
        inter: ["inter"],
        epilogue: ["epilogue"],
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
      boxShadow: {
        customShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      },
    },
  },
  plugins: [],
};
