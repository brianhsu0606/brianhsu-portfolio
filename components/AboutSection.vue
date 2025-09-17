<script setup lang="ts">
import { onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const aboutList: string[] = [
  "畢業於 國立臺灣海洋大學 資訊工程學系，具紮實前端基礎與程式思維。",
  "熟悉 Vue 3、Nuxt 3、TypeScript、Tailwind CSS，並能結合 Node.js、Express、MongoDB 完成全端開發。",
  "完成三個個人專案：作品集網站、財務管理系統、樂器行後台管理系統，實踐前後端整合與介面設計。",
  "熱衷打造實用、美觀且高效的網頁應用，專注於使用者體驗與介面優化。",
  "持續學習新技術，提升前端開發能力與專案品質。",
];

onMounted(() => {
  gsap.from(".about-img", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.from([".about-title", ".about-text"], {
    scrollTrigger: {
      trigger: "#about",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
    y: 150,
    opacity: 0,
    duration: 1.5,
    stagger: 0.08,
    ease: "power3.out",
  });
});
</script>

<template>
  <section
    id="about"
    class="p-12 bg-emerald-50 flex flex-col items-center border-b overflow-hidden"
    aria-labelledby="about-title"
  >
    <h2 id="about-title" class="text-4xl font-bold mb-16 about-title">About Me</h2>
    <div class="lg:flex">
      <!-- About Image -->
      <div class="lg:w-2/5 h-full flex justify-center items-center">
        <img
          src="/images/123.jpg"
          alt="Brian Hsu picture"
          loading="lazy"
          class="w-3/4 rounded-3xl border border-gray-200 shadow-xl about-img mb-8 lg:mb-0"
        />
      </div>

      <!-- Description  -->
      <div class="lg:w-3/5 space-y-4 2xl:space-y-8">
        <p v-for="content in aboutList" :key="content" class="flex gap-2 items-start text-xl about-text">
          <FontAwesomeIcon :icon="faBook" class="text-gray-600 mt-1" />
          <span class="text-gray-700 text-lg 2xl:text-2xl">{{ content }} </span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#about-title {
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 2px;
    transform: translateX(-50%);
    width: 110%;
    height: 10px;
    background-color: #6adbb6;
    border-radius: 2px;
    z-index: -1;
  }
}
</style>
