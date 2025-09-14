// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/"], // 需要預渲染的路徑，也可以設定更多
    },
  },
  app: {
    head: {
      title: "Brian Hsu Portfolio",
      meta: [{ name: "description", content: "個人作品集網站" }],
      htmlAttrs: {
        lang: "zh-TW",
      },
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.scss"],
});
