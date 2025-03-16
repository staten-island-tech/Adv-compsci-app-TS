import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Landing from '@/views/landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'test',
      component: HomeView,
    },
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    
  ],
})

export default router
