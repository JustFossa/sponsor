/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        text: "#c2cad1",
        highlight: "#3b93f8",
        dark: "#687078",
        background: "#0d1117",
        darker2: "#30363d",
        darker: "#282d34"
      },
    },
  },
  variants: {
    outline: ['focus-within'],
  },
  plugins: [],
}
