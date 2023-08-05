<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <fn-input v-model="value" placeholder="Please input" clearable />
</template>
