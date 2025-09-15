<script setup lang="ts">
import { onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const aboutList: string[] = [
  "畢業於 國立臺灣海洋大學 資訊工程學系，對前端技術有深入理解。",
  "熟悉 Vue 3、Nuxt 3、TypeScript、Tailwind CSS，並能結合 Node.js、Express、MongoDB 架構後端。",
  "熱衷打造實用、美觀且高效的網頁應用，喜歡解決使用者體驗與介面設計上的問題。",
];

onMounted(() => {
  gsap.from(".about-img", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    x: -200,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
  });

  gsap.from([".about-title", ".about-text"], {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    y: 150,
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>

<template>
  <section id="about" class="p-12 bg-indigo-100 border-b" aria-labelledby="about-title">
    <h2 id="about-title" class="text-4xl font-bold text-center mb-6 about-title">About Me</h2>
    <div class="flex">
      <!-- About Image -->
      <div class="w-2/5 h-full flex justify-center items-center">
        <img
          src="/images/about.jpg"
          alt="Brian Hsu picture"
          loading="lazy"
          class="w-3/4 rounded-3xl border border-gray-200 shadow-xl about-img"
        />
      </div>

      <!-- Description  -->
      <div class="w-3/5 space-y-4 about-text">
        <p v-for="content in aboutList" :key="content" class="flex gap-2 items-start text-xl">
          <FontAwesomeIcon :icon="faBook" class="text-gray-600 mt-1" />
          <span class="text-gray-700">{{ content }} </span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
