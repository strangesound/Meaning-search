// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Meaningful search',
      meta: [
        { name: 'description', content: 'Meaningful search. Извлечем смысл из ваших документов понятным языком' }
      ],
      link: [ {rel: 'icon', type: "image/x-icon", href: '/favicon.ico?v2'} ],
      htmlAttrs: {
        lang: 'ru'
      },
  
    }
  },
  css: ["@/assets/styles/main.css"],


})
