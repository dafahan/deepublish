/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: '#EC7C0B',
        secondary:'#FDE1E1',
        primary: '#9C3616',
        info : '#218BFF',
        decoration :'#355881',
      }
    }
  },
  plugins: [],
}

