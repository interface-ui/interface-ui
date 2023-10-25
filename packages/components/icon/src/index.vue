<script setup lang="ts">
import { Icon as iconCom } from 'fusion-ui-iconify/dist/dist.mjs'
import { useColor } from '@fusion-ui-vue/theme'
import { useNamespace } from '@fusion-ui-vue/utils'
import { iconProps } from './icon'

const { icon, color, size } = defineProps(iconProps)
const $color = useColor(color as any)
const ns = useNamespace('icon')
</script>

<template>
  <icon-com :class="ns.b()" :icon="icon" :color="$color" :size="size" />
</template>
