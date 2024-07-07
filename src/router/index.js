import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Home - Cohative Studio'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About - Cohative Studio'
      }
    }
  ]
})

// Start the progress bar before each route change
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// Complete the progress bar after each route change
router.afterEach(() => {
  NProgress.done()
})

export default router
