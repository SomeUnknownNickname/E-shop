<template>
  <header>
    <TheNavigation />
  </header>
  <div class="container">
    <RouterView />
  </div>
  <footer>
    <Footer />
  </footer>
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import TheNavigation from './components/TheNavigation.vue';
  import Footer from './components/Footer.vue';
</script>
