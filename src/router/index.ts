import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    // 登录
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/login/serviceAgree',
      component: () => import('@/views/login/serviceAgree.vue')
    },
    {
      path: '/login/privacyPolicy',
      component: () => import('@/views/login/privacyPolicy.vue')
    },
    {
      path: '/task',
      component: () => import('@/views/task/index.vue')
  },
  {
      path: '/task/search',
      component: () => import('@/views/task/search.vue')
  },
  {
      path: '/task/details/:id',
      component: () => import('@/views/task/details.vue')
  },
  {
      path: '/task/companySource/:id',
      component: () => import('@/views/task/companySource.vue')
  },
  {
    path: '/contract',
    component: () => import('@/views/contract/index.vue')
  },
  {
      path: '/contract/details/:id',
      component: () => import('@/views/contract/details.vue')
  },
  {
      path: '/contract/progress/:id',
      component: () => import('@/views/contract/progress.vue')
  },
  {
    path: '/message',
    component: () => import('@/views/message/index.vue')
  },
  {
    path: '/message/systemList',
    component: () => import('@/views/message/systemList.vue')
  },
  {
    path: '/message/systemDetails/:id',
    component: () => import('@/views/message/systemDetails.vue')
  },
  {
    path: '/message/talk/:taskId/:userId',
    component: () => import('@/views/message/talk.vue')
  },
  // {
  //   path: '/message/talent/:resumeId/:userId',
  //   component: () => import('@/views/message/talent.vue')
  // }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router