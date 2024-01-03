import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component:  () => import('../views/HomeView.vue')
    },
    
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      component: () => import('../views/LoginScreen.vue'),
      redirect:'/login',
      children:[
        {
          path:'/enroll',
          name:'enroll',
          component:()=>import('../components/logo/enroll.vue'),
        },
        {
          path:'/login',
          name:'login',
          component:()=>import('../components/logo/login.vue'),
        }
      ]
    }
  ]
})

export default router
