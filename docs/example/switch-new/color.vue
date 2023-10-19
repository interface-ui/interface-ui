<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnSwitchNew v-model="checked" color="secondary" />
      <FnSwitchNew v-model="checked" color="tertiary" />
      <FnSwitchNew v-model="checked" color="error" />
      <FnSwitchNew v-model="checked" :color="(theme) => theme.colors.cyan[400]" />
    </div>
  </div>
</template>
