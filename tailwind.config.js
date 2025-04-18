module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        gideon: ['"Gideon Roman"', "serif"],
        helvetica: ['"Helvetica LT Thai W31 Regular"', "sans-serif"], // Add your custom font here
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};