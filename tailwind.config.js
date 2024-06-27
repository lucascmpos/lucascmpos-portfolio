/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-dark': '#020211',
        'secondary-dark': '#030317',
        'primary-light': '#ffffff',
        'secondary-light': '#fcfcfc',
      },
      borderColor: {
        'primary-dark': '#020211',
        'secondary-dark': '#2e2e40',
        'primary-light': '#ffffff',
        'secondary-light': '#ebebeb',
      },
    },
  },
  plugins: [],
}