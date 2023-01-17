/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
				info: 'linear-gradient(to bottom right, hsla(300, 85%, 30%, 1), transparent 100%)',
      },
      fontFamily: {
        burtons: "burtons",
        polygon: "polygon",
        
      }
    },
  },
  plugins: [],
}