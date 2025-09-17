<script setup lang="ts">
import type { Skill } from "@/types";
import { onMounted } from "vue";
import gsap from "gsap";

const skills: Skill[] = [
  { name: "Vue 3", icon: "/images/icons/vuejs-original.svg" },
  { name: "Nuxt 3", icon: "/images/icons/nuxt-original.svg" },
  { name: "Tailwind CSS", icon: "/images/icons/tailwindcss-original.svg" },
  { name: "TypeScript", icon: "/images/icons/typeScript-original.svg" },
  { name: "JavaScript", icon: "/images/icons/javaScript-original.svg" },
  { name: "Node.js", icon: "/images/icons/nodejs-original-wordmark.svg" },
  { name: "mongodb", icon: "/images/icons/mongodb-original.svg" },
  { name: "Git", icon: "/images/icons/git-original.svg" },
];

onMounted(() => {
  gsap.from(".skills-title", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 90%",
      toggleActions: "play reverse play reverse ",
    },
    y: 200,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".skills-item:nth-child(-n+4)", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".skills-item:nth-child(n+5)", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>

<template>
  <section id="skills" class="flex flex-col items-center bg-emerald-50 border-b py-12" aria-labelledby="skills-title">
    <h2 id="skills-title" class="text-4xl font-bold mb-16 skills-title">Skills</h2>

    <div class="grid grid-cols-3 sm:grid-cols-4 gap-6 w-1/2 2xl:w-1/3">
      <div v-for="skill in skills" :key="skill.name" class="flex flex-col gap-4 items-center skills-item">
        <div class="bg-white p-4 rounded-full shadow-md">
          <img :src="skill.icon" :alt="skill.name + 'icon'" class="w-12 h-12" />
        </div>
        <p class="text-gray-700 text-sm sm:text-lg font-bold">{{ skill.name }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
