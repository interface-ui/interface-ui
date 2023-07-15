<script setup lang="ts">
import { iconProps } from './icon'
const { name, color, size } = defineProps(iconProps)
</script>

<template>
  <Icon :icon="name" :color="color" :size="size" />
</template>

<style>
</style>
