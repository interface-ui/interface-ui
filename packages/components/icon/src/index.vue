<script setup lang="ts">
import { Icon as iconCom } from 'fusion-ui-iconify/dist/dist.mjs'
import { useColor } from '@fusion-ui-vue/theme'
import { useNamespace } from '@fusion-ui-vue/utils'
import { iconProps } from './icon'

const props = defineProps(iconProps)
const $color = useColor(props, 'color')
const ns = useNamespace('icon')
</script>

<template>
  <icon-com
    :class="ns.b()"
    :icon="props.icon"
    :color="$color"
    :size="props.size"
  />
</template>
