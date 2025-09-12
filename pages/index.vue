<script setup lang="ts">
import { onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const sections: string[] = ["home", "projects", "about", "contact"];
const currentSection = ref<string>("home");

const projects = [
  {
    img: "/images/project1.png",
    title: "Brian Hsu Portfolio",
    description: "個人履歷網頁。",
    techStack: "Nuxt 3 / TypeScript / GSAP",
    github: "https://github.com/brianhsu0606/music-store-admin",
    link: "https://budget-tracker-sigma-liart.vercel.app",
  },
  {
    img: "/images/project1.png",
    title: "記帳小幫手",
    description: "一個簡單的記帳系統，支援新增、刪除與分析。",
    techStack: "Vue 3 / TypeScript / Node.js / mongoDB",
    github: "https://github.com/brianhsu0606/budget-tracker",
    link: "https://budget-tracker-sigma-liart.vercel.app",
  },
  {
    img: "/images/project2.png",
    title: "樂器行後台系統",
    description: "模擬樂器行的會員與商品管理後台。",
    techStack: "Vue 3 / Node.js / mongoDB",
    github: "https://github.com/brianhsu0606/music-store-admin",
    link: "https://budget-tracker-sigma-liart.vercel.app",
  },
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

  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%", // 當卡片上緣到達視窗 80% 高度時觸發
      toggleActions: "play reverse play reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from([".home-text", ".home-img"], {
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    x: (i) => (i === 0 ? -200 : 200), // 第一個往左，第二個往右
    opacity: 0,
    duration: 2,
    ease: "power3.out",
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
  <section id="home" class="h-[90vh] flex border-b bg-blue-100">
    <div class="w-3/5 h-full flex justify-center items-center">
      <div class="home-text">
        <div class="mb-6">
          <h1 class="text-5xl font-bold mb-4">Hi, I’m Brian Hsu 👋</h1>
          <p class="text-3xl font-bold">Frontend Developer</p>
        </div>
        <div class="text-2xl font-medium">
          <p class="font-bold">Skills</p>
          <p>Frontend - Vue 3, TypeScript, Tailwind CSS</p>
          <p>Backend - Node.js, Express, MongoDB</p>
        </div>
      </div>
    </div>
    <div class="w-2/5 h-full flex justify-center items-center home-img">
      <img src="/images/home.jpg" alt="Brian" class="w-1/2 rounded-3xl border border-gray-200 shadow-xl" />
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="py-12 px-12 bg-blue-50">
    <h3 class="text-4xl font-bold text-center mb-12 project-card">Projects</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="flex gap-4 bg-white shadow rounded-xl p-6 project-card"
      >
        <img :src="project.img" :alt="project.img" class="w-[40%] h-full rounded-xl shadow-lg" />
        <div class="flex flex-col justify-between gap-2 text-lg font-medium">
          <h3 class="text-2xl font-black">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div>
            <p class="font-bold">使用技術：</p>
            <p>{{ project.techStack }}</p>
          </div>
          <div>
            <a :href="project.github" class="text-blue-700 hover:text-blue-500" target="_blank">GitHub 連結</a>
            <span> | </span>
            <a :href="project.link" class="text-blue-700 hover:text-blue-500" target="_blank">作品連結</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="py-20 px-8 bg-white text-center">
    <h2 class="text-4xl font-bold mb-6">About Me</h2>
    <p class="max-w-2xl mx-auto text-lg">
      畢業於國立臺灣海洋大學資訊工程學系，我是一名前端開發者，熟悉 Vue 3、Express 和 Tailwind
      CSS，熱衷於打造實用的產品。
    </p>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-20 px-8 bg-white text-center">
    <h2 class="text-4xl font-bold mb-6">Contact</h2>
    <p class="mb-4">Email: brian@example.com</p>
    <div class="flex justify-center gap-6 text-2xl">
      <a href="https://github.com/">GitHub</a>
      <a href="https://linkedin.com/">LinkedIn</a>
      <a href="https://youtube.com/">YouTube</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-6 text-center bg-blue-200">
    <p>&copy; 2025 Brian Hsu. All rights reserved.</p>
  </footer>
</template>

<style scoped lang="scss"></style>
