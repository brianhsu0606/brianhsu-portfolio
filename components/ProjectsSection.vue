<script setup lang="ts">
import type { Project } from "@/types";
import { onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const projects: Project[] = [
  {
    title: "Brian Hsu Portfolio",
    description: "個人作品集網頁，練習 GSAP 動畫及埋 GA。",
    techStack: ["Nuxt 3", "TypeScript", "GSAP", "GA", "a11y"],
    github: "https://github.com/brianhsu0606/brianhsu-portfolio",
    link: "https://budget-tracker-sigma-liart.vercel.app",
    img: "/images/projects/portfolio.png",
  },
  {
    title: "記帳小幫手",
    description:
      "此專案為個人財務管理系統，提供收支紀錄與分類統計功能，並透過圖表呈現收支，方便使用者快速掌握財務狀況。",
    techStack: ["Vue 3", "TypeScript", "ECharts", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/brianhsu0606/budget-tracker",
    link: "https://budget-tracker-sigma-liart.vercel.app",
    img: "/images/projects/budget.png",
  },
  {
    title: "樂器行後台系統",
    description: "此專案為樂器行的後台管理系統，依據實際商業的營運流程所設計，具備會員、商品、訂單與營收管理等功能。",
    techStack: ["Vue 3", "ECharts", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/brianhsu0606/music-store-admin",
    link: "https://budget-tracker-sigma-liart.vercel.app",
    img: "/images/projects/music.png",
  },
];

onMounted(() => {
  gsap.from(".project-item", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play reverse play reverse",
    },
    y: 150,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>

<template>
  <section
    id="projects"
    class="py-12 bg-blue-50 flex flex-col items-center border-b overflow-hidden"
    aria-labelledby="projects-title"
  >
    <h2 id="projects-title" class="text-4xl font-bold mb-16 project-item">Projects</h2>

    <div class="flex flex-col items-center gap-6">
      <article
        v-for="project in projects"
        :key="project.title"
        class="flex flex-col lg:flex-row w-[85%] sm:w-[85%] lg:w-[70%] 2xl:w-[50%] lg:max-h-[340px] bg-white border shadow-lg rounded-xl overflow-x-hidden project-item"
      >
        <!-- Img -->
        <div class="w-full lg:w-[45%] border-r">
          <img :src="project.img" :alt="project.title + ' picture'" loading="lazy" class="w-full h-full object-cover" />
        </div>

        <!-- Description -->
        <div class="w-full lg:w-[55%] flex flex-col justify-between gap-5 py-5 px-6">
          <h3 class="text-2xl font-black">{{ project.title }}</h3>
          <p class="text-lg">{{ project.description }}</p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-3 text-base font-medium">
            <div
              v-for="tech in project.techStack"
              :key="tech"
              class="bg-gray-200 text-gray-700 rounded-2xl shadow px-3 py-1"
            >
              {{ tech }}
            </div>
          </div>

          <!-- Link -->
          <div class="flex gap-2 justify-end">
            <a
              :href="project.github"
              class="py-2 px-3 rounded bg-gray-700 text-gray-200 hover:bg-gray-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <FontAwesomeIcon :icon="faArrowUpRightFromSquare" />
            </a>
            <a
              :href="project.link"
              class="py-2 px-3 rounded bg-gray-700 text-gray-200 hover:bg-gray-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
              <FontAwesomeIcon :icon="faArrowUpRightFromSquare" />
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
#projects-title {
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
    background-color: #81c0ea;
    border-radius: 2px;
    z-index: -1;
  }
}
</style>
