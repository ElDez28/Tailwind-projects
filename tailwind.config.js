module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      maxWidth: {
        logn: "max-content",
      },
      fontFamily: {
        display: ["Ubuntu", "sans-serif"],
        sans: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
