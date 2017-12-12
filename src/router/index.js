import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainPage'
import Team from '@/components/team'
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
