<template>
  <div>
    <div v-if="!repoName">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{ repoName }}</a></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      repoName:'',
      repoUrl:''
    }
  },
  mounted() {

    // this.$http.get('https://api.github.com/search/repositories?q=j&sort=stars')
    //   .then(response => {
    //     const result = response.data;
    //     const {name, html_url} = result.items[0];
    //     this.repoName = name;
    //     this.repoUrl = html_url
    //   })
    //   .catch(error =>{
    //     alert('请求出错')
    //   })
    axios({
      url:'https://api.github.com/search/repositories?q=j&sort=stars',
      method: 'get'})
      .then(response=>{
        const result = response.data;
        const {name, html_url} = result.items[0];
        this.repoName = name;
        this.repoUrl = html_url
      })
      .catch(error =>{
        alert('请求出错')
      })

  }
}
</script>

<style lang="scss">

</style>
