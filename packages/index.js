/*
 * @Author: your name
 * @Date: 2021-07-07 12:48:08
 * @LastEditTime: 2021-07-07 13:30:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /utils/packages/HelloWorld/index.js
 */

import HelloWorld from "./HelloWorld/src/index.js";

const components = { HelloWorld }


const install = (Vue,options)=>{
    if (install.installed) return;
    install.installed = true
    console.log(options)
    for (const key in components) {
        // eslint-disable-next-line no-prototype-builtins
        if (components.hasOwnProperty(key)) {
            const component = components[key];
            Vue.component(component.name, component)
        }
    }
}

if(typeof window !== "undefined" && window.Vue){
    install(window.Vue)
}

export default{
    //暴露install方法
    install,
    // 导出组件列表
    ...components
}