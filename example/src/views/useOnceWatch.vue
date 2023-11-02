<template>
  <h1>useOnceWatch</h1>
  <h2>{{ count }}</h2>
  <button @click="count++">Add</button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useOnceWatch } from '@hooks/index.es.js'
import { ref } from 'vue'
const count = ref<number>(0)
useOnceWatch(count, (nVal, oVal) => {
  console.log(nVal, oVal)
  console.log('只进来一次，然后自动停止监听')
})
</script>
