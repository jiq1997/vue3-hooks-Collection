<template>
  <h1>useDebounce</h1>
  <h2>{{ debouncedValue }}</h2>
  <input
    type="text"
    :value="value"
    placeholder="请输入"
    @input="
      (e) => {
        changeValue(e)
      }
    "
  />
</template>

<script lang="ts" setup>
// @ts-ignore #
import { useDebounce } from '@hooks/index.es.js'
import { ref, watch, Ref } from 'vue'
const value = ref('1')
const debouncedValue = useDebounce<Ref<string>>(value, {
  wait: 500,
})
const changeValue = (e: any) => {
  value.value = e.target.value
}

watch(debouncedValue, () => {
  console.log('debouncedValue', debouncedValue)
})
</script>
