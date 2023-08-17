<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(20)
const value2 = ref(50)
const value3 = ref(75)
</script>

<template>
  <fn-progress type="circle" :percentage="value1" status="success" />
  <fn-progress type="circle" :percentage="value2" status="success" stroke-width="10" />
  <fn-progress type="circle" :percentage="value3" status="success" stroke-width="15" />
</template>
