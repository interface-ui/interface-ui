<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-checkbox v-model="checked" size="small" />
      <fn-checkbox v-model="checked" />
      <fn-checkbox v-model="checked" size="large" />
    </div>
  </div>
</template>
