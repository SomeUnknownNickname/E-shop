import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
// import DestinationView from '@/views/DestinationView.vue'
// import ExperienceView from '@/views/ExperienceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },
    {
      path: '/product/:productSlug',
      name: 'product',
      component: ProductView,
      props: true,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      props: true,
    },

    // {
    //   path: '/shop/:slug(.*)?',
    //   name: 'shop',
    //   component: ShopView,
    //   props: true,
    //   children: [
    //   ],
    // },
    // {
    //   path: '/destination/:slug',
    //   name: 'destination',
    //   component: DestinationView,
    //   props: true,
    //   children: [
    //     {
    //       path: ':experienceSlug',
    //       name: 'experience',
    //       component: ExperienceView,
    //       props: true,
    //     },
    //   ],
    // },
        // {
    //   path: '/shop/:slug(.*)?',
    //   name: 'shop',
    //   component: ShopView,
    //   props: true,
    // },

    // {
    //   path: '/product/:slug',
    //   name: 'product',
    //   component: ShopView,
    //   props: true,
    // },
  ],
})

export default router
