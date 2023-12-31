<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import InButtonBase from '../../button-base'
import InRipple from '../../ripple'
import { fbaProps } from './fba'
import useCss from './index.jss'

const props = defineProps(fbaProps)
const ns = useNamespace('fba')
const cssClass = useCss(props, ns)
</script>

<template>
  <in-button-base
    :class="[ns.b(), ns.m($props.size), `title-${$props.size}`, cssClass]"
  >
    <slot />
    <in-ripple color="var(--in-sys-color-switch-reverse)" />
  </in-button-base>
</template>
