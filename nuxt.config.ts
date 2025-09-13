export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true, // enables server-side rendering (required for SSG)
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/Climate-Walker/', // ⚠️ required for GitHub Pages
    head: {
      title: 'Climate Walker',
      meta: [
        { name: 'description', content: 'My awesome static Nuxt site' }
      ]
    }
  }
})