import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // 返回瀏覽器紀錄位置（例如返回上一頁）
    if (savedPosition) {
      return savedPosition;
    }
    // 有 hash (#about / #projects)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    // 預設回到頂端
    return { top: 0 };
  },
};
