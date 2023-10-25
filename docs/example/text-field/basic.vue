<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div fscw gap-5 flex-nowrap>
    <fn-text-field v-model="value" label="Outlined" placeholder="Placeholder" />
    <fn-text-field
      v-model="value"
      variant="filled"
      label="Filled"
      placeholder="Placeholder"
    />
    <fn-text-field
      v-model="value"
      variant="standard"
      label="Standard"
      placeholder="Placeholder"
    />
  </div>
</template>
