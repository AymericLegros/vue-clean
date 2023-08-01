import { createRouter, createWebHistory } from 'vue-router'

import BlankLayout from '../layouts/BlankLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/Dashboard/DashboardView.vue'),
        },
        {
          path: 'stagiaire',
          name: 'stagiaire',
          component: () => import('../views/Stagiaire/StagiaireListView.vue'),
          children: [
            {
              path: ':id',
              name: 'stagiaire-detail',
              component: () => import('../views/Stagiaire/StagiaireDetailView.vue'),
            },
          ]
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
