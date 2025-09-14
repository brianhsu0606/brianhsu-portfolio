<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
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
</template>

<style scoped lang="scss"></style>
