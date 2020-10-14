import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: '#app',
  // render: h => h(App)
  //用于渲染组件标签的回调函数
  render: function (CreateElement) {
      return CreateElement(App)  //返回标签<App/>
  }  //调用render函数得到它返回的组件标签对象

})
