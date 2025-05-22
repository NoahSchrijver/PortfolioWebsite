import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/LoginView.vue'
import HomeView from '../components/HomeView.vue'
// Voeg eventueel AboutView en PortfolioView toe

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/home', name: 'Home', component: HomeView },
  // { path: '/about', name: 'About', component: AboutView },
  // { path: '/portfolio', name: 'Portfolio', component: PortfolioView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
