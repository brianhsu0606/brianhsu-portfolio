// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      routes: [], // 空陣列 → 不會 prerender 任何路由
    },
  },
  app: {
    head: {
      title: "徐碩嶽 | Brian Hsu",
      meta: [{ name: "description", content: "個人作品集網站" }],
      htmlAttrs: {
        lang: "zh-TW",
      },
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.scss"],
});
