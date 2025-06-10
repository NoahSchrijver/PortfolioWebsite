import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/components/LoginView.vue';
import HomeView from '@/views/HomeView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import OverMijView from '@/views/OverMijView.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/home', component: HomeView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/overmij', component: OverMijView }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
