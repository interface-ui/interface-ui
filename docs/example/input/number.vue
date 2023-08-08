<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref()
</script>

<template>
  <fn-input v-model="value1" type="number" />
</template>
