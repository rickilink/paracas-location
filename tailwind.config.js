/** @type {import('tailwindcss').Config} */
module.exports = {
  //   content: [],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-contrast": "#1BC4B9",
        "primary-danger": "#F13E48",
        "primary-text": "#444A5F",
        "primary-background": "#EAEDED",
        "secondary-contrast": "rgba(27, 0, 192, 0.5)",
        "secondary-background": "#D9D9D9",
        "button-text": "#FFFFFF",
        "dark-primary-contrast": "#1BC4B9",
        "dark-primary-background": "#061315#",
        "dark-primary-text": "#C3C3C3",
        "dark-secondary-background": "#747474",
        "dark-button-text": "#383838",
      },
    },
  },
  plugins: [],
};
