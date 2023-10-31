<template>
  <h1>useBoolean</h1>
  <h2>{{ isBoolean }}</h2>
  <button @click="toggle">改变</button>
  <button @click="setTrue">改变为true</button>
  <button @click="setFalse">改变为false</button>
  <button @click="set(false)">设为false</button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useBoolean } from '@hooks/index.es.js'
const [isBoolean, action] = useBoolean()
const { toggle, set, setTrue, setFalse } = action
toggle()
</script>

<style scoped lang="less"></style>
