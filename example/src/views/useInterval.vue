<template>
  <h1>useInterval</h1>
  <h2>{{ count }}</h2>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useInterval } from '@hooks/index.es.js'
import { ref } from 'vue'
const count = ref<number>(0)
useInterval(() => {
  count.value++
}, 3000)
</script>
