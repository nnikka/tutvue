import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Wordl2 from '@/components/world'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/world3',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/world2',
      name: 'Wordl2',
      component: Wordl2
    }
  ]
})
