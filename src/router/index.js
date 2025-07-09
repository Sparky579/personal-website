import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Resume from '../views/Resume.vue'
import Honors from '../views/Honors.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/honors',
    name: 'Honors',
    component: Honors
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 