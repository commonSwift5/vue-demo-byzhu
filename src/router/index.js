import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Zhedie',
    component: () => import('../views/TheZhe.vue')
  },
  {
    path: '/reverse',
    name: 'TheReverse',
    component: () => import('../views/TheReverse.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
