<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
const value4 = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnSwitchNew v-model="value1" />
      <FnSwitchNew v-model="value2" />
      <FnSwitchNew v-model="value3" disabled />
      <FnSwitchNew v-model="value4" disabled />
    </div>
  </div>
</template>
