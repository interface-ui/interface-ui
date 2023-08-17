<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
const value1 = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnSwtich v-model="value" color="#74b744" disabled />
      <FnSwtich v-model="value1" color="#74b744" disabled />
    </div>
  </div>
</template>
