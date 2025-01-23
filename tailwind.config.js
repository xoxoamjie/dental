/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Sans-serif"],
      },
      colors: {
        primary: "#14A8C2",
        secondary: "#17b3cf",
        tertiary: "#8E6643",
        description: "#888888",
        title: "#09505C",
        logo: "#8E6643",
        light: "#FDF8EF",
        fifth: "#FC8621",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      }
    },
  },
  plugins: [],
}

