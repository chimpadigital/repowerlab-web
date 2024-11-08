/** @type {import('next').NextConfig} */
const { nextI18Next } = require('next-i18next');
const nextConfig = {
    transpilePackages: ['three'],
    // Integrando la configuración de next-i18next
    i18n: {
        locales: ['en', 'fr', 'es'], // Idiomas soportados
        defaultLocale: 'en', // Idioma predeterminado
      },
    
      reactStrictMode: true, // Activar el modo estricto de React (opcional)
}

module.exports = nextConfig
