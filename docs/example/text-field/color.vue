<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div fscw gap-5 flex-nowrap>
    <in-text-field v-model="value" color="tertiary" label="Tertiary" />
    <in-text-field
      v-model="value"
      color="#2E7D32"
      variant="filled"
      label="Custom Color"
    />
    <in-text-field
      v-model="value"
      :color="theme => theme.colors.cyan[400]"
      variant="standard"
      label="Theme Color"
    />
  </div>
</template>
