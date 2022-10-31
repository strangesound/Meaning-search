// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

   
  
    css: ["@/assets/styles/main.css"],
    head: {
        link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap",
          },
        ],
      },
    

})
