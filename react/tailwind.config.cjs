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

                //"color-gradient-1": "linear-gradient(90deg, #0634AD 0%, #15D177 11.46%, #1D6C3D 23.44%, #B219F0 38.02%, #F4CD42 51.57%, #DE43A8 80.73%, #3B8F39 90.11%, #0634AD 100%)",

                //"color-gradient-2": "linear-gradient(90deg, #0645AD 3.65%, #FD9F12 21.35%, #FC4646 41.67%, #B219F0 65.1%, #24CA7A 79.17%, #1D6C3D 91.15%, #0645AD 100%)",
            },
        },
    },
    // plugins: [require("@tailwindcss/forms")],
};

