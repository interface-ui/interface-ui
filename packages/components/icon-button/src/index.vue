<script lang="ts" setup>
import { iconSize } from '@fusion-ui-vue/constants'
import { useNamespace } from '@fusion-ui-vue/utils'
import { useIconButton } from '@fusion-ui-vue/hooks'
import FnRipple from '../../ripple'
import { iconButtonProps } from './icon-button'

const props = defineProps(iconButtonProps)
const ns = useNamespace('icon-button')
const cssClass = useIconButton(props, ns)
</script>

<template>
  <button :class="[ns.b(), cssClass]">
    <slot
      v-bind="{
        size: iconSize[props.size],
        color: props.color,
        class: cssClass,
      }"
    />
    <fn-ripple :color="props.color" center />
  </button>
</template>
