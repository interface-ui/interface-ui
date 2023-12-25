<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div fscw gap-5 flex-nowrap>
    <in-text-field
      v-model="value"
      error
      label="Outlined"
      supporting-text="Some detail information"
    />
    <in-text-field
      v-model="value"
      error
      variant="filled"
      label="Filled"
      supporting-text="Some detail information"
    />
    <in-text-field
      v-model="value"
      error
      variant="standard"
      label="Standard"
      supporting-text="Some detail information"
    />
  </div>
</template>
