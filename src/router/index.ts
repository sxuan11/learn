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
    },
    {
      path: '/three',
      children: [
        {
          path: 'base',
          name: 'baseThree',
          component: () => import('../pages/three/base.vue')
        },
        {
          path: 'love',
          name: 'loveThree',
          component: () => import('../pages/three/love.vue')
        }
      ]
    }
  ] as RouteRecordRaw[]
})

export default router
