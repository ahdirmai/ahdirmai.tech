/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        // Black and White Retro Minimalism Color Palette
        'retro-black': {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#C0C0C0',
          400: '#A0A0A0',
          500: '#808080',
          600: '#606060',
          700: '#404040',
          800: '#202020',
          900: '#000000', // Pure black
        },
        'retro-white': {
          50: '#FFFFFF', // Pure white
          100: '#FEFEFE',
          200: '#FDFDFD',
          300: '#FCFCFC',
          400: '#FBFBFB',
          500: '#FAFAFA',
          600: '#F9F9F9',
          700: '#F8F8F8',
          800: '#F7F7F7',
          900: '#F6F6F6',
        },
        'retro-gray': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'retro-lg': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'retro-xl': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'retro-white': '4px 4px 0px 0px rgba(255, 255, 255, 1)',
        'retro-gray': '4px 4px 0px 0px rgba(158, 158, 158, 1)',
      },
    },
  },
  plugins: [],
};