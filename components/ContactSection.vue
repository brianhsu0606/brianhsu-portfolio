<script setup lang="ts">
import { onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleDown, faEnvelope, faLocationDot, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";

onMounted(() => {
  const isMobile = window.innerWidth < 768;

  gsap.from(".contact-item", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: isMobile ? "play none none none" : "play reverse play reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
});
</script>

<template>
  <section
    id="contact"
    class="py-10 bg-blue-50 flex flex-col items-center overflow-hidden"
    aria-labelledby="contact-title"
  >
    <h2 id="contact-title" class="text-4xl font-bold mb-12 contact-item">Contact</h2>

    <div class="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 contact-item">
      <!-- Info -->
      <div class="space-y-2 text-lg text-gray-700 font-medium max-w-md m-auto sm:ml-auto">
        <p>
          <FontAwesomeIcon :icon="faUserTie" class="mr-2" />
          徐碩嶽 Brian Hsu
        </p>
        <p>
          <FontAwesomeIcon :icon="faLocationDot" class="mr-2" />
          Taoyuan, Taiwan
        </p>
        <p>
          <FontAwesomeIcon :icon="faEnvelope" class="mr-2" />
          a0938406813@gmail.com
        </p>
        <p class="text-gray-600">Feel free to reach me out!</p>
      </div>

      <!-- Social -->
      <div class="space-y-4 contact-item">
        <!-- Links -->
        <ul class="flex gap-4">
          <li>
            <a
              href="https://github.com/brianhsu0606"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 rounded bg-gray-600 text-gray-200 hover:bg-gray-500 transition inline-flex items-center gap-2"
            >
              <FontAwesomeIcon :icon="faGithub" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/%E7%A2%A9%E5%B6%BD-%E5%BE%90-2ba388370/"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 rounded bg-gray-600 text-gray-200 hover:bg-gray-500 transition inline-flex items-center gap-2"
            >
              <FontAwesomeIcon :icon="faLinkedin" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:a0938406813@gmail.com"
              class="px-4 py-2 rounded bg-gray-600 text-gray-200 hover:bg-gray-500 transition inline-flex items-center gap-2"
            >
              <FontAwesomeIcon :icon="faEnvelope" />
              Email
            </a>
          </li>
        </ul>

        <!-- Resume -->
        <a
          href="/brianhsu_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 transition inline-flex items-center gap-2"
        >
          <FontAwesomeIcon :icon="faCircleDown" />
          Download Resume
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#contact-title {
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
