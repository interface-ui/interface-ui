<script lang="ts" setup>
import { useNamespace } from '@fusion-ui/utils/useNamespace'
import { computed } from 'vue'
import { useButton } from '@fusion-ui/hooks'
import FnRipple from '../../ripple'
import { buttonProps } from './button'

const props = defineProps(buttonProps)
const ns = useNamespace('button')
const { classes } = useButton(props, ns)

const classList = computed(() => {
  const { variant, shape, size, disableElevation } = props
  const classList = [ns.b(), ns.m(size), ns.m(shape), ns.m(variant)]
  disableElevation && classList.push(ns.m('no-elevation'))
  return classList
})
</script>

<script lang="ts">
export default {
  name: 'FnButton',
}
</script>

<template>
  <button
    :class="[
      ...classList,
      `title-${props.size}`,
      classes[ns.b()],
      classes[ns.m(props.variant)],
    ]"
  >
    <slot name="icon" />
    <slot />
    <fn-ripple
      v-if="!props.disableRipple"
      :color="props.variant === 'filled' ? undefined : props.color"
    />
  </button>
</template>
