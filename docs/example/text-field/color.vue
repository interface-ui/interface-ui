<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div fscw gap-5 flex-nowrap>
    <fn-text-field v-model="value" color="tertiary" label="Outlined" />
    <fn-text-field
      v-model="value"
      color="#2E7D32"
      variant="filled"
      label="Filled"
    />
    <fn-text-field
      v-model="value"
      :color="theme => theme.colors.cyan[400]"
      variant="standard"
      label="Standard"
    />
  </div>
</template>
