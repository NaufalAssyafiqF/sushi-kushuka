/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffb000',
        'secondary': '#ffe3d3'
      },
      backgroundImage: {
        'sushi-hero': "url('public/sushi-chopstik-2.png')",
      }
    },
  },
  plugins: [],
}