import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from './components/AuthPage.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage
  },
  {
    path: '/',
    name: 'Home',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Auth' });
  } else if (to.name === 'Auth' && isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router; 