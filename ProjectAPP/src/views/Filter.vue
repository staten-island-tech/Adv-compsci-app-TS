<template>
  <main class="main">
    <button @click="Return_Button()" class="Main-Return-Filters-BTN">Return</button>

    <form class="filter-form" v-if="Filter_Visible" @submit.prevent="Hide_filters()">
      <div class="filter-group" v-for="filter in filters" :key="filter.id">
        <input
          type="checkbox"
          :id="filter.id"
          :value="filter.value"
          v-model="Wanted_User_filters"
        />
        <label :for="filter.id">{{ filter.label }}</label>
        <!-- Probs should make this into cards or something else that loads better? -->
      </div>
      <button type="submit" class="search_BTN">Submit requested filters</button>
    </form>

    <div v-if="Filter_Visible_Second">
      <form class="Filter-Submission" @submit.prevent="MAKEITWORK(Submitting_values)">
        <div v-for="filter in Wanted_User_filters" :key="filter" :placeholder="filter">
          <p>{{ (Display_Filter_Label(filter), Filter_display_Label) }}</p>
          <input type="text" :placeholder="filter" v-model="Submitting_values[filter]" />
        </div>
        <button type="submit" class="Submit_Final_Values">Submit</button>
      </form>
    </div>

    <div class="results_of_filters" v-if="Filter_Visible_third">
      <div v-for="Countries in outputvalues">
        <div class="Country_results">
          <p>Country: {{ Countries.name }}</p>
          <p>World region:{{ Countries.region }}</p>
          <p>Captail:{{ Countries.capital }}</p>
          <p>Surface area of the country:{{ Countries.surface_area }} km²</p>
          <p>Local currency:{{ Countries.currency?.name }}</p>
          <p>Local GDP: {{ Countries.gdp }} million (USD)</p>
          <p>Captail:{{ Countries.capital }}</p>
          <p>Threatened species in {{ Countries.name }}: {{ Countries.threatened_species }}</p>
          <p>Average lifespan of a male: {{ Countries.life_expectancy_male }} years</p>
          <p>Average lifespan of a female: {{ Countries.life_expectancy_female }} years</p>
        </div>
      </div>
    </div>

    <!-- Maybe make a back button the filters page? -->
  </main>
</template>

<script setup lang="ts">
import { paramcountry, outputvalues } from '../components/Param'
import { ref, toRaw } from 'vue'

const Wanted_User_filters = ref<string[]>([])
const Filter_Visible = ref<boolean>(true)
const Filter_Visible_Second = ref<boolean>(false)
const Filter_Visible_third = ref<boolean>(false)
const Submitting_values = ref<Record<string, string>>({})
const inital_List: string[] = []
let PARAM_INPUT: string = ''
let Output: any = null

function Return_Button() {
  Filter_Visible.value = true
  Filter_Visible_Second.value = false
  Filter_Visible_third.value = false
}

async function MAKEITWORK(x: any) {
  await Load_Filter_Inputs(x)
  Clear_previous()
}
function Clear_previous() {
  Filter_Visible.value = false
  Filter_Visible_Second.value = false
  Filter_Visible_third.value = true
}

function Hide_filters() {
  Filter_Visible.value = false
  Filter_Visible_third.value = false
  Filter_Visible_Second.value = true
  Wanted_User_filters.value.forEach((filter) => {
    Submitting_values.value[filter] = '' // Default empty value for inputs
  })
}
let Filter_display_Label: string = ''

function Display_Filter_Label(x: string) {
  for (let i = 0; i < filters.length; i++) {
    if (x === filters[i].id) {
      Filter_display_Label = filters[i].label
      return Filter_display_Label
    }
  }
  return 'Unknown Filter'
}

async function Load_Filter_Inputs(x: any) {
  let new_data = toRaw(x) // converts it into a array | doesnt need to be a proxy arry since we dont need it to be reactive since the values are already submiutted I just need to reed em
  inital_List.length = 0
  for (let key in new_data) {
    /* the key is the selected filter itself and the newdata[key] is the value of that filter the user inputted */
    let listpush = String(key + '=' + new_data[key])
    inital_List.push(listpush)
  }

  PARAM_INPUT = inital_List.join('&')

  await paramcountry(PARAM_INPUT)
  console.log(
    outputvalues,
  ) /* Finally got it working just made it update a var from the param file itself and the import it over and it updates once they function runs making sure it awaits before updating and doing stuff */
}

const filters = [
  {
    id: 'currency',
    value: 'currency',
    label: 'Currency | 3-letter currency code of country (e.g. USD).',
  },
  {
    id: 'min_gdp',
    value: 'min_gdp',
    label:
      'Minimum GDP | Minimum gross domestic product (GDP) of country, in US Dollars. (In Millions)',
  },
  {
    id: 'max_gdp',
    value: 'max_gdp',
    label:
      'Maximum GDP | Maximum gross domestic product (GDP) of country, in US Dollars. (In Millions)',
  },
  {
    id: 'min_population',
    value: 'min_population',
    label: 'Minimum Population | Minimum population of country. (In Millions)',
  },
  {
    id: 'max_population',
    value: 'max_population',
    label: 'Maximum Population | Maximum population of country. (In Millions)',
  },
  {
    id: 'min_area',
    value: 'min_area',
    label: 'Minimum Area | Minimum surface area of country in km².',
  },
  {
    id: 'max_area',
    value: 'max_area',
    label: 'Maximum Area | Maximum surface area of country in km².',
  },
  {
    id: 'min_unemployment',
    value: 'min_unemployment',
    label: 'Minimum Unemployment Rate | Minimum unemployment rate in %.',
  },
  {
    id: 'max_unemployment',
    value: 'max_unemployment',
    label: 'Maximum Unemployment Rate | Maximum unemployment rate in %.',
  },
  {
    id: 'min_gdp_growth',
    value: 'min_gdp_growth',
    label: 'Minimum GDP Growth | Minimum GDP growth rate in %.',
  },
  {
    id: 'max_gdp_growth',
    value: 'max_gdp_growth',
    label: 'Maximum GDP Growth | Maximum GDP growth rate in %.',
  },
  {
    id: 'min_infant_mortality',
    value: 'min_infant_mortality',
    label: 'Minimum Infant Mortality | Minimum infant mortality rate in %.',
  },
  {
    id: 'max_infant_mortality',
    value: 'max_infant_mortality',
    label: 'Maximum Infant Mortality | Maximum infant mortality rate in %.',
  },
  {
    id: 'min_fertility',
    value: 'min_fertility',
    label: 'Minimum Fertility Rate | Minimum fertility rate in %.',
  },
  {
    id: 'max_fertility',
    value: 'max_fertility',
    label: 'Maximum Fertility Rate | Maximum fertility rate in %.',
  },
  {
    id: 'min_urban_pop_rate',
    value: 'min_urban_pop_rate',
    label: 'Minimum Urban Population Rate | Minimum urban population rate in %.',
  },
  {
    id: 'max_urban_pop_rate',
    value: 'max_urban_pop_rate',
    label: 'Maximum Urban Population Rate | Maximum urban population rate in %.',
  },
]
</script>

<style scoped>
main {
  font-family: 'Arial', sans-serif;
  padding: 30px;
  max-width: 800px;
  margin: auto;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.api-button {
  background-color: #007bff;
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

.main {
  width: 100vw;
}
.filter-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.selected-filters {
  font-weight: bold;
  margin-bottom: 10px;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
}

label {
  font-size: 14px;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;
}

.Main-Return-Filters-BTN {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.Main-Return-Filters-BTN:hover {
  background-color: #0056b3;
}

label:hover {
  color: #007bff;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}


.search_BTN {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.search_BTN:hover {
  background-color: #218838;
}

.Filter-Submission {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.Filter-Submission p {
  font-size: 16px;
  color: #333;
  margin: 0;
}

input[type="text"] {
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  margin-top: 8px;
}

input[type="text"]:focus {
  outline: none;
  border-color: #007bff;
}

Submit_Final_Values {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.Submit_Final_Values:hover {
  background-color: #0056b3;
}

/* Results section */
.results_of_filters {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.results_of_filters p {
  font-size: 16px;
  margin: 8px 0;
  color: #555;
}

.results_of_filters p:first-child {
  font-weight: bold;
  color: #333;
}

.Country_results {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.Country_results:hover {
  transform: translateY(-5px); /* Slightly lift the card on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Enhance shadow on hover */
}
</style>
