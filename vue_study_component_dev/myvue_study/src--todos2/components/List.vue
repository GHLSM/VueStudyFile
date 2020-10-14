<template>
  <ul class="todos-main">
      <Item v-for="(todo, index) in todos" :key="todo.id"
            :todo="todo" :delTodo="delTodo" :index="index"></Item>
  </ul>

</template>
<script>
import Item from "./Item";

export default {
  name: "List",
  data() {
    return {
    }
  },
  props:['todos','delTodo'],
  components:{
    Item
  }
}
</script>

<style scoped>

</style>
