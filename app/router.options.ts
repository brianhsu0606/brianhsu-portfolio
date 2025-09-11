import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      await new Promise((r) => requestAnimationFrame(r));

      const el = document.querySelector(to.hash);
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;

      if (el) {
        const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - headerHeight;

        // 平滑滾動，並扣掉 header 高度
        window.scrollTo({
          top,
          left: 0,
          behavior: "smooth",
        });

        // 告訴 Vue Router：我自己處理了，不要再滾一次
        return false;
      }
    }
    return { left: 0, top: 0 };
  },
};
