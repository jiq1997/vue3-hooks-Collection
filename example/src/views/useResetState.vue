<template>
  <h1>useResetState</h1>
  <h2>{{ obj.num }}</h2>
  <button @click="change">修改</button>
  <button @click="reset">重置</button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useResetState } from '@hooks/index.es.js'

let [obj, resetObj] = useResetState({
  num: 1,
})
const change = () => {
  obj.num++
}
const reset = () => {
  resetObj()
}
</script>

<style scoped lang="less"></style>
