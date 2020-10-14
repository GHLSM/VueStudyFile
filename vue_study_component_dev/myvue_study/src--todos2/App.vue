<template>
  <div class="todo-container">
    <div class="todo-wrap">
<!--      <Header :AddTodo="AddTodo" ></Header>-->
<!--      绑定自定义事件监听-->
<!--      <Header @AddTodo1="AddTodo" ></Header>-->
      <Header ref="header"></Header>
      <List :todos="todos" :delTodo="delTodo"></List>
      <Footer>
<!--        插槽内容都是在父组件中解析好之后传递给子组件，所以函数等的传递需要更改-->
<!--        不写slot也会默认传默认slot-->
        <input slot="default" type="checkbox" v-model="isCheckAll">

        <span slot="mid">
               <span>已完成{{ completeCount }}</span> / 全部{{ todos.length }}
        </span>

        <button slot="button" class="btn btn-danger pull-right" v-show="completeCount>0" @click="deleteAllFinish">
          清除已完成任务
        </button>

      </Footer>
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
    //给Header组件对象绑定自定义数据监听
    this.$refs.header.$on('AddTodo1', this.AddTodo)

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
  beforeDestroy() {
    //解绑数据监听
    this.$refs.header.$off('AddTodo1')
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
  },
  computed: {
    completeCount() {
      /*reduce();根据元素中的元素进行累计累加
      * array = [1,2,3,4,5]
      * 求奇数和
      * const total = reduce((preTotal, item)=> preTotal+(item%2===1? item : 0),0)
      * */
      return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
    },
    isCheckAll: {
      get() {
        return this.completeCount === this.todos.length && this.completeCount > 0
      },
      set(value) {//操作checkbox
        this.checkAll(value)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
