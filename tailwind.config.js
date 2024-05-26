/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sf-display': ["sf-pro-display", "sans-serif"],
        'sf-text': ["sf-pro-text", "sans-serif"],
      },
      colors: {
        primary: '#0071e3',
        customWhite: '#f5f5f7',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slide: 'slide 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
