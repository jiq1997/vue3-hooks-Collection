<template>
  <h1>useVModel</h1>
  <h2>{{ visible }}</h2>
  <useVModelSon v-model:visible="visible"></useVModelSon>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useVModelSon from './useVModelSon.vue'

const visible = ref(false)
</script>
