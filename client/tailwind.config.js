/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      padding: {     
        DEFAULT: '1rem',  
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    fontFamily:{
      'sans': ['DM Sans', 'sans-serif'],
    },

    fontWeight: {
      normal: '400',
      medium:'500',
      semibold: '600',
      bold:'700',
    },
  
    extend: {
     
      colors:{
        primary: {
          100: '#D7E2FF',
          200:'#ABC7FF',
          400:'#425E91',
          700:'#294677',
          800:'#294677',
          900:'#001B3F',
         
        },

        secondary:{
          100:'#DAE2F9',
          200:'#BEC6DC',
          400:'#001B3F',
          900:'#131C2B',
        },

        blue:{
          100:'#9DB6FF',
          400:'#648BFF',
          600:'#255CFF',
          
        },

        pink:{
          100:'#EEA1FF',
          400:'#DF54FF',         
          600:'#D51AFF',
        },

        surface:{
          100:'#F9F9FF',
          900:'#1A1C20',
        },

        yellow:{
          400:'#FF9900',
        },

        green:{
          400:'#04CD44',
        },

        red:{
          400:'#DA342E',
        },

        tertiary:{
          100:'#FAD8FD',
        }, 

        grey: {
          100:'#C4C6D0',
        },

      },


      fontSize: {      
        
        'body-sm': ['12px', '16px'],
        'body-md': ['14px', '20px'],
        'body-lg': ['16px', '24px'],

        'label-sm': ['11px', '16px'],
        'label-md': ['12px', '16px'],
        'label-lg': ['14px', '20px'],
        
        'title-sm':['14px', '20px'],
        'title-md':['16px', '24px'],
        'title-lg':['22px', '28px'],

        'headline-sm':['24px', '32px'],
        'headline-md':['28px', '36px'],
        'headline-lg':['32px', '40px'],

        'display-sm':['36px', '44px'],
        'display-md':['45px', '52px'],
        'display-lg':['57px', '64px'],
        'display-xl':['70px','86px'],
      },

      borderRadius: {
        '50': '50px',
      },

      padding: {
        '2': '2px',
        '3':'3px',
        '5':'5px',
        '8': '8px',
        '10':'10px',
        '12':'12px',
        '14' :'14px',
        '16': '16px',
        '18': '18px',
        '20':'20px',
        '24':'24px',
        '30':'30px',
        '40':'40px',
        '50':'50px',
        '60':'60px',
        '70':'70px',
        '80':'80px',
        '90':'90px',
        '100':'100px',
        '150':'150px',
      },

      margin:{
        '2': '2px',
        '10':'10px',
        '12':'12px',
        '20':'20px',
        '30':'30px',
        '40':'40px',
        '50':'50px',
        '60':'60px',
        '100':'100px',
      },

      width: {
        '15': '60px',
        
      },

      zIndex: {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
      },

      dropShadow: {
        'sm' :'0 1px 2px rgba(0, 27, 63, 0.05)',
      },

     

  },
  },
  plugins: [],
}

