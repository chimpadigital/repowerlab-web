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
      },
      colors:{
        primary: "#1C4741",
        secondary: "#BACCE6",
        
        accent: "#E8B516",
        grey:{
          100: "#F4F4F4",
          600: "#9B9B9B",
          background: "#9B9494E5"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
