<template>
  <div class="todo-footer">
    <label for="">
      <input type="checkbox" v-model="isCheckAll">
    </label>
    <span>
        <span>已完成{{ completeCount }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger pull-right" v-show="completeCount>0" @click="deleteAllFinish">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name: "Footer",
    props:{
      todos:Array,
      checkAll:Function,
      deleteAllFinish:Function
    },
    data(){
        return {
        //返回的数据
        }
    },
    computed:{
      completeCount(){
        /*reduce();根据元素中的元素进行累计累加
        * array = [1,2,3,4,5]
        * 求奇数和
        * const total = reduce((preTotal, item)=> preTotal+(item%2===1? item : 0),0)
        * */
        return this.todos.reduce((pre, todo) => pre+(todo.complete? 1 : 0), 0)
      },
      isCheckAll:{
        get(){
          return this.completeCount===this.todos.length && this.completeCount>0
        },
        set(value){//操作checkbox
          this.checkAll(value)
        }
      }
    }
}
</script>

<style scoped>

</style>
