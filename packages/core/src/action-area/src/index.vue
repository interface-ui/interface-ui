<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import InRipple from '../../ripple'
import { actionAreaProps } from './action-area'
import useCss from './index.jss'

const props = defineProps(actionAreaProps)
const ns = useNamespace('action-area')
const cssClass = useCss(props)
</script>

<template>
  <props.component
    :class="[ns.b(), $props.disabled ? ns.m('disabled') : '', cssClass]"
  >
    <slot />
    <in-ripple v-if="!$props.disabled" color="onSurface" />
  </props.component>
</template>
