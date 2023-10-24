<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div fscw gap-5 flex-nowrap>
    <fn-text-field v-model="value" label="Outlined" />
    <fn-text-field v-model="value" variant="filled" label="Filled" />
    <fn-text-field v-model="value" variant="standard" label="Standard" />
  </div>
</template>
