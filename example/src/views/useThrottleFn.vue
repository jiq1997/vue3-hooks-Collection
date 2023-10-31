<template>
  <h1>{{ valueRef }}</h1>
  <button @click="() => run()">执行</button>
</template>

<script lang="ts" setup>
// @ts-ignore #
import { useThrottleFn } from '@hooks/index.es.js'
import { ref } from 'vue'

const valueRef = ref(0)

const { run } = useThrottleFn(
  () => {
    valueRef.value += 1
  },
  {
    wait: 1000,
  }
)
</script>
