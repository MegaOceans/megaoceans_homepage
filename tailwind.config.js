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
      backgroundColor: {
        primary: "#0A0D2D",
        secondary: "#2CEE91",
        terinary: "#343651",
      },
      textColor: {
        reviewLogo: "#9F9FAB",
        secondary: "#2CEE91",
        primary: "#0A0D2D",
        terinary: "#343651",
      },
      width: {
        view: "85%",
        testimonial: "95%",
        review: "358px",
        servicesBar: "420px",
      },
      height: {
        review: "469px",
        servicesBar: "550px",
      },

      fontSize: {
        footer: "192px",
      },
    },
  },
  plugins: [],
};
