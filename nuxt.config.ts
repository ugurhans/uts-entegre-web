export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  srcDir: 'app',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
  css: ['~/assets/css/tailwind.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'tr'
      },
      title: 'ÜTS Entegre - B2B SaaS Bildirim Yönetimi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Firmaların Sağlık Bakanlığı Ürün Takip Sistemi (ÜTS) entegrasyonu için modern B2B SaaS çözümü.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})
