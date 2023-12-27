<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import InTypography from '../../typography'
import { dialogHeaderProps } from './dialog-header'
import useCss from './index.jss'

const props = defineProps(dialogHeaderProps)
const ns = useNamespace('dialog-header')
const cssClass = useCss(props)
</script>

<template>
  <div :class="[ns.b(), cssClass]">
    <slot name="leading" />
    <in-typography variant="h6" component="h2" :class="[ns.m('title')]">
      <slot />
    </in-typography>

    <slot name="action" />
  </div>
</template>
