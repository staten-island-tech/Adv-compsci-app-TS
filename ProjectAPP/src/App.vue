

<template>

<main>
<HomeView/>
</main>

<nav>
      <RouterLink to="/">Home</RouterLink>
  </nav>



</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'



</script>


<style>



</style>