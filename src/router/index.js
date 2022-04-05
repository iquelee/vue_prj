import Vue from 'vue'
import VueRouter from 'vue-router'
import myRegister from '../views/myRegister'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'myRegister',
      component: myRegister
    }
  ]
})

export default router
