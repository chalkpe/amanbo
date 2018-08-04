import 'noto-sans-kr'
import 'ant-design-vue/dist/antd.css'
import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import routes from './routes'

import Antd from 'ant-design-vue'
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
