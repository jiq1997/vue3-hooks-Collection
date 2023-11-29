<template>
  <h3>{{ v }}</h3>
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useVModel } from '@hooks/index.es.js'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits(['update:visible'])

const v = useVModel(props, emit, 'visible')

const change = () => {
  v.value = true
}
</script>
