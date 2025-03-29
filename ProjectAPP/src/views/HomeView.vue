<template>
  <div class="container">
    <form class="search-box" @submit.prevent="(Search(Country), (Country = ''), Format)">
      <input type="text" placeholder="Enter a country" v-model="Country" class="search-input" />
      <button type="submit" class="search-button">🔍 Search</button>
    </form>

    <div v-if="thingy" class="result-container">
      <div class="result-box">
        <h2 class="country-name">{{ thingy.name }}</h2>
      </div>
      <div class="result-box"><strong>Capital:</strong> {{ thingy.capital }}</div>
      <div class="result-box">
        <strong>Surface Area:</strong> {{ Format(thingy.surface_area, formatted_SA) }} km²
      </div>
      <div class="result-box">
        <strong>Population:</strong> {{ Format(thingy.population, formatted_POP) }} million
      </div>
      <div class="result-box">
        <strong>GDP:</strong> {{ Format(thingy.gdp, formatted_GDP) }} million
      </div>
      <div class="result-box">
        <strong>Urban Population:</strong> {{ thingy.urban_population }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getCountryInfo } from '../components/API_CINFO'
import numbro from 'numbro'
import Swal from 'sweetalert2'

const thingy = ref<{
  capital: string
  surface_area: number
  name: string
  population: number
  gdp: number
  urban_population: number
  fertility: number
} | null>(null)

const fetchCountryInfo = async (Name: string) => {
  thingy.value = await getCountryInfo(Name)
}

const Country = ref<string>('')
let formatted_SA: number = 0
let formatted_POP: number = 0
let formatted_GDP: number = 0
let formatted_FERT: number = 0

function Format(x: number, y: any) {
  y = numbro(x).format({ thousandSeparated: true })
  return y
}

function Alert_One() {
  Swal.fire({
    title: 'Error!',
    text: 'Please enter a country before searching.',
    icon: 'warning',
    background: 'black',
    color: 'white',
    confirmButtonText: 'OK',
  })
}

function Alert_Two() {
  Swal.fire({
    title: 'Error!',
    text: 'This search term does not exist | Country is not included ',
    icon: 'warning',
    background: 'black',
    color: 'Gray',
    confirmButtonText: 'OK',
  })
}

function Search(x: string) {
  if (x == '') {
    console.log('no input')
    thingy.value = null
    Alert_One()
  } else {
    thingy.value = null
    fetchCountryInfo(x)
    console.log(x)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
}

.search-box {
  display: flex;
  gap: 10px;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.search-input {
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 4px;
}

.search-button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
}

.result-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
}

.result-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  text-align: center;
  width: 100%;
}
</style>
