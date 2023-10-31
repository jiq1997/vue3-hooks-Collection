<template>
  <h1>useState</h1>
  <h2>{{ count }}</h2>
  <button @click="add">+</button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useState } from '@hooks/index.es.js'

const [count, setCount] = useState<number>(0)

const add = () => {
  setCount((prev: number) => prev + 1)
}
</script>
