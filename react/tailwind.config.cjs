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

        // "gradient-one": "#0634AD",
        // "gradient-two": "#15D177",
        // "gradient-tres": "#1D6C3D",
        // "gradient-four": "#B219F0",
        // "gradient-five": "#F4CD42",
        // "gradient-seven": "#DE43A8",
        // "gradient-eight": "#3B8F39",
      },
      backgroundImage: {
        "gradient-final": "url('./public/assets/gradient1.svg')",
      },

      fontFamily: {
        latocustom: ["Lato", "sans-serif"],
        opencustom: ["Open Sans", "sans-serif"],
      },
    },
    // plugins: [require("@tailwindcss/forms")],
  },
};
