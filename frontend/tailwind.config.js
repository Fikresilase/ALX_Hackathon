/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js pages
      "./components/**/*.{js,ts,jsx,tsx}", // For your components
      "./app/**/*.{js,ts,jsx,tsx}", // If you're using the /app directory (Next.js 13+)
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            '50': '#f3faf3',
            '100': '#e2f6e4',
            '200': '#c7ebca',
            '300': '#9bdaa1',
            '400': '#68c071',
            '500': '#4cb657',
            '600': '#32873b',
            '700': '#2b6a31',
            '800': '#26552c',
            '900': '#214626',
            '950': '#0d2610',
        },
          secondary: {
            '50': '#fdf2f8',
            '100': '#fbe8f3',
            '200': '#fad0e8',
            '300': '#f7aad4',
            '400': '#f076b5',
            '500': '#ea5fa3',
            '600': '#d62c77',
            '700': '#ba1c5d',
            '800': '#991b4d',
            '900': '#801b44',
            '950': '#4e0924',
        },
        tertiary: {
            '50': '#fbfbeb',
            '100': '#f4f5cc',
            '200': '#edec9b',
            '300': '#e7e17b',
            '400': '#d9c936',
            '500': '#c9b329',
            '600': '#ad8f21',
            '700': '#8a691e',
            '800': '#74551f',
            '900': '#634720',
            '950': '#39250f',
        }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Example font
        },
      },
    },
    darkMode: 'class', // or 'media' if you prefer auto detection
  };
  