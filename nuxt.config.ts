export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-aos', '@nuxtjs/leaflet'],
  // ✅ SSG for GitHub Pages
  ssr: true,
  nitro: {
    preset: 'github-pages' // Use github-pages preset instead of static
  },

  app: {
    baseURL: '/Climate-Walker', // ⚠️ must match repo name
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