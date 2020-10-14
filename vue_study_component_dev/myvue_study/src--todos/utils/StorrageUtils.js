/*
* localStorage数据存储的工具模块：包含多个工具函数
* */

//默认暴露
// export default {
//   saveTodos (){},
//   getTodos (){}
// }


export function saveTodos (todos){
  localStorage.setItem('todos_key', JSON.stringify(todos))
}

export const getTodos = () => JSON.parse(localStorage.getItem('todos_key') || "[]")
