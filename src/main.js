import 'noto-sans-kr'
import 'vue-antd-ui/dist/antd.css'

import Vue from 'vue'
import App from './App.vue'
import routes from './routes'

import Antd from 'vue-antd-ui'
import VueRouter from 'vue-router'
import VueLocalStorage from 'vue-localstorage'

Vue.use(Antd)
Vue.use(VueRouter)
Vue.use(VueLocalStorage)

const app = new Vue({
  render: h => h(App),
  router: new VueRouter({ routes })
})

app.$mount('#app')
