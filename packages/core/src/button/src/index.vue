<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import InButtonBase from '../../button-base'
import InRipple from '../../ripple'
import { buttonProps, textMapping } from './button'
import useCss from './index.jss'

const props = defineProps(buttonProps)
const ns = useNamespace('button')
const cssClass = useCss(props, ns)
</script>

<template>
  <in-button-base
    :class="[
      ns.b(),
      ns.m($props.size),
      ns.m($props.shape),
      ns.m($props.variant),
      textMapping[$props.size!],
      cssClass,
    ]"
  >
    <slot />
    <in-ripple
      v-if="!$props.disableRipple"
      :color="$props.variant === 'filled' ? undefined : $props.color"
    />
  </in-button-base>
</template>
