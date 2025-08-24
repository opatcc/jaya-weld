import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'

const routes = [
  { path: '/home', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
