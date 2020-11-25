<template>
  <div>
    <h2>Home</h2>
    <br>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news">News</router-link>
      </li>
      <li>
        <router-link to="/home/message">Messages</router-link>
      </li>

    </ul>
<!--    显示二级路由-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",

}
</script>

<style scoped>

</style>
