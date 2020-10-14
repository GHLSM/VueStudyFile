import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//声明使用插件
Vue.use(VueResource) //所有组件对象都有一个属性$http(实际上是放在原型对象中的)

new Vue({
  el: '#app',
  render: h => h(App)
})
