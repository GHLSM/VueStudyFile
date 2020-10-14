事件处理的理解：
    1）绑定事件监听
        事件名
        回调函数：function(event){}
    2）分发事件（dispatch/emit event）
        事件名
        数据：event对象

        button.onclick = function(event){}
        dispacth('click',会创建一个包含很多数据的一个event对象)

Vue的组件对象与Vue对象的关系
    组件对象不是Vue的实例对象，他是VueComponent的实例
    组件对象的原型对象是一个vm对象（Vue的实例对象）
    在组件中读取：this.xxx
        1）组件对象自身上查
        2）去原型对象上查找  vm对象查找
        3）去Vue的原型对象上查找
    Vue的原型对象就只有一个
    但是组件对象的原型对象对每一个组件，有多个
    意味着如果：
        在Vue的原型对象中添加一个东西 ==> 所有的组件对象都可见
