<template>
  <h1>useDeepCopy</h1>
  <h2>{{ obj.age }}</h2>
  <h2>{{ obj1.age }}</h2>
  <button @click="change">改变</button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useDeepCopy } from '@hooks/index.es.js'
import { ref } from 'vue'

let obj = ref({
  age: 1,
  test: () => {
    console.log(1)
  },
})
let obj1 = ref(useDeepCopy(obj.value))
const change = () => {
  obj1.value.age = 18
  obj.value.age = 25
}
</script>

<style scoped lang="less"></style>
