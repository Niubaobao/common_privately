/*
 * @Author: your name
 * @Date: 2021-07-07 12:41:31
 * @LastEditTime: 2021-07-07 13:20:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /utils/examples/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import libs from '../packages'

Vue.config.productionTip = false


Vue.use(libs,{a:'参数打印设置'})

new Vue({
  render: h => h(App),
}).$mount('#app')
