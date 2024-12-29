import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/magazines',
      name: 'magazines',
      component: () => import('@/views/MagazinesView.vue')
    }
  ],
})

export default router
