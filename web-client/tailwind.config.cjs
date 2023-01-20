/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'nav-bar': '#714e2f',
      },
      backgroundImage: {
        hero: "url('https://img.freepik.com/free-vector/dog-background-vector-with-cute-pets-illustration_53876-127697.jpg?w=2000')",
      },
    },
  },
  plugins: [],
};
