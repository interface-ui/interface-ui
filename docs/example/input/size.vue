<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <div space-y-2>
    <div fscw gap-5>
      <fn-input v-model="value" prefix-icon="iconamoon:search-fill" size="small" placeholder="Please input" />
      <fn-input v-model="value" placeholder="Please input" prefix-icon="iconamoon:search-fill" />
      <fn-input v-model="value" size="large" placeholder="Please input" prefix-icon="iconamoon:search-fill" />
    </div>
  </div>
</template>
