import Vue from 'vue'
// import App from './App.vue'

//@ 是目录src的绝对路径别名   webpack内部配置好的
// @想要后期有提示（联想） 必须配置jsconfig.json 
import App from '@/App'



Vue.config.productionTip = false

var a = 100

new Vue({
  render: h => h(App),
}).$mount('#app')
