const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)"
          },
          "50%": {
            transform: "scaleY(1)"
          }
        }
      },
      // animation-wavey
      animation: {
        wavey: "wavey 1000ms linear infinite"
      }
    }
  },
  plugins: [
    require("./plugins/openVariant"), 
    require("./plugins/animationDelay"),
    require("./plugins/tableCaption")
  ],
}

