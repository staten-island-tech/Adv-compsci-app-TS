

<template>

<main>

<div>
  <nav>
<RouterLink to="/test">testing</RouterLink>
<RouterLink to="/">landing</RouterLink>
</nav>
<RouterView />
</div>
</main>





</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import landing from './views/landing.vue'





</script>


<style>



</style>