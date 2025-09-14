<script setup lang="ts">
import { onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBook, faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { useHead, useSeoMeta } from "#imports";

useSeoMeta({
  title: "Brian Hsu Portfolio",
  description: "個人作品集，包含 Vue 3、Nuxt 3、Node.js 等專案。",
  ogTitle: "Brian Hsu Portfolio",
  ogDescription: "展示 Vue、Nuxt、Node.js 專案與技能的個人作品集",
  ogImage: "/images/home.jpg",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: "https://brianhsu.com/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Brian Hsu",
        url: "https://brianhsu.com/",
        sameAs: ["https://github.com/brianhsu0606", "https://www.linkedin.com/in/..."],
        jobTitle: "Frontend Developer",
      }),
    },
  ],
});

const sections: string[] = ["home", "projects", "about", "contact"];
const currentSection = ref<string>("home");

const projects = [
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

const aboutList = [
  "畢業於 國立臺灣海洋大學 資訊工程學系，對前端技術有深入理解。",
  "熟悉 Vue 3、Nuxt 3、TypeScript、Tailwind CSS，並能結合 Node.js、Express、MongoDB 架構後端。",
  "熱衷打造實用、美觀且高效的網頁應用，喜歡解決使用者體驗與介面設計上的問題。",
];

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  sections.forEach((id) => {
    ScrollTrigger.create({
      trigger: `#${id}`,
      start: "top center", // 區塊到視窗中間時觸發
      end: "bottom center",
      onEnter: () => (currentSection.value = id),
      onEnterBack: () => (currentSection.value = id),
    });
  });

  // Projects Section
  gsap.from(".project-card", {
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

  // About Section
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

  // Scroll Hint
  gsap.to(".arrow", {
    y: 20,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut",
  });
});
</script>

<template>
  <!-- Header -->
  <header
    class="sticky top-0 z-50 backdrop-blur bg-gray-900/80 shadow-md flex justify-between items-center px-8 h-[10vh] text-2xl font-bold text-white"
  >
    <h3>Brian Hsu</h3>
    <nav>
      <ul class="flex gap-8">
        <li v-for="section in sections" :key="section" :class="{ 'text-orange-400': currentSection === section }">
          <NuxtLink :to="'#' + section">{{ section.toUpperCase() }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <HomeSection />

    <!-- Projects -->
    <section id="projects" class="p-12 bg-blue-50">
      <h2 class="text-4xl font-bold text-center mb-12 project-card">Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="project in projects"
          :key="project.title"
          class="flex gap-4 bg-white shadow rounded-xl p-6 project-card"
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
                >GitHub 連結</a
              >
              <span> | </span>
              <a
                :href="project.link"
                class="text-blue-700 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                >作品連結</a
              >
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="p-12 bg-blue-100">
      <h2 class="text-4xl font-bold text-center mb-6 about-title">About Me</h2>
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

    <!-- Contact -->
    <section id="contact" class="py-10 bg-blue-200 flex flex-col items-center gap-4">
      <h2 class="text-4xl font-bold">Contact</h2>
      <p>Email: a0938406813@gmail.com</p>

      <a
        href="/brianhsu_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="px-4 py-2 rounded text-lg font-medium bg-gray-600 text-gray-200 hover:bg-gray-200 hover:text-gray-700 transition"
      >
        <FontAwesomeIcon :icon="faCircleDown" />
        Download Resume
      </a>
    </section>
  </main>

  <!-- Footer -->
  <footer class="py-6 text-center bg-blue-200">
    <p>&copy; 2025 Brian Hsu. All rights reserved.</p>
  </footer>
</template>

<style scoped lang="scss"></style>
