<template>
  <h1>useTimeOut</h1>
  <h2>{{ count }}</h2>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useTimeOut } from '@hooks/index.es.js'
import { ref } from 'vue'
const count = ref<number>(0)
useTimeOut(() => {
  count.value++
}, 3000)
</script>
