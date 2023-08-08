<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref(1)
const value2 = ref(1)
</script>

<template>
  <fn-radio v-model="value1" :value="value2" disabled>
    Radio
  </fn-radio>
</template>
