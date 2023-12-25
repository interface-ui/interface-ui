<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import InTypography from '../../typography'
import { listItemHeaderProps } from './list-item-header'
import useCss from './index.jss'

const props = defineProps(listItemHeaderProps)
defineOptions({ inheritAttrs: false })
const ns = useNamespace('list-item-header')
const cssClass = useCss(props)
</script>

<template>
  <li :class="[ns.b(), cssClass]">
    <in-typography v-bind="$attrs" variant="label.medium" cs="opacity: 0.8;">
      <slot />
    </in-typography>
  </li>
</template>
