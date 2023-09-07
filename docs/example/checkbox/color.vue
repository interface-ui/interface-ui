<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref<boolean>(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-checkbox v-model="checked" />
      <fn-checkbox v-model="checked" color="secondary" />
      <fn-checkbox v-model="checked" color="tertiary" />
      <fn-checkbox v-model="checked" color="error" />
      <fn-checkbox v-model="checked" color="#2E7D32" />
    </div>
  </div>
</template>
