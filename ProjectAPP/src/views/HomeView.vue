<template>
  <form class="Search_Action" @submit.prevent="(Search(Country), (Country = ''), Format)">
    <input type="text" placeholder="Enter a country" v-model="Country" />
    <button type="submit">Search</button>
  </form>

  <p v-if="thingy">Country Name: {{ thingy.name }}</p>
  <p v-if="thingy">Captial: {{ thingy.capital }}</p>
  <p v-if="thingy">
    Surface Area(Kilometer Squared): {{ Format(thingy.surface_area, formatted_SA) }}
  </p>
  <p v-if="thingy">
    Population of {{ thingy.name }}: {{ Format(thingy.population, formatted_POP) }}
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getCountryInfo } from '../components/API_CINFO'
import numbro from 'numbro'

const thingy = ref<{
  capital: string
  surface_area: number
  name: string
  population: number /* Surface area api call is a string not a number */
} | null>(null) // reactive var | just add in more of the data names from the object to hold them in the template

const fetchCountryInfo = async (Name: string) => {
  thingy.value = await getCountryInfo(Name) // async funtion that returnsv value to thingy so I can acces them with the ref const above with reactive things in them
}

const Country = ref<string>('')
let formatted_SA: number = 0
let formatted_POP: number = 0

function Format(x: number, y: any) {
  y = numbro(x).format({ thousandSeparated: true })
  return y
}

function Search(x: string) {
  if (x == '') {
    console.log('no input')
    thingy.value = null
  } else {
    thingy.value = null // hides the p tags with the v-if"thingy" model so that prevouous country data isnt show after entering a new search
    fetchCountryInfo(x)
    console.log(x)
  }
}
</script>

<style scoped>
.Search_Action {
  margin-top: 2vh;
}
</style>
