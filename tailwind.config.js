/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: '#222222',
          800: '#434343',
          700: '#626262',
          600: '#767676',
          500: '#9f9f9f',
          400: '#bebebe',
          300: '#e1e1e1',
          200: '#efefef',
          100: '#f5f5f5',
          50: '#fafafa',
          white: '#fff',
        },
        primary: {
          900: '#004eb4',
          800: '#016dd3',
          700: '#007ee5',
          600: '#0091f9',
          500: '#009fff',
          400: '#38adff',
          300: '#60bcff',
          200: '#90d0ff',
          100: '#bce1ff',
          50: '#e3f3ff',
        },
        secondary: {
          900: '#0c5d19',
          800: '#237c2c',
          700: '#2e8d36',
          600: '#399f41',
          500: '#42ae4a',
          400: '#5fba65',
          300: '#7cc680',
          200: '#a2d5a4',
          100: '#c6e6c7',
          50: '#e7f5e8',
        },
        warning: '#cf2121',
        megabg: 'rgba(227, 243, 255, 0.4)',
        banner1: '#fffff9',
        banner2: '#f9fffe',
        hotpost1: '#fef4eb',
        hotpost2: '#ffd7e2',
      },
      screens: {
        'sm': '360px',
        'md': '768px',
        'lg': '1200px',
      },      
      width: {
        '1200': '1200px',
        '768': '768px',
        '360': '360px', 
        '160': '160px',
        '200': '200px',
        '240': '240px',
        '150': '150px',
        '32': '32px',
        '28': '28px',
        '16': '16px',
        '20': '20px',
        '36': '36px',
        '580': '580px',
        '574': '574px',
        '24': '24px',
        '370': '370px',
      },
      height: {
        '80': '80px',
        '300': '300px',
        '430': '430px',
        '32': '32px',
        '28': '28px',
        '16': '16px',
        '20': '20px',
        '36': '36px',
        '48': '48px',
        '180': '180px',
        '64': '64px',
        '60': '60px',
        '24': '24px',
        '278': '278px',
      },
      maxWidth: {
        none: 'none',
      },
    },
  },
  plugins: [],
}


