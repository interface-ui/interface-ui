<script setup lang="ts">
import { ref } from 'vue'

const values = ref<boolean[]>([true, true, false, false])
</script>

<template>
  <fn-switch v-model="values[0]" />
  <fn-switch v-model="values[1]" disabled />
  <fn-switch v-model="values[2]" />
  <fn-switch v-model="values[3]" disabled />
</template>
