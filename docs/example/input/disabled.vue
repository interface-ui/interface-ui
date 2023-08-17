<script setup lang="ts">
import { ref } from 'vue'
const value = ref('Please input')
</script>

<template>
  <fn-input v-model="value" disabled />
</template>
