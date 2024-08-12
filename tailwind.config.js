/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html",
"./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      screens: {
        xsm: '250px',
        sm: "500px"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '0.025em',
        normal: '0em',
        wide: '0.05em',
        widest: '0.1em',
      },
      lineHeight: {
        none: '1',
        light:'1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
    },
  },
  plugins: [],
}

