<script setup lang="ts">
import { iconProps } from './icon'
const { icon, color, size } = defineProps(iconProps)
</script>

<template>
  <icon :icon="icon" :color="color" :size="size" />
</template>

<style>
</style>
