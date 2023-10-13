<script setup lang="ts">
import { Icon as iconCom } from 'fusion-ui-iconify/dist/dist.mjs'
import { useColor } from '@fusion-ui-vue/theme'
import { iconProps } from './icon'
const { icon, color, size } = defineProps(iconProps)

const $color = color ? useColor(color).value : color
</script>

<template>
  <icon-com :icon="icon" :color="$color" :size="size" />
</template>
