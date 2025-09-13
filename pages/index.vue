<script setup lang="ts">
import { onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faBook } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const sections: string[] = ["home", "projects", "about", "contact"];
const currentSection = ref<string>("home");

const icons = [
  { name: faGithub, url: "https://github.com/brianhsu0606" },
  { name: faLinkedin, url: "https://www.linkedin.com/in/%E7%A2%A9%E5%B6%BD-%E5%BE%90-2ba388370/" },
];

const skills = [
  {
    category: "frontend",
    item: ["Vue 3", "Nuxt 3", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "backend",
    item: ["Node.js", "Express", "MongoDB"],
  },
];

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
  " 熟悉 Vue 3、Nuxt 3、TypeScript、Tailwind CSS，並能結合 Node.js、Express、MongoDB 架構後端。",
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

  // Home Section
  gsap.from([".home-text", ".home-img"], {
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    x: (i) => (i === 0 ? -200 : 200),
    opacity: 0,
    duration: 2,
    ease: "power3.out",
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

  <!-- Home -->
  <section
    id="home"
    class="h-[90vh] flex border-b overflow-x-hidden bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 relative"
  >
    <div class="w-3/5 h-full flex justify-center items-center">
      <div class="flex flex-col gap-6 home-text">
        <h1
          class="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          Hi, I’m Brian Hsu
        </h1>
        <p class="text-3xl font-semibold text-gray-700 tracking-wide">Frontend Developer</p>

        <!-- Social Media Icons -->
        <div class="space-x-4">
          <a v-for="item in icons" :key="item.url" :href="item.url" target="_blank">
            <FontAwesomeIcon :icon="item.name" class="w-12 h-12 text-gray-600 hover:text-amber-600 transition" />
          </a>
        </div>

        <!-- Skills -->
        <div v-for="group in skills" :key="group.category" class="text-xl font-medium text-white">
          <div class="flex gap-4">
            <div
              v-for="skill in group.item"
              :key="skill"
              class="px-6 py-4 bg-gray-600 rounded-full shadow-md transform hover:-translate-y-1 hover:scale-105 transition"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image -->
    <div class="w-2/5 h-full flex justify-center items-center">
      <img src="/images/home.jpg" alt="home" class="w-1/2 rounded-3xl border border-gray-200 shadow-xl home-img" />
    </div>

    <!-- Scroll Hint -->
    <div class="absolute w-full bottom-6 flex flex-col items-center arrow">
      <FontAwesomeIcon :icon="faChevronDown" class="w-8 h-8 text-gray-700" />
      <h3 class="text-gray-700 text-lg font-bold">Scroll Down</h3>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="p-12 bg-blue-50">
    <h3 class="text-4xl font-bold text-center mb-12 project-card">Projects</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="flex gap-4 bg-white shadow rounded-xl p-6 project-card"
      >
        <img :src="project.img" :alt="project.img" class="w-[40%] h-full rounded-xl shadow-lg" />
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
            <a :href="project.github" class="text-blue-700 hover:text-blue-500" target="_blank">GitHub 連結</a>
            <span> | </span>
            <a :href="project.link" class="text-blue-700 hover:text-blue-500" target="_blank">作品連結</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="p-12 bg-blue-100">
    <h2 class="text-4xl font-bold text-center mb-6 about-title">About Me</h2>
    <div class="flex">
      <!-- About Image -->
      <div class="w-2/5 h-full flex justify-center items-center">
        <img src="/images/about.jpg" alt="about" class="w-3/4 rounded-3xl border border-gray-200 shadow-xl about-img" />
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
  <section id="contact" class="py-10 bg-blue-200 text-center">
    <h2 class="text-4xl font-bold">Contact</h2>
    <p>Email: a0938406813@gmail.com</p>
  </section>

  <!-- Footer -->
  <footer class="py-6 text-center bg-blue-200">
    <p>&copy; 2025 Brian Hsu. All rights reserved.</p>
  </footer>
</template>

<style scoped lang="scss"></style>
