import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/components/LoginView.vue';
import HomeView from '@/components/HomeView.vue';

const routes = [
  { path: '/', redirect: '/login' }, // Redirect root naar /login
  { path: '/login', component: LoginView },
  { path: '/home', component: HomeView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
