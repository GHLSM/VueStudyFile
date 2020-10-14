<template>
  <div class="todo-footer">
    <!--插槽slot，不取名则为默认插槽，一般不用，最多用一个-->
    <label>
      <!--      <input type="checkbox" v-model="isCheckAll">-->
      <slot></slot>
    </label>
<!--    <span>-->
<!--        <span>已完成{{ completeCount }}</span> / 全部{{ todos.length }}-->
<!--    </span>-->
<!--    有名字则为命名插槽-->
    <slot name="mid"></slot>
<!--    <button class="btn btn-danger pull-right" v-show="completeCount>0" @click="deleteAllFinish">清除已完成任务</button>-->
    <slot name="button"></slot>

  </div>
</template>

<script>
export default {
  name: "Footer",
  // props: {
  //   todos: Array,
  //   checkAll: Function,
  //   deleteAllFinish: Function
  // },
  data() {
    return {
      //返回的数据
    }
  },

}
</script>

<style scoped>

</style>
