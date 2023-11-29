<!--
 * @Description: 
 * @Author: 纪泉
 * @Date: 2023-11-29 10:09:13
 * @LastEditors: 纪泉
 * @LastEditTime: 2023-11-29 10:10:34
-->
<template>
  <h3>{{ visible1 }}</h3>
  <h3>{{ visible2 }}</h3>
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
// @ts-ignore #
import { useVModels } from '@hooks/index.es.js'

const props = defineProps<{ visible1: boolean; visible2: boolean }>()
const emit = defineEmits(['update:visible1', 'update:visible2'])

const { visible1, visible2 } = useVModels(props, emit)

const change = () => {
  visible1.value = true
  visible2.value = false
}
</script>
