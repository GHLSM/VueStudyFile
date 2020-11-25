<template>
  <div id="app">
    <mt-button type="danger" style="width: 100%; height: 200px"  @click="tips">danger</mt-button>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods:{
    tips(){
      MessageBox('提示', '操作成功');
      MessageBox.alert('您点击了')
        .then(action => {
          Toast({
            message: '提示',
            position: 'bottom',
            duration: 5000
          })
        })
    }
  }
}
</script>

<style lang="scss">

</style>
