<script setup lang="ts">
import type { Icon } from "@/types";
import { onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const icons: Icon[] = [
  { name: faGithub, url: "https://github.com/brianhsu0606", label: "Visit my GitHub profile" },
  {
    name: faLinkedin,
    url: "https://www.linkedin.com/in/%E7%A2%A9%E5%B6%BD-%E5%BE%90-2ba388370/",
    label: "Visit my LinkedIn profile",
  },
];

onMounted(() => {
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
  <section
    id="home"
    class="h-[92vh] sm:h-[90vh] 2xl:h-[94vh] flex justify-center items-center border-b overflow-x-hidden bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 relative"
    aria-labelledby="home-title"
  >
    <div class="w-[80%] sm:w-1/2 flex flex-col sm:flex-row justify-center items-center gap-14 2xl:gap-32">
      <!-- 左邊文字 -->
      <div class="flex flex-col gap-4 sm:gap-8 home-text flex-1 min-w-[350px] max-w-[460px]">
        <h1
          id="home-title"
          class="text-5xl 2xl:text-8xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          Brian Hsu
        </h1>
        <h2 class="text-gray-700 text-3xl sm:text-4xl font-semibold">Frontend Developer</h2>

        <div class="text-gray-600 text-lg font-medium">
          <p class="mb-1">"Design is not just what it looks like and feels like. Design is how it works."</p>
          <p class="text-right">- Steve Jobs</p>
        </div>

        <!-- Social Media Icons -->
        <div class="space-x-6">
          <a
            v-for="item in icons"
            :key="item.url"
            :href="item.url"
            :aria-label="item.label"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon :icon="item.name" class="w-12 h-12 text-gray-700 hover:text-gray-500 transition" />
          </a>
          <a href="mailto:a0938406813@gmail.com">
            <FontAwesomeIcon :icon="faEnvelope" class="w-12 h-12 text-gray-700 hover:text-gray-500 transition" />
          </a>
        </div>
      </div>

      <!-- 右邊圖片 -->
      <div
        class="hidden sm:block flex justify-center items-center min-w-[400px] max-w-[500px] home-img bg-white rounded-3xl"
      >
        <img src="/images/home.svg" alt="home picture" loading="lazy" class="w-full h-auto" />
      </div>
    </div>

    <!-- Scroll Hint -->
    <div class="absolute w-full bottom-6 flex flex-col items-center arrow">
      <FontAwesomeIcon :icon="faChevronDown" class="w-8 h-8 text-gray-700" />
      <h3 class="text-gray-700 text-lg font-bold">Scroll Down</h3>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
