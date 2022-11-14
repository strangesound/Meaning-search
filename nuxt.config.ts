// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({



  css: ["@/assets/styles/main.css"],
  head: {
    charset: 'utf-16',
    viewport: 'width=500, initial-scale=1',
    title: 'Meaning search',
    meta: [
      // <meta name="description" content="My amazing site">
      { name: 'description', content: 'Meaning search' }
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap",
      },
    ],
  },


})
