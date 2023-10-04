/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'utils/*.js',
        'nuxt.config.js'
    ]
},
  theme: {
    colors: {
      colors: {
        'primary': '#0144E4',
        'primary-900': '#14192b',
        'accent' : '#96B624',
        'grey': '#F7F8FA',
        'white': '#ffffff',
        'font' : '#313131',
        'grey-100': '#eeeeee'
      },
    },
    container: {
      center: true,
    },
    
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',

      },
      extend: {
        boxShadow: {
          'md': '0 12px 6px rgba(0,0,0,.06);',
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
  content: [
    'node_modules/preline/dist/*.js',
  ],
  plugins: [
    require('preline/plugin'),
],
}