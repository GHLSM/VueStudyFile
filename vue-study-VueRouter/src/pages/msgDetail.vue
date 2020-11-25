<template>
<div>
  <ul>
<!--    <li>ID:{{$route.params.messageid}}</li>-->
    <li>ID:{{ messageid }}</li>
    <li>MESSAGE:{{ title }}</li>
    <li>AUTHOR: {{ detail.author }}</li>
  </ul>
</div>
</template>

<script>
const AllDetail = [
        {id: 1 ,title: "message01", author: "gh"},
        {id: 2 ,title: "message02", author: "lam"},
        {id: 3 ,title: "message03", author: "none"},
        {id: 4 ,title: "message04", author: "ddd"}
        ]
export default {
  name: "msg-detail",
  props:["messageid", "title"],
  data(){
    return {
      detail:{},

    }
  },
  mounted() {
    //模拟请求获取对应详情数据
    const id = this.$route.params.messageid;
    setTimeout(()=>{
      const detail = AllDetail.find(detail => id==detail.id)
      this.detail = detail
    },1000)
  },
  //监视路由变化（本质是参数变化 ==》内部对$route进行了重新赋值）
  watch: {
    $route(to, from) { //to为新的值，from为旧的值
      const id = to.params.messageid;
      setTimeout(() => {
        const detail = AllDetail.find(detail => id == detail.id)
        this.detail = detail
      },1000)
    }
  }
}
</script>

<style scoped>

</style>
