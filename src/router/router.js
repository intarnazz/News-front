import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/PageHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home Page'
      }
    }
  ]
})

export default router
