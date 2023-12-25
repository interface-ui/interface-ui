<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <in-checkbox v-model="checked" size="small" />
      <in-checkbox v-model="checked" />
      <in-checkbox v-model="checked" size="large" />
    </div>
  </div>
</template>
