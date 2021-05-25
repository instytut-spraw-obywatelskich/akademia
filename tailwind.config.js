module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.md',
    './src/**/*.njk',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '85': '.85',
      '100': '1'
    },
    fontFamily: {
      sans: [
        '"IBM Plex Sans"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ]
    },
    fontWeight: {
      normal: '400',
      bold: '600',
      extrabold: '700'
    },    
    extend: {
      colors: {
        'czerwony': '#d10a10',
        'gray': {
          100: '#f7fafc'
        }
      }
    }
  },
  variants: {},
  plugins: [],
}