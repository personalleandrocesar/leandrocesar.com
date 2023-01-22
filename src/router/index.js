import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sobre.vue')
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import('../views/projetos.vue')
    },
    {
      path: '/projetos/ativos',
      name: 'projetos/ativos',
      component: () => import('../views/projetos/ativos.vue')
    },
    {
      path: '/projetos/em-desenvolvimento',
      name: 'projetos/em-desenvolvimento',
      component: () => import('../views/projetos/em-desenvolvimento.vue')
    }
  ]
})

export default router
