<template>
  <header>
    <TheNavigation />
  </header>
  <div class="container">
    <RouterView />
  </div>
    <product>
    <p>i</p>
    </product>
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import TheNavigation from './components/TheNavigation.vue';
  import product from './components/Product.vue';
</script>
