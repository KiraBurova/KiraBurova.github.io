import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Pets from '@/components/Pets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/pets',
      name: 'Pets',
      component: Pets
    }
  ]
})
