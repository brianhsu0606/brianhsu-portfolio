<script setup lang="ts"></script>

<template>
  <header
    class="sticky top-0 z-50 backdrop-blur bg-blue-200/50 shadow-md flex justify-between items-center px-8 h-[10vh] text-2xl font-bold"
  >
    <h3>Brian Hsu</h3>
    <nav>
      <ul class="flex gap-8">
        <li><NuxtLink to="#home">HOME</NuxtLink></li>
        <li><NuxtLink to="#about">ABOUT</NuxtLink></li>
        <li><NuxtLink to="#project">PROJECTS</NuxtLink></li>
        <li><NuxtLink to="#contact">CONTACT</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <!-- Hero -->
  <section id="home" class="h-[90vh] flex flex-col justify-center items-center text-center bg-blue-100">
    <h1 class="text-5xl font-bold mb-4">Hi, I’m Brian 👋</h1>
    <p class="text-xl mb-6">Frontend Developer | Vue.js | Express</p>
    <a href="#projects" class="px-6 py-3 bg-blue-500 text-white rounded-xl">View My Work</a>
  </section>

  <!-- About -->
  <section id="about" class="py-20 px-8 bg-white text-center">
    <h2 class="text-4xl font-bold mb-6">About Me</h2>
    <p class="max-w-2xl mx-auto text-lg">
      我是一名前端開發者，熟悉 Vue 3、Express 和 Tailwind CSS，熱衷於打造實用的產品。
    </p>
  </section>

  <!-- Projects -->
  <section id="projects" class="py-20 px-8 bg-blue-50">
    <h2 class="text-4xl font-bold mb-10 text-center">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white shadow rounded-xl p-6">
        <h3 class="text-2xl font-semibold mb-2">記帳小幫手</h3>
        <p class="mb-4">一個簡單的記帳系統，支援新增、刪除與分析。</p>
        <span class="text-sm text-gray-600">Vue / Express</span>
      </div>
      <div class="bg-white shadow rounded-xl p-6">
        <h3 class="text-2xl font-semibold mb-2">樂器行後台系統</h3>
        <p class="mb-4">模擬樂器行的會員與商品管理後台。</p>
        <span class="text-sm text-gray-600">Vue / Element Plus</span>
      </div>
    </div>
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
