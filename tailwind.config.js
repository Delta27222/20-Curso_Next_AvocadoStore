/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimGray: "#efefef",
        dimGray2: "#c8c8c8",
        dimGray3: "#a0a0a0",
        dimGray4: "#797979",
        dimCartEmpty: "#FFFAF3",
        dimCartEmptyBorder: "#E5D4C2",
        dimLinkColor: "#4C8AC7",
        buttonPrimary: "#21BA45"
      },
    },
    screens: {
      mm:"0px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [nextui()],
}

