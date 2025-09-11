// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Brian Hsu Portfolio",
      meta: [{ name: "description", content: "個人作品集網站" }],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.scss"],
});
