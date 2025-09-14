export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  // ✅ SSG for GitHub Pages
  ssr: true, // Nuxt 4 defaults to SSR; keeps SSG working
  nitro: {
    preset: 'static' // generates static files for GitHub Pages
  },

  app: {
    baseURL: '/Climate-Walker/', // ⚠️ must match repo name
    head: {
      title: 'Climate Walker - Portfolio',
      meta: [
        { name: 'description', content: 'Personal portfolio site documenting the journey of Climate Walker.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
})