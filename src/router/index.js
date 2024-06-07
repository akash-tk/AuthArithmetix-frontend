import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue';
import ArithmeticOperations from '../components/ArithmeticOperations.vue';

const routes = [
  { path: '/', name: 'UserLogin', component: UserLogin },
  { path: '/arithmetic-operations', name: 'ArithmeticOperations', component: ArithmeticOperations }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;