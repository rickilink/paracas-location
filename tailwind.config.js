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
        "secondary-contrast": "rgba(27, 0, 192, 0.5)",
        "primary-text": "#444A5F",
        "primary-background": "#EAEDED",
        "secondary-background": "#D9D9D9",
        "button-text": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
