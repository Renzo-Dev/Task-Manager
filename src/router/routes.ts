// import { RouteRecordRaw } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue'),
  },
]
