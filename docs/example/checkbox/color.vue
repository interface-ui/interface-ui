<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref<boolean>(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <in-checkbox v-model="checked" />
      <in-checkbox v-model="checked" color="secondary" />
      <in-checkbox v-model="checked" color="tertiary" />
      <in-checkbox v-model="checked" color="error" />
      <in-checkbox v-model="checked" :color="theme => theme.colors.cyan[400]" />
      <in-checkbox v-model="checked" color="#2E7D32" />
    </div>
  </div>
</template>
