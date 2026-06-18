/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:      '#2F7A3E',
          'green-dark': '#1E4D28',
          yellow:     '#F4C20D',
          bg:         '#FAFAF7',
          text:       '#2B2B2B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
