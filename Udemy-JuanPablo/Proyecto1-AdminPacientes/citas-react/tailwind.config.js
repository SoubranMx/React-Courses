/** @type {import('tailwindcss').Config} */
/**
 * Content => En que archivos se agregara el codigo tailwind o que se tendra disponible tailwind
 * ./src/ ** /*.jsx => va a escanear recursivamente los archivos .jsx en src y carpetas anidadas de src
 */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
