/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'hard': '1px 1px 5px rgb(0 0 0 / 80%)'
      },
        fontFamily: {
          main: "Libre Franklin",
        },
      
      colors:{
        "main": {
          DEFAULT: "#719751",
          300: "#B4C897",
          400: "#719751",
          500: "#446428",
          600: "#576749",
        },
        alternative: "#446428",
        "second" :"#93C149",
        "accent" :"#FBBC43",
        "neutral": "#403F3F",
        "dark":"#576749"
      },
      typography: (theme) => ({
        base: {
          css: {
            color: theme('colors.gray.500'),
            h2: {
              fontWeight: 500,
              color: theme('colors.gray.500'),
            },
            h3: {
              fontSize: theme('fontSize.lg')
            }
          }
        },
        lg: {
          css: {
            color: theme('colors.gray.500'),
            h2: {
              fontWeight: 500,
              color: theme('colors.gray.500'),
            },
            h3: {
              color: theme('colors.gray.500'),
              fontSize: theme('fontSize.xl'),
            }
         }
        }
      })
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
