<script lang="ts" setup>
import { computed } from 'vue'
import { iconSize } from '@fusion-ui-vue/constants'
import { useNamespace } from '@fusion-ui-vue/utils'
import { css, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import FnRipple from '../../ripple'
import { iconButtonProps } from './icon-button'

const props = defineProps(iconButtonProps)
const ns = useNamespace('icon-button')
const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')
const $colorRgb = useRgbColor(props, 'color', 'var(--md-sys-color-primary-rgb)')

const cssClass = computed(
  () => css`
    --fn-icon-button-color: ${$color.value};
    --fn-icon-button-color-rgb: ${$colorRgb.value};
  `
)
</script>

<template>
  <component :is="$props.component" :class="[ns.b(), cssClass]">
    <slot
      v-bind="{
        size: iconSize[props.size],
        color: props.color,
      }"
    />
    <fn-ripple :color="props.color" center />
  </component>
</template>
