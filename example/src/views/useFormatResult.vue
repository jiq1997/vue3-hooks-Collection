<template>
  <h1>useDeepCopy</h1>
  <div>{{ age }}</div>
  <div>{{ formatAge }}</div>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useFormatResult } from '@hooks/index.es.js'
import { ref } from 'vue'

const age = ref(2)
const formatAge = useFormatResult(age, (data: number) => {
  return data * 2
})
</script>

<style scoped lang="less"></style>
