<template>
<div class="login-box">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名：">
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码：">
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit" type="primary" round>登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
    name: "Login",
  data(){
      return {
        username: '',
        password:''
      }
  },
  methods:{
      submit(){

      }
  }
}
</script>

<style scoped>
  .login-box {
    width: 500px;
    height: 400px;
    border: 1px solid darkgray;
  }
</style>
