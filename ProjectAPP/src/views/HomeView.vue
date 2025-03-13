<template>

    <form class="Search_Action" @submit.prevent="Search(Country), Country = ''">
      <input type="text" placeholder="Enter a country" v-model="Country" >
      <button type="submit" >Search</button>
    </form>
  
    <p v-if="thingy">Name: {{ thingy.capital }}</p>
    <p v-if="thingy">Sex Ratio: {{ thingy.sex_ratio }}</p>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { getCountryInfo } from '../components/API_CINFO';
  
  const thingy = ref<{ capital?: string; sex_ratio?:number } | null>(null);  // reactive var | just add in more of the data names from the object to hold them in the template
  
  const fetchCountryInfo = async (Name:string) => {
    thingy.value = await getCountryInfo(Name);  // async funtion that returnsv value to thingy so I can acces them with the ref const above with reactive things in them
  };



  const Country = ref<string>('')
  
  function Search(x:string , ) {
    if (x == ''){
      console.log("no input")
    }
    else{
      thingy.value = null // hides the p tags with the v-if"thingy" model so that prevouous country data isnt show after entering a new search
      fetchCountryInfo(x)
      console.log(x)
    }

    

    
  }
  </script>
  
  <style scoped>

  .Search_Action{
    margin-top: 2vh;
  }

  </style>
  