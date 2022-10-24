import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const router = createRouter({
  history: createWebHistory('learn'),
  routes: [
    {
      path: '/base',
      name: 'home',
      component: () => import('@/pages/a.vue'),
    },
    {
      path: '/rtc',
      children: [
        {
          path: 'base',
          name: 'baseRtc',
          component: () => import('../pages/WebRTC/base.vue')
        }
      ]
    }
  ] as RouteRecordRaw[]
})

export default router
