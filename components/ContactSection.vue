<script setup lang="ts">
import { onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleDown, faEnvelope, faLocationDot, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";

onMounted(() => {
  gsap.from(".contact-item", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
});
</script>

<template>
  <section id="contact" class="py-10 bg-blue-50 flex flex-col items-center" aria-labelledby="contact-title">
    <h2 id="contact-title" class="text-4xl font-bold mb-16 contact-item">Contact</h2>

    <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 contact-item">
      <!-- Info -->
      <address class="not-italic text-lg flex flex-col items-start gap-2 text-left ml-auto max-w-md">
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
      </address>

      <!-- Social -->
      <div class="flex flex-col items-start gap-6 contact-item">
        <!-- Links -->
        <ul class="flex flex-wrap gap-4">
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
