import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SoftwarePortfolioView  from '../views/SoftwarePortfolioView.vue'
import ResumeView from '../views/ResumeView.vue'
import MusicPortfolioView from '../views/MusicPortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/software',
      name: 'software',
      component: SoftwarePortfolioView
    },
    {
      path: '/music',
      name: 'music',
      component: MusicPortfolioView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/about',
      name: 'about',
   
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
