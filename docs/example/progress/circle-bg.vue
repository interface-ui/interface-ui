<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(20)
const value2 = ref(50)
const value3 = ref(75)
</script>

<template>
  <fn-progress type="circle" :percentage="value1" background="#2a114a" color="#5fcb71" />
  <fn-progress type="circle" :percentage="value2" background="#1f4928" color="#dca550" />
  <fn-progress type="circle" :percentage="value3" background="#3e0a1a" color="#eb5851" />
</template>
