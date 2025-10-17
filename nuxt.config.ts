// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  alias: {
    '@app': '/app',
    '@features': '/app/features',
    '@widgets': '/app/widgets',
    '@entities': '/app/entities',
    '@shared': '/app/shared'
  }
})