// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        red: {
          light: '#ff4d4d',
          DEFAULT: '#ff0000',
          dark: '#990000',
        },
        gray: {
          900: '#121212',
        },
      },
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
