<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnSwtich v-model="value" color="#74b744" />
      <FnSwtich v-model="value" color="#86888e" />
      <FnSwtich v-model="value" color="#d69c44" />
      <FnSwtich v-model="value" color="#df6c64" />
    </div>
  </div>
</template>
