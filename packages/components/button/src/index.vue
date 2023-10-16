<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { computed } from 'vue'
import { useButton } from '@fusion-ui-vue/hooks'
import { iconSize } from '@fusion-ui-vue/constants'
import FnRipple from '../../ripple'
import { buttonProps } from './button'

const props = defineProps(buttonProps)
const ns = useNamespace('button')
const cssClass = useButton(props, ns)

const classList = computed(() => {
  const { variant, shape, size } = props
  return [ns.b(), ns.m(size), ns.m(shape), ns.m(variant)]
})
</script>

<template>
  <button :class="[...classList, `title-${props.size}`, cssClass]">
    <slot v-bind="{ size: iconSize[props.size] }" />
    <fn-ripple
      v-if="!props.disableRipple"
      :color="props.variant === 'filled' ? undefined : props.color"
    />
  </button>
</template>
