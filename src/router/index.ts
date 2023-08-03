import { createRouter, createWebHistory } from 'vue-router'

import BlankLayout from '../layouts/BlankLayout.vue'
import AdminLayout from '../layouts/Admin/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AdminLayout,
      children: [
        {
          path: '',
          redirect: 'dashboard'
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/Dashboard/DashboardView.vue'),
          meta: {
            requiresAuth: true,
            name: 'Dashboard'
          }
        },
        {
          path: 'stagiaire',
          name: 'stagiaire',
          component: () => import('../views/Stagiaire/StagiaireListView.vue'),
          meta: {
            requiresAuth: true,
            name: 'Stagiaires'
          },
          children: [
            {
              path: 'create',
              name: 'stagiaire.create',
              component: () => import('../views/Stagiaire/StagiaireCreateView.vue'),
              meta: {
                requiresAuth: true,
                name: 'Créer un stagiaire'
              }
            },
            {
              path: ':id',
              name: 'stagiaire.detail',
              component: () => import('../views/Stagiaire/StagiaireDetailView.vue'),
              meta: {
                requiresAuth: true,
                name: 'Détail du stagiaire'
              }
            },
          ]
        },
      ]
    },
    {
      path: '/login',
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
