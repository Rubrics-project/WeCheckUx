/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-bck": "#000000",
        "color-blue-p": "#0645AD",
        "color-blue-s": "#3366BB",
        "color-blue-light": "#A7D7F9",
        "color-grey-bg": "#F6F6F6",
        "color-grey-title": "#72777D",
        "color-grey-border": "#C8CCD1",
        "color-grey-border-btn": "#A2A9B1",
      },

      backgroundImage: {
        "gradient-final": "url('./src/assets/gradient1.svg')",
      },

      fontFamily: {
        latocustom: ["Lato", "sans-serif"],
        opencustom: ["Open Sans", "sans-serif"],
      },
      maxWidth: {
        "1/2": "50%",
        "3/4": "75%",
      },
    },
    // plugins: [require("@tailwindcss/forms")],
  },
};
