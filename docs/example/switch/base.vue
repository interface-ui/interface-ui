<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnSwtich v-model="value" />
    </div>
  </div>
</template>
