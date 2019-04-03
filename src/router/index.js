import Vue from 'vue'
import Router from 'vue-router'
import MyHeader from '@/components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyHeader',
      component: MyHeader
    }
  ]
})
