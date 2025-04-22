/** @type {import('tailwindcss').Config} */
import {
  GLOBAL_COLOR,
  GLOBAL_COLOR_SUCCESS,
} from "./src/constant/colorCustomize";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: GLOBAL_COLOR,
        secondary: GLOBAL_COLOR_SUCCESS,
      },
    },
  },
  plugins: [],
};
