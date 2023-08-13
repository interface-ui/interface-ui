<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(20)
const value2 = ref(50)
const value3 = ref(75)
</script>

<template>
  <div space-y-2>
    <div fscw gap-5>
      <fn-progress :percentage="value1" />
      <fn-progress :percentage="value2" />
      <fn-progress :percentage="value3" />
    </div>
  </div>
</template>
