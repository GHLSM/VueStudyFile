<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
<!--        <router-link :to="`/home/message/msgdetail/` + message.id">{{ message.title }}</router-link>-->
<!--        传参时添加query参数, 使用模板字符串-->
<!--        <router-link :to="`/home/message/msgdetail/${message.id}?title=${message.title}`">{{message.title}}</router-link>-->
      <router-link :to="{name: 'detail', params:{messageid: message.id}, query:{title: message.title}}">{{message.title}}</router-link>

      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "message",
  data(){
    return {
      messages:[]
    }
  },
  mounted() {
    //模拟请求获取message
    const that = this;
    setTimeout(function () {
      const messages = [
        {id: 1 ,title: "message01", author: "gh"},
        {id: 2 ,title: "message02", author: "lam"},
        {id: 3 ,title: "message03", author: "none"},
        {id: 4 ,title: "message04", author: "ddd"}
        ];
      //也可以用箭头函数
      return that.messages = messages
    },1000)
  }

}
</script>

<style scoped>

</style>
