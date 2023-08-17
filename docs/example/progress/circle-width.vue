<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(20)
const value2 = ref(50)
const value3 = ref(75)
</script>

<template>
  <fn-progress type="circle" :percentage="value1" width="100" />
  <fn-progress type="circle" :percentage="value2" width="110" />
  <fn-progress type="circle" :percentage="value3" width="120" />
</template>
