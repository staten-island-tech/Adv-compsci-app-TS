import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Landing from '@/views/landing.vue'
import Filter from '@/views/Filter.vue'
import Guess from '@/views/Guess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/CountryInfo',
      name: 'Info',
      component: HomeView,
    },
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/FilterCountries',
      name: 'Filter',
      component: Filter,
    },
    {
      path: '/GuessTheCountry',
      name: 'Guess',
      component: Guess,
    },
    
  ],
})

export default router
