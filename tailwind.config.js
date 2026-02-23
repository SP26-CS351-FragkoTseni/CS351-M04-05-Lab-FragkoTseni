/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocu: {
          navy: '#1A3374',
          columbia: '#76AFE3',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
