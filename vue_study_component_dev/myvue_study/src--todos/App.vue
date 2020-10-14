<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :AddTodo="AddTodo" ></Header>
      <List :todos="todos" :delTodo="delTodo"></List>
      <Footer :todos="todos" :checkAll="checkAll" :deleteAllFinish="deleteAllFinish"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import {saveTodos, getTodos} from "./utils/StorrageUtils";
// import * as StorrageUtils from "./utils/StorrageUtils";


export default {
  name: 'app',
  data () {
    return {
      todos:[]
    }
  },
  mounted() {
    // this.todos = JSON.parse(localStorage.getItem('todo_keys'))  //如果没有存值，返回null，会报错
    // this.todos = JSON.parse(localStorage.getItem('todo_keys')) || []
    this.todos = getTodos()
  },
  //组件的局部注册
  components:{
    List,
    Header,
    Footer
  },
  methods:{
    AddTodo(todo){
      this.todos.unshift(todo)
    },
    delTodo(index){
      this.todos.splice(index, 1)
    },
    checkAll(isCheck){
      //对所有todo进行全选和全不选
      this.todos.forEach(todo => todo.complete = isCheck)
    },
    deleteAllFinish(){
      // //没有改变原数组，需要赋值
      // this.todos.filter(todo => !todo.complete)
      this.todos = this.todos.filter(todo => !todo.complete)
    }
  },
  watch:{
    todos:{
      deep:true,
      // handler(newValue, oldValue){
      //   //以JSON形式将更新后的todos保存在浏览器中的localStorage
      //   // localStorage.setItem('todo_keys', JSON.stringify(newValue))
      //   saveTodos(newValue)
      // }
      //函数地址传递
      handler:saveTodos
    }
  }
}
</script>

<style lang="scss">

</style>
