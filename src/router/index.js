import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import menuOne from '@/components/menuOne/menuOne'
import menuTwo from '@/components/menuTwo/menuTwo'
import menuThree from '@/components/menuThree/menuThree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/menuOne',
      name: 'menuOne',
      component: menuOne
    },
    {
      path: '/menuTwo',
      name: 'menuTwo',
      component: menuTwo
    },
    {
      path: '/menuThree',
      name: 'menuThree',
      component: menuThree
    },
    //重定向
    {path:'*',redirect:'/home'}
  ]
})
