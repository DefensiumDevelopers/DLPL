/** @type {import('tailwindcss').Config} */
const { transform } = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".my-rotate-x-180": {
          transform: "rotateY(180deg)"
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d"
        },
        "perspective": {
          perspective: "1000px"
        },
        ".backface-hidden":{
          backfaceVisibility:"hidden"
        }
      });
    })
  ],
}
