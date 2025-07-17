import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from './pages/AuthPage.vue'
import Dashboard from './pages/Dashboard.vue'
import { useUserStore } from '@/stores/user'

const routes = [
  {
    path: '/sign-in',
    name: 'SignIn',
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

router.beforeEach(async (to) => {
  const user = useUserStore()
  if (to.meta.requiresAuth) {
    if (user.accessToken) return true
    return { path: '/sign-in', query: { redirect: to.fullPath } }
  }
  return true
})

export default router; 