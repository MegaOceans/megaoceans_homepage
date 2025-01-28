/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: "#2CEE91",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poiret: ["Poiret", "sans-serif"],
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundColor: {
        primary: "#0A0D2D",
        secondary: "#2CEE91",
        terinary: "#343651",
        secondaryGreen: "#85F5BF",
      },
      textColor: {
        reviewLogo: "#9F9FAB",
        secondary: "#2CEE91",
        primary: "#0A0D2D",
        terinary: "#343651",
        text: "#E7E7EA",
      },
      width: {
        view: "85%",
        testimonial: "95%",
        review: "358px",
        servicesBar: "420px",
        whyUs: "410px",
        contact: "40%",
        form: "60%",
        contactMain: "90%",
        Input: "50%",
        price: "33%",
      },
      height: {
        review: "469px",
        servicesBar: "550px",
        whyUs: "320px",
        contactUs: "600px",
        Input: "30px",
        price: "750px",
      },

      fontSize: {
        footer: "192px",
      },
      fill: {
        primary: "#0A0D2D", // Primary color for fill
        secondary: "#2CEE91", // Secondary color for fill
        terinary: "#343651", // Tertiary color for fill
        white: "#FFFFFF", // White color fill
        red: "#FF0000", // Red color fill
      },
    },
  },
  plugins: [],
};
