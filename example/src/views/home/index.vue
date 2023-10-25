<template>
  <!-- <h1>{{ obj.num }}</h1>
  <button @click="change">修改</button>
  <button @click="reset">重置</button> -->
</template>

<script setup lang="ts">
import { useCookie } from '../../../build/index.js'
console.log('%c!<----start ---->', 'color:mediumspringgreen')
console.log(useCookie)
console.log('%c!<---- end ---->', 'color:mediumspringgreen')
// let [obj, resetObj] = useResetState({
//   num: 1,
// })
// const change = () => {
//   obj.num++
// }
// const reset = () => {
//   resetObj()
// }
</script>

<style scoped lang="less"></style>
