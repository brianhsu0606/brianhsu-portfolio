// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      routes: [],
    },
  },
  app: {
    head: {
      title: "徐碩嶽 | Brian Hsu",
      meta: [{ name: "description", content: "個人作品集網站" }],
      htmlAttrs: { lang: "zh-TW" },
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "nuxt-gtag"],
  css: ["~/assets/css/main.scss"],
  gtag: {
    id: "G-X5QEWVCYE3",
    config: { send_page_view: true },
  },
});
