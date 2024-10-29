/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
    colors:{
      agro_green:"#008922",
      agro_yellow:"#FACE0B",
      light_green:"#AAE3A0",
      agro_lightgreen:"#E5F7BA",
    },
    screens:{
        'mob2': '320px',
        'mob': '412px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    },    
    fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
    }
  },
  },
  plugins: [],
}

