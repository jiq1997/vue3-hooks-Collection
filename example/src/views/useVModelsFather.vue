<template>
  <h1>useVModel</h1>
  <h2>{{ visible1 }}</h2>
  <h2>{{ visible2 }}</h2>
  <useVModelsSon
    v-model:visible1="visible1"
    v-model:visible2="visible2"
  ></useVModelsSon>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useVModelsSon from './useVModelsSon.vue'

const visible1 = ref(false)
const visible2 = ref(true)
</script>
