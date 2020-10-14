import Vue from 'vue'
import App from './App.vue'

//给Vue的原型对象添加一个vm属性对象
// Vue.prototype.$globalEventBus = new Vue()
// Vue.prototype.$eventBus = new Vue()
// Vue.prototype.$bus = new Vue()


new Vue({
  el: '#app',
  // render: h => h(App)
  //用于渲染组件标签的回调函数
  //调用render函数得到它返回的组件标签对象
  render: function (CreateElement) {
      return CreateElement(App)  //返回标签<App/>
  },
  beforeCreate() { //在尽早地时间 保存当前vm，作为全局事件总线对象
    Vue.prototype.$globalEventBus = this
  }

})
