import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Strona główna',
        description: 'Odkryj nasze magazyny i prenumeraty',
        requiresAuth: false
      }
    },
    {
      path: '/magazines',
      name: 'magazines',
      component: () => import('@/views/MagazinesView.vue'),
      meta: {
        title: 'Magazyny',
        description: 'Przeglądaj dostępne magazyny',
        requiresAuth: false
      }
    },
    {
      path: '/magazines/:id',
      name: 'magazine-details',
      component: () => import('@/views/MagazineDetailsView.vue'),
      props: true,
      meta: {
        title: 'Szczegóły magazynu',
        description: 'Szczegółowe informacje o magazynie',
        requiresAuth: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: {
        title: '404 - Nie znaleziono strony',
        requiresAuth: false
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Kazus podatkowy`

  // const metaDescription = document.querySelector('meta[name="description"]')
  // if (metaDescription) {
  //   metaDescription.setAttribute('content', to.meta.description || '')
  // }

  if (to.meta.requiresAuth) {
    // logika sprawdzania autoryzacji
    // const isAuthenticated = store.getters.isAuthenticated
    // if (!isAuthenticated) {
    //   next({ name: 'login', query: { redirect: to.fullPath } })
    //   return
    // }
  }

  next()
})

// logika obslugi bledow
router.onError(error => {
  console.error('Router error:', error)
})

export default router
