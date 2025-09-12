// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  // Your custom configs here

  rules: {
    // 關閉多根節點提示
    "vue/no-multiple-template-root": "off",
    // 關閉 multi-word 提示
    "vue/multi-word-component-names": "off",
    // 允許 void 元素自閉合（input）
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
});
