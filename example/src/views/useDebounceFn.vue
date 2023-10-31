<template>
  <h1>useDebounceFn</h1>
  <h2>{{ valueRef }}</h2>
  <button @click="() => run()">执行</button>
</template>

<script lang="ts" setup>
// @ts-ignore #
import { useDebounceFn } from '@hooks/index.es.js'
import { ref } from 'vue'
const valueRef = ref(0)

const { run } = useDebounceFn(
  () => {
    valueRef.value += 1
  },
  {
    wait: 1000,
  }
)
</script>
