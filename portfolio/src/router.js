import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/views/Portfolio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Portfolio
    },
    {
        path: '/vue',
        component: () => import('./views/Vue.vue')
    },
    {
        path: '/bpm',
        component: () => import('./views/Bpm.vue')
    }
  ]
})