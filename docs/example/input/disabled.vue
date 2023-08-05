<script setup lang="ts">
import { ref } from 'vue'
const value = ref('Hello World')
</script>

<template>
  <fn-input v-model="value" disabled />
</template>
