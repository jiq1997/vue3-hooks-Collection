<template>
  <h1>useThrottle</h1>
  <h2>{{ throttledValue }}</h2>
  <input type="text" placeholder="input" v-model="valueRef" />
</template>

<script lang="ts" setup>
// @ts-ignore #
import { useThrottle } from '@hooks/index.es.js'
import { ref } from 'vue'
const valueRef = ref('')

const throttledValue = useThrottle(valueRef, { wait: 500 })
</script>
