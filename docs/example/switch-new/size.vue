<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnSwitchNew v-model="value1" size="small" />
      <FnSwitchNew v-model="value2" />
    </div>
  </div>
</template>
