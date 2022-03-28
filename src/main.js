//整个项目的入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import setRem from './setRem'
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
Vue.config.productionTip = false

setRem(750, 100);
window.addEventListener('resize', function () {
  setRem(750, 100)
})
if(process.env.NODE_ENV === 'development'){
  //如果是开发环境 mock会拦截ajax请求
  require('./mock/index.js')
}
//4.挂载路由
let vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')
console.log(vm)
