import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Landing from '@/views/landing.vue'
import FilterCountry from '@/views/FilterCountry.vue'
import GuessCountry from '@/views/GuessCountry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/CountryInfo',
      name: 'test',
      component: HomeView,
    },
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/Countries by filter',
      name: 'Filter',
      component: FilterCountry,
    },
    {
      path: '/',
      name: 'GuessCountry',
      component: GuessCountry,
    },

    
  ],
})

export default router
