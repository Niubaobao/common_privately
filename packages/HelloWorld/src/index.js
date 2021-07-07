/*
 * @Author: your name
 * @Date: 2021-07-07 12:47:59
 * @LastEditTime: 2021-07-07 13:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /utils/packages/HelloWorld/src/index.js
 */

import HelloWorld from "./HelloWorld.vue"

HelloWorld.install = (Vue)=>{
    Vue.components("NpmCommon",HelloWorld)
}

export default HelloWorld