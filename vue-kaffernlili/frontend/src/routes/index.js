import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieShowPage'
import Login from '@/components/login'

Vue.use(Router)
export const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/',
     name: 'index',
     component: Index
   },
   {
     path: '/:id',
     name: 'show',
     component: Show
   },
   {
     path: '/login',
     name: 'login',
     component: Login
   }
 ]
})