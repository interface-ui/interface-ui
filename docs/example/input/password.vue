<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('123456')
</script>

<template>
  <fn-input v-model="value1" type="password" prefix-icon="mdi:password-outline" />
</template>
