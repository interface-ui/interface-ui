<script setup lang="ts">
import type { componentSizes } from '@fusion-ui-vue/constants'
import { ref } from 'vue'

const value = ref<boolean[]>([true, false, true])
const sizes = ref<typeof componentSizes>(['small', 'medium', 'large'])
</script>

<template>
  <div v-for="size in sizes" :key="size" w-full flex justify-center gap-5>
    <fn-switch v-model="value[0]" :size="size" />
    <fn-switch v-model="value[1]" :size="size" color="tertiary" />
    <fn-switch v-model="value[2]" :size="size" color="error" />
  </div>
</template>
