<template>
  <li :style="{background: bgColor}" @mouseenter="mouseHandle(true)" @mouseleave="mouseHandle(false)" >
      <label for="inPut">
          <input type="checkbox" v-model="todo.complete" id="inPut">
          <span>{{todo.title}}</span>
        </label>
      <button class="btn btn-danger btn-sm pull-right" v-show="isShow" @click="deleteItem">删除</button>
  </li>

</template>

<script>
export default {
  name: "Item",

  props:{
    todo:Object,
    delTodo:Function,
    index:Number
  },
  data() {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods:{
    mouseHandle(isEnter){
      if (isEnter){
        this.bgColor = 'darkgray';
        this.isShow = true
      }else {
        this.bgColor = 'white';
        this.isShow = false
      }
    },
    deleteItem(){
      if (confirm('确定删除吗？')) {
        this.delTodo(this.index)
      }
    }

  }



}
</script>

<style scoped>

</style>
