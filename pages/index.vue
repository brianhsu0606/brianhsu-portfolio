<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
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
  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: ".project-card",
      start: "top 80%", // 當卡片上緣到達視窗 80% 高度時觸發
      toggleActions: "play reverse play reverse",
    },
    y: 100, // 從下方移動
    opacity: 0, // 初始透明
    duration: 1,
    stagger: 0.3, // 卡片一個接一個出現
    ease: "power3.out",
  });
});
</script>

<template>
  <header
    class="sticky top-0 z-50 backdrop-blur bg-blue-400/50 shadow-md flex justify-between items-center px-8 h-[10vh] text-2xl font-bold"
  >
    <h3>Brian Hsu</h3>
    <nav>
      <ul class="flex gap-8 text-xl">
        <li><NuxtLink to="#home">HOME</NuxtLink></li>
        <li><NuxtLink to="#about">ABOUT</NuxtLink></li>
        <li><NuxtLink to="#projects">PROJECTS</NuxtLink></li>
        <li><NuxtLink to="#contact">CONTACT</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <!-- Home -->
  <section id="home" class="h-[90vh] flex border-b">
    <!-- 左邊文字 -->
    <div class="w-1/2 h-full bg-blue-100 flex justify-center items-center">
      <div>
        <div class="mb-6">
          <h1 class="text-5xl font-bold mb-4">Hi, I’m Brian Hsu 👋</h1>
          <p class="text-3xl font-bold">Frontend Developer</p>
        </div>
        <div class="text-2xl">
          <p class="font-bold">Skills</p>
          <p class="font-medium">Frontend - Vue 3, TypeScript, Tailwind CSS</p>
          <p class="font-medium">Backend - Node.js, Express, MongoDB</p>
        </div>
      </div>
    </div>

    <!-- 右邊照片 -->
    <div class="w-1/2 h-full flex justify-center items-center bg-gray-100">
      <img src="/images/home.jpg" alt="Brian" class="w-1/2 rounded-3xl border border-gray-200 shadow-xl" />
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="p-8 bg-blue-50">
    <h3 class="text-4xl font-bold text-center mb-6 project-card">Projects</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="flex gap-4 bg-white shadow rounded-xl p-6 project-card"
      >
        <img :src="project.img" :alt="project.img" class="w-48 h-40" />
        <div class="flex flex-col gap-4 text-lg font-medium">
          <h3 class="text-2xl font-semibold">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <p>使用技術：{{ project.techStack }}</p>
          <div>
            <a :href="project.github" class="text-blue-700 hover:text-blue-500">GitHub 連結</a>
            <span> | </span>
            <a :href="project.link" class="text-blue-700 hover:text-blue-500">作品連結</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="py-20 px-8 bg-white text-center">
    <h2 class="text-4xl font-bold mb-6">About Me</h2>
    <p class="max-w-2xl mx-auto text-lg">
      我是一名前端開發者，熟悉 Vue 3、Express 和 Tailwind CSS，熱衷於打造實用的產品。
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
