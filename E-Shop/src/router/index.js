import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '@/views/DestinationView.vue'
import ExperienceView from '@/views/ExperienceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product/:slug',
      name: 'product',
      component: DestinationView,
      props: true,
      children: [
        {
          path: ':experienceSlug',
          name: 'experience',
          component: ExperienceView,
          props: true,
        },
      ],
    },
    {
      path: '/destination/:slug',
      name: 'destination',
      component: DestinationView,
      props: true,
      children: [
        {
          path: ':experienceSlug',
          name: 'experience',
          component: ExperienceView,
          props: true,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      props: true,
    },
  ],
})

export default router