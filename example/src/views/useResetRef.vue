<template>
  <h1>useResetRef</h1>
  <h2>{{ num }}</h2>
  <button @click="change">修改</button>
  <button @click="reset">重置</button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useResetRef } from '@hooks/index.es.js'

let [num, resetNum] = useResetRef(1)
const change = () => {
  num.value++
}
const reset = () => {
  resetNum()
}
</script>

<style scoped lang="less"></style>
