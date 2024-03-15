/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        layout: '200px minmax(900px, 1fr) 200px',
      },
      backgroundColor: {
        primary: '#2C2B2B',
        secondary: '#201F1F',
        'admin-navbar': '#262626',
        'sm-primary': '#333333',
      },
      colors: {
        primary: '#FFFFFF',
        secondary: '#EEEEEEB3',
        golden: '#C9B18D',
        'dark-golden': '#8D611D',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right, #8D621D, #B79766)',
      },
      fontFamily: {
        arial: ['Arial Rounded MT', 'cursive'],
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        publicsans: ['Public Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderColor: {
        golden: '#C9B18D',
        primary: '#2C2B2B',
        secondary: '#201F1F',
        'admin-navbar': '#262626',
        'sm-primary': '#333333',
      },
      boxShadowColor: {
        golden: '#C9B18D',
        primary: '#2C2B2B',
        secondary: '#201F1F',
        'admin-navbar': '#262626',
        'sm-primary': '#333333',
      },
      boxShadow: {
        custom: '0 0 12px -2px --tw-shadow-color',
      },
      fontSize: {
        'main-heading': ['3.875rem', '71.75px'],
        'section-heading': ['2.875rem', '53.23px'],
        'content-heading': ['1.625rem', '2rem'],
        'box-heading': ['1.25rem', '1rem'],
        body: ['1rem', '1.75rem'],
        button: ['1.125rem', '1.125rem'],
        'cart-item-heading': ['1.375rem', '1.875rem'],
        'cart-item-text': ['0.875rem', '1.25rem'],
        'admin-nav-lg': ['17px', '25.5px'],
        'admin-nav-md': ['16px', '24px'],
        'admin-nav-sm': ['12px', '18px'],
      },
      rotate: {
        270: '270deg',
      },
    },
  },
  plugins: [],
}
