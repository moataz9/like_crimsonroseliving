// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  app: {
    head: {
      titleTemplate: '%s - Crimson Rose Living',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        {
          'http-equiv': 'x-ua-compatible',
          content: 'IE=edge',
        },
      ],
    },
  },
  tailwindcss: {
    exposeConfig: true
  }
})
