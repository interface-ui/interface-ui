<script setup lang="ts">
import { ref } from 'vue'
const value = ref('Please input')
</script>

<template>
  <fn-input v-model="value" type="textarea" disabled height="100" />
</template>
