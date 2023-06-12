/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#05132c',
        primary: '#021d41',
        accent: '#356af0',
        text: '#fff',
        grayText: '#d7d7d7',
        borderColor: '#06326b',
        borderColor2: '#203b81',
        productTitle: '#3c82ff',
        circleBtn: '#1b6cf9',
        footerBtn: '#002657'
      }
    },
  },
  plugins: [],
}

