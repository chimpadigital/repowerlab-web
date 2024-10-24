import {colors, nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './three/**/*.{js,ts,jsx,tsx,mdx}',
    './atoms/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        mulish: ["var(--font-mulish)"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, #B3C5DF 0%, #FFF 57.02%)',
      },
      colors:{
        primary: "#1C4741",
        secondary: "#BACCE6",
        
        accent: "#E8B516",
        grey:{
          100: "#F4F4F4",
          500: "#BFBFBF",
          600: "#9B9B9B",
          700: "#4F4F4F",
          parrafo: "#444",
          background: "#9B9494E5"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
