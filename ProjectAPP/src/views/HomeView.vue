<template>
    <button @click="fetchCountryInfo">API Call button</button>
    <button @click="console.log(thingy)">log info</button>
    <p v-if="thingy">Name: {{ thingy.capital }}</p>
    <p v-if="thingy">Sex Ratio: {{ thingy.sex_ratio }}</p>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { getCountryInfo } from '../components/API_CINFO';
  
  const thingy = ref<{ capital?: string; sex_ratio?:number } | null>(null);  // reactive var | just add in more of the data names from the object to hold them in the template
  
  const fetchCountryInfo = async () => {
    thingy.value = await getCountryInfo('United States');  // async funtion that returnsv value to thingy so I can acces them with the ref const above with reactive things in them
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  