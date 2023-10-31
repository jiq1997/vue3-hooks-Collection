<template>
  <h1>useAsyncState</h1>
  <h2>{{ data }}</h2>
  <h2>{{ loading }}</h2>
  <button
    @click="
      () => {
        run()
      }
    "
  >
    run
  </button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useAsyncState } from '@hooks/index.es.js'

const promise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('setTimeout模拟请求')
      resolve([1, 2, 3])
    }, 300)
  })
}
const { data, loading, run } = useAsyncState(() => promise(), {
  manual: true,
})
</script>
