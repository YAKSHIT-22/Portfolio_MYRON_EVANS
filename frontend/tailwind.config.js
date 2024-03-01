/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#2C2B2B',
        secondary: '#201F1F',
        'sm-primary': '#333333',
      },
      colors: {
        primary: '#FFFFFF',
        secondary: '#EEEEEEB3',
        golden: '#C9B18D',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right, #8D621D, #B79766)',
      },
      fontFamily: {
        arial: ['Arial Rounded MT', 'cursive'],
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      borderColor: {
        golden: '#C9B18D',
      },
      boxShadowColor: {
        golden: '#C9B18D',
      },
      boxShadow: {
        custom: '0 0 12px -2px --tw-shadow-color',
      },
      fontSize: {
        'main-heading': ['3.875rem', 'auto'],
        'section-heading': ['2.875rem', 'auto'],
        'content-heading': ['1.625rem', '2rem'],
        body: ['1rem', '1.75rem'],
        button: ['1.125rem', '1.125rem'],
      },
    },
  },
  plugins: [],
}
