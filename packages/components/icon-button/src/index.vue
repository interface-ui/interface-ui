<script lang="ts" setup>
import { iconSize } from '@fusion-ui-vue/constants'
import { useNamespace } from '@fusion-ui-vue/utils'
import FnButtonBase from '../../button-base'
import FnRipple from '../../ripple'
import { iconButtonProps } from './icon-button'
import useCss from './index.jss'

const props = defineProps(iconButtonProps)
const ns = useNamespace('icon-button')

const cssClass = useCss(props, ns)
</script>

<template>
  <fn-button-base :class="[ns.b(), ns.m($props.size), cssClass]">
    <slot
      v-bind="{
        size: iconSize[$props.size!],
        color: $props.color,
      }"
    />
    <fn-ripple :color="$props.color" center />
  </fn-button-base>
</template>
