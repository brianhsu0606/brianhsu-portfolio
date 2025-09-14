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
    <ProjectsSection />

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
