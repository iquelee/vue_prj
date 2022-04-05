import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './element/index'
import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json'
  }
})

Vue.use(element)
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
