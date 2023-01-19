/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      newcolor:"#b5b593",
      bald:"#f2f2f2",
      fon:"#e7e7e7",
      don:'#E6F0DD',
      fotter:"#636d62"
      },
      backgroundImage: {
        hero: "url('../public/baneer-bg.jpg')",
      },
    },
  },
  plugins: [],
}