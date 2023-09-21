<script lang="ts" setup>
import { iconSize } from '@fusion-ui/constants'
import { useNamespace } from '@fusion-ui/utils/useNamespace'
import { useIconButton } from '@fusion-ui/hooks'
import FnRipple from '../../ripple'
import { iconButtonProps } from './icon-button'

const props = defineProps(iconButtonProps)
const ns = useNamespace('icon-button')
const { classes } = useIconButton(props, ns)
</script>

<template>
  <button :class="[ns.b(), classes[ns.b()]]">
    <slot v-bind="{ size: iconSize[props.size], color: props.color }" />
    <fn-ripple :color="props.color" />
  </button>
</template>
