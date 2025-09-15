<script setup lang="ts">
import type { Project } from "@/types";
import { onMounted } from "vue";
import gsap from "gsap";

const projects: Project[] = [
  {
    img: "/images/project1.png",
    title: "Brian Hsu Portfolio",
    description: "個人作品集網頁。",
    techStack: ["Nuxt 3", "TypeScript", "GSAP"],
    github: "https://github.com/brianhsu0606/brianhsu-portfolio",
    link: "https://budget-tracker-sigma-liart.vercel.app",
  },
  {
    img: "/images/project1.png",
    title: "記帳小幫手",
    description:
      "此專案為個人財務管理系統，提供收支紀錄與分類統計功能，並透過圖表呈現收支，方便使用者快速掌握財務狀況。",
    techStack: ["Vue 3", "TypeScript", "ECharts", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/brianhsu0606/budget-tracker",
    link: "https://budget-tracker-sigma-liart.vercel.app",
  },
  {
    img: "/images/project2.png",
    title: "樂器行後台系統",
    description: "此專案為樂器行的後台管理系統，依據實際商業的營運流程所設計，具備會員、商品、訂單與營收管理等功能。",
    techStack: ["Vue 3", "ECharts", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/brianhsu0606/music-store-admin",
    link: "https://budget-tracker-sigma-liart.vercel.app",
  },
];

onMounted(() => {
  gsap.from(".project-item", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    y: 150,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: "power3.out",
  });
});
</script>

<template>
  <section id="projects" class="p-12 bg-blue-50 border-b" aria-labelledby="projects-title">
    <h2 id="projects-title" class="text-4xl font-bold text-center mb-12 project-item">Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <article
        v-for="project in projects"
        :key="project.title"
        class="flex gap-4 bg-gray-100 border shadow-lg rounded-xl p-6 project-item"
      >
        <img
          :src="project.img"
          :alt="project.img + 'picture'"
          loading="lazy"
          class="w-[40%] h-full rounded-xl shadow-lg"
        />
        <div class="flex flex-col justify-between gap-4">
          <h3 class="text-2xl font-black">{{ project.title }}</h3>
          <p class="text-lg">{{ project.description }}</p>

          <!-- Tech Stack -->
          <div class="flex gap-3 flex-wrap text-gray-700 text-base font-medium">
            <div v-for="tech in project.techStack" :key="tech" class="bg-gray-200 rounded-2xl shadow px-3 py-1">
              {{ tech }}
            </div>
          </div>

          <!-- Link -->
          <div class="font-medium">
            <a
              :href="project.github"
              class="text-blue-700 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub 連結
            </a>
            <span> | </span>
            <a :href="project.link" class="text-blue-700 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
              作品連結
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
