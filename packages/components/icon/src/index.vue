<script setup lang="ts">
import { Icon as iconCom } from 'fusion-ui-iconify/dist/dist.mjs'
import { iconProps } from './icon'
const { icon, color, size } = defineProps(iconProps)
</script>

<template>
  <icon-com :icon="icon" :color="color" :size="size" />
</template>

<style>
</style>
