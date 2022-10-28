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
        },
        {
          path: 'pip',
          name: 'pip',
          component: () => import('../pages/WebRTC/pip.vue')
        },
        {
          path: 'screen-record',
          name: 'screenRecord',
          component: () => import('../pages/WebRTC/screen-record.vue')
        },
        {
          path: 'mix-screen',
          name: 'mixScreen',
          component: () => import('../pages/WebRTC/mix-screen.vue')
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
