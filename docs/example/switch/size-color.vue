<script setup lang="ts">
import type { componentSizes } from '@interface-ui/core'
import { ref } from 'vue'

const value = ref<boolean[]>([true, false, true])
const sizes = ref<typeof componentSizes>(['small', 'medium', 'large'])
</script>

<template>
  <div v-for="size in sizes" :key="size" w-full flex justify-center gap-5>
    <in-switch v-model="value[0]" :size="size" />
    <in-switch v-model="value[1]" :size="size" color="tertiary" />
    <in-switch v-model="value[2]" :size="size" color="error" />
  </div>
</template>
