<script setup lang="ts">
import { onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
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
    <AboutSection />

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
