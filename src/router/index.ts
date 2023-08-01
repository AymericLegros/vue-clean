import { createRouter, createWebHistory } from 'vue-router'

import BlankLayout from '../layouts/BlankLayout.vue'
import AdminLayout from '../layouts/Admin/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
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
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/Login/LoginView.vue')
        }
      ]
    },
  ]
})

export default router
