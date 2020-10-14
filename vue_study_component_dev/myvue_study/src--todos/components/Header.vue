<template>
  <div class="todos-header">
    <input type="text" placeholder="请输入" @keyup.enter="add" v-model="title">
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title:'',
    }
  },
  props: {
    AddTodo: {
      type: Function,
      required: true
    }
  },
  methods:{
    add(){
      //获取todo
      const title = this.title.trim();
      if (title){
        const id = new Date();
        const complete = false;
        console.log(id, title, complete);
        const todo  = {
          id:id,
          title: title,
          complete: complete
        };
        //添加todo
        this.AddTodo(todo);
        this.title = ''
      }else {
        alert('您的输入不可为空')
      }

    }
  }

}
</script>

<style scoped>

</style>
