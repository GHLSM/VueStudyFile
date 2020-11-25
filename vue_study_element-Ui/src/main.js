// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select ,Form, FormItem, Input} from 'element-ui';


Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
