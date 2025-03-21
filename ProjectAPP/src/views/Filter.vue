<template>
    <main>
      <p>filter</p>
      <button @click="paramcountry()">API call</button>
      <button @click="console.log(Wanted_User_filters)">Check what filters</button>


      <form class="filter-form" v-if="Filter_Visible" @submit.prevent="Load_Filter_Inputs(Wanted_User_filters) ,Hide_filters()">
        <div>Selected filters: {{ Wanted_User_filters }}</div>
        <div class="filter-group" v-for="filter in filters" :key="filter.id">
          <input type="checkbox" :id="filter.id" :value="filter.value" v-model="Wanted_User_filters" />
          <label :for="filter.id">{{ filter.label }}</label>
          <!-- Probs should make this into cards or something else that loads better? -->
        </div>
        <button type="submit" class="search_BTN">Submit requested filters</button>
      </form>
      



<!-- maake it so that after the form is sumbited with the selected filters it clears itself and then presents input fields for the filter you selected to put in
 the values and then sumbit those values to plug intom the param.ts file function-->










      
    </main>
  </template>
  
<script setup lang="ts">
import { paramcountry } from '../components/Param'
import { ref, toRaw } from 'vue'

const Wanted_User_filters:any = ref([])
const Filter_Visible =  ref<boolean>(true)

function Hide_filters(){
Filter_Visible.value = false
}

function Load_Filter_Inputs(x:any){
  let new_data =toRaw(x) // converts it into a array | doesnt need to be a proxy arry since we dont need it to be reactive since the values are already submiutted I just need to reed em
  console.log(new_data)
  for(let x in new_data){
    console.log(x)
  }

}







const filters = [
  { id: 'Currency', value: 'Currency', label: 'Currency | 3-letter currency code of country (e.g. USD).' },
  { id: 'min_gdp', value: 'min_gdp', label: 'Minimum GDP | Minimum gross domestic product (GDP) of country, in US Dollars.' },
  { id: 'max_gdp', value: 'max_gdp', label: 'Maximum GDP | Maximum gross domestic product (GDP) of country, in US Dollars.' },
  { id: 'min_population', value: 'min_population', label: 'Minimum Population | Minimum population of country.' },
  { id: 'max_population', value: 'max_population', label: 'Maximum Population | Maximum population of country.' },
  { id: 'min_area', value: 'min_area', label: 'Minimum Area | Minimum surface area of country in km².' },
  { id: 'max_area', value: 'max_area', label: 'Maximum Area | Maximum surface area of country in km².' },
  { id: 'min_unemployment', value: 'min_unemployment', label: 'Minimum Unemployment Rate | Minimum unemployment rate in %.' },
  { id: 'max_unemployment', value: 'max_unemployment', label: 'Maximum Unemployment Rate | Maximum unemployment rate in %.' },
  { id: 'min_gdp_growth', value: 'min_gdp_growth', label: 'Minimum GDP Growth | Minimum GDP growth rate in %.' },
  { id: 'max_gdp_growth', value: 'max_gdp_growth', label: 'Maximum GDP Growth | Maximum GDP growth rate in %.' },
  { id: 'min_infant_mortality', value: 'min_infant_mortality', label: 'Minimum Infant Mortality | Minimum infant mortality rate in %.' },
  { id: 'max_infant_mortality', value: 'max_infant_mortality', label: 'Maximum Infant Mortality | Maximum infant mortality rate in %.' },
  { id: 'min_fertility', value: 'min_fertility', label: 'Minimum Fertility Rate | Minimum fertility rate in %.' },
  { id: 'max_fertility', value: 'max_fertility', label: 'Maximum Fertility Rate | Maximum fertility rate in %.' },
  { id: 'min_urban_pop_rate', value: 'min_urban_pop_rate', label: 'Minimum Urban Population Rate | Minimum urban population rate in %.' },
  { id: 'max_urban_pop_rate', value: 'max_urban_pop_rate', label: 'Maximum Urban Population Rate | Maximum urban population rate in %.' },
];

</script>
  
<style scoped>
main {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.api-button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
}

.api-button:hover {
  background-color: #0056b3;
}

.filter-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f9f9f9;
}

.selected-filters {
  font-weight: bold;
  margin-bottom: 10px;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

label {
  cursor: pointer;
}

</style>
  