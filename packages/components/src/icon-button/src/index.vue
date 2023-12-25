<script lang="ts" setup>
import { iconSize } from '@interface-ui/constants'
import { useNamespace } from '@interface-ui/utils'
import InButtonBase from '../../button-base'
import InRipple from '../../ripple'
import { iconButtonProps } from './icon-button'
import useCss from './index.jss'

const props = defineProps(iconButtonProps)
const ns = useNamespace('icon-button')

const cssClass = useCss(props, ns)
</script>

<template>
  <in-button-base :class="[ns.b(), ns.m($props.size), cssClass]">
    <slot
      v-bind="{
        size: iconSize[$props.size!],
        color: $props.color,
      }"
    />
    <in-ripple :color="$props.color" center />
  </in-button-base>
</template>
