<script setup lang="ts">
import { onMounted } from "vue";
import { useHead, useSeoMeta } from "#imports";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

useSeoMeta({
  title: "徐碩嶽 | Brian Hsu",
  description: "個人作品集，包含 Vue 3、Nuxt 3、Node.js 等專案。",
  ogTitle: "徐碩嶽 | Brian Hsu",
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

const sections: string[] = ["home", "skills", "projects", "about", "contact"];
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
    class="sticky top-0 z-50 backdrop-blur text-white bg-gray-900/80 shadow-md flex justify-between items-center px-8 h-[8vh] sm:h-[10vh] 2xl:h-[6vh]"
  >
    <h3 class="text-2xl font-bold">Brian Hsu</h3>
    <nav class="text-xl font-bold">
      <ul class="flex flex-col sm:flex-row sm:gap-8">
        <li v-for="section in sections" :key="section" :class="{ 'text-orange-400': currentSection === section }">
          <NuxtLink :to="'#' + section">{{ section.toUpperCase() }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <HomeSection />
    <SkillsSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </main>

  <!-- Footer -->
  <footer class="py-6 text-center bg-gray-900/80 text-gray-200">
    <p>&copy; 2025 Brian Hsu. All rights reserved.</p>
  </footer>
</template>

<style scoped lang="scss"></style>
