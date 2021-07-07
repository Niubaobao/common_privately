<!--
 * @Author: your name
 * @Date: 2021-07-07 12:47:52
 * @LastEditTime: 2021-07-07 13:33:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /utils/packages/HelloWorld/src/HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    项目内部组件
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


