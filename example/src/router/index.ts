import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/useResetRef',
    children: [
      {
        path: 'useResetRef',
        name: 'useResetRef',
        // @ts-ignore #
        component: () => import('@/views/useResetRef.vue'),
      },
      {
        path: 'useResetState',
        name: 'useResetState',
        // @ts-ignore #
        component: () => import('@/views/useResetState.vue'),
      },
      {
        path: 'useBoolean',
        name: 'useBoolean',
        // @ts-ignore #
        component: () => import('@/views/useBoolean.vue'),
      },
      {
        path: 'useToggle',
        name: 'useToggle',
        // @ts-ignore #
        component: () => import('@/views/useToggle.vue'),
      },
      {
        path: 'useDeepCopy',
        name: 'useDeepCopy',
        // @ts-ignore # useFormatResult
        component: () => import('@/views/useDeepCopy.vue'),
      },
      {
        path: 'useFormatResult',
        name: 'useFormatResult',
        // @ts-ignore #
        component: () => import('@/views/useFormatResult.vue'),
      },
      {
        path: 'useTimeout',
        name: 'useTimeout',
        // @ts-ignore # useInterval
        component: () => import('@/views/useTimeout.vue'),
      },
      {
        path: 'useInterval',
        name: 'useInterval',
        // @ts-ignore #
        component: () => import('@/views/useInterval.vue'),
      },
      {
        path: 'useState',
        name: 'useState',
        // @ts-ignore #
        component: () => import('@/views/useState.vue'),
      },
      {
        path: 'useAsyncState',
        name: 'useAsyncState',
        // @ts-ignore #
        component: () => import('@/views/useAsyncState.vue'),
      },
      {
        path: 'useDebounce',
        name: 'useDebounce',
        // @ts-ignore #
        component: () => import('@/views/useDebounce.vue'),
      },
      {
        path: 'useDebounceFn',
        name: 'useDebounceFn',
        // @ts-ignore #
        component: () => import('@/views/useDebounceFn.vue'),
      },
      {
        path: 'useThrottle',
        name: 'useThrottle',
        // @ts-ignore #
        component: () => import('@/views/useThrottle.vue'),
      },
      {
        path: 'useThrottleFn',
        name: 'useThrottleFn',
        // @ts-ignore #
        component: () => import('@/views/useThrottleFn.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
