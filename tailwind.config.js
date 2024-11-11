import theme from './src/styles/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'lightBlack': theme.colors.lightBlack,
        'black': theme.colors.black,
        'darkSlateGray': theme.colors.darkSlateGray,
        'lightSalmon': theme.colors.lightSalmon,
        'coral': theme.colors.coral,
        'lightGray': theme.colors.lightGray,
        'snow': theme.colors.snow
      }
    },
  },
  plugins: [],
}

