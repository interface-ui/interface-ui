<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <in-text-field v-model="value" label="Outlined" placeholder="Placeholder" />
  <in-text-field
    v-model="value"
    variant="filled"
    label="Filled"
    placeholder="Placeholder"
  />
  <in-text-field
    v-model="value"
    variant="standard"
    label="Standard"
    placeholder="Placeholder"
  />
</template>
