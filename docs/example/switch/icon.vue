<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnSwtich v-model="value" checked-icon="mdi:check-outline" un-checked-icon="mdi:close-outline" />
      <FnSwtich v-model="value" checked-icon="mdi:check-outline" checked-icon-color="yellow" un-checked-icon-color="deeppink" un-checked-icon="mdi:close-outline" />
      <FnSwtich v-model="value" checked-icon="noto:fire-extinguisher" un-checked-icon="noto:fire" />
    </div>
  </div>
</template>
