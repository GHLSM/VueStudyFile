/*
* 定义路由器对象
* */
import Vue from "vue";
import VueRouter from "vue-router";
import about from "../pages/about";
import home from "../pages/home";
import news from "../pages/news";
import message from "../pages/message";
import msgDetail from "../pages/msgDetail";

Vue.use(VueRouter)

export default new VueRouter({
  //应用中的所有路由
  routes:[
    {
      path:"/about",
      component:about
    },
    {
      path: "/home",
      component: home,
      children:[
        {
          // path:"/home/news",
          path:"news",
          component: news
        },
        {
          path: "/home/message",
          component: message,
          children:[
            {
              name:"detail",
              path:"/home/message/msgdetail/:messageid",
              component:msgDetail,
              // props:true    //将params参数映射成props传递   将params参数数据传递给组件作为参数
              props:(route) => ({messageid: route.params.messageid, title:route.query.title})

            }
          ]
        },
        {
          path: "/home",
          redirect:"/home/news"
        }
      ]
    },
    //自跳转路由
    {
      path: "/",
      redirect:"/home"
    },
  ]
})
