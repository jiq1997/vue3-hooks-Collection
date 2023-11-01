<template>
  <h1>useLocalStorage</h1>
  <h2>更新分数： {{ state }}</h2>
  <button
    @click="
      () => {
        set(10)
      }
    "
  >
    设为10
  </button>
  <button
    @click="
      () => {
        del()
      }
    "
  >
    清空分数
  </button>
  <button
    @click="
      () => {
        clear()
      }
    "
  >
    全部清空
  </button>
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@hooks/index.es.js'

const [state, { set, del, clear }] = useLocalStorage<number>('num', 0)
</script>
