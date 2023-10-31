<template>
  <h1>useToggle</h1>
  <h2>{{ value }}</h2>
  <button @click="toggle">重置</button>
  <button @click="setDefault">重置</button>
  <button @click="setReverse">重置</button>
  <button @click="set(true)">true</button>
  <hr />
  <h2>{{ value1 }}</h2>
  <button @click="toggle1">重置</button>
  <button @click="setDefault1">重置</button>
  <button @click="setReverse1">重置</button>
  <button @click="set1(false)">false</button>
  <hr />
  <h2>{{ value2 }}</h2>
  <button @click="toggle2">切换</button>
  <button @click="setDefault2">true</button>
  <button @click="setReverse2">false</button>
  <button @click="set2(false)">false</button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useToggle } from '@hooks/index.es.js'

const [value, { toggle, set, setDefault, setReverse }] = useToggle()
const [
  value1,
  {
    toggle: toggle1,
    set: set1,
    setDefault: setDefault1,
    setReverse: setReverse1,
  },
] = useToggle(true)

const [
  value2,
  {
    toggle: toggle2,
    set: set2,
    setDefault: setDefault2,
    setReverse: setReverse2,
  },
] = useToggle(true, false)
</script>

<style scoped lang="less"></style>
