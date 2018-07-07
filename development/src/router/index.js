import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import login from '@/components/login/login'
import account from '@/components/account/account'
import transfer from '@/components/account/transfer'
import withdraw from '@/components/account/withdraw'
import notfound from '@/components/notfound/notfound'

import store from '@/vuex/store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: withdraw
    },
    {
      path: '*',
      name: 'notfound',
      component: notfound
    },
    {
      path: '/logout',
      name: 'logout',
      component: login,
      beforeEnter: (to, from, next) => {
        if (to.path === '/logout') {
          store.commit('userLogout')
          next('/login')
        }
        next()
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let forbiddenRoutes = ['/account', '/withdraw', '/transfer']
  let isLoggedIn = store.getters.isLoggedIn
  if (!isLoggedIn) {
    if (forbiddenRoutes.includes(to.path)) {
      next('/login')
    }
  }
  next()
})

export default router
