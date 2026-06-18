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
          green:        '#2A4909', // verde secundario — botones, acentos
          'green-dark': '#142A09', // verde primario — fondo oscuro, texto
          yellow:       '#F8D912', // acento — CTAs y detalles, usar con moderación
          cream:        '#E5DEAC', // crema — fondos de sección
          bg:           '#FFFFFF', // blanco base
          text:         '#142A09', // texto oscuro = verde primario
        },
      },
      fontFamily: {
        sans:  ['Poppins', 'system-ui', 'sans-serif'],
        mono:  ['Roboto Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
