/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-img': "url('./assets/signin_bg.png')",
      },
    },
  },
  plugins: [],
};
