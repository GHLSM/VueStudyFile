import Vue from 'vue'
import App from "./App.vue";


new Vue({
    el:'#root',
    render: h => h(App)

    // render: function (CreateElement){  //回调函数，返回组件对象
    //     CreateElement(App)   //返回<App/>
    // }

    // components:{
    //     App
    // },
    // template:`<App></App>`

    /*
    * 配置template会报错
    * render不会
    * render内部使用了vue-template-compliler提前编译好了摸板
    * vue默认引入的vue是不带编译器的版本
    *
    * 配置template不报错的解决办法？
    * 配置webpack引入带编译版本的vue
    * 配置:'vue$': 'vue/dist/vue.esm.js'
    * */
})