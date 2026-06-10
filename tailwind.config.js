/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F6F6D',
          hover: '#245654',
          light: '#edf4f3',
        },
        secondary: {
          DEFAULT: '#A7C4BC',
          hover: '#91b3a9',
          light: '#f2f6f5',
        },
        background: '#FAFAF7',
        accent: {
          DEFAULT: '#C89F7B',
          hover: '#b58b66',
          light: '#faf6f2',
        },
        text: {
          DEFAULT: '#1F2933',
          muted: '#4B5563',
          light: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        layout: '1200px',
      }
    },
  },
  plugins: [],
}
