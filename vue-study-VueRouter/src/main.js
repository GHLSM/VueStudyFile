import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  router,    //注册了路由器，所有组件都有一个$route
  render: h => h(App)
})
