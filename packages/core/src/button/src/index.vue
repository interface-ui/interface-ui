<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { computed } from 'vue'
import { iconSize } from '@interface-ui/constants'
import InButtonBase from '../../button-base'
import InRipple from '../../ripple'
import { buttonProps, textMapping } from './button'
import useCss from './index.jss'

const props = defineProps(buttonProps)
const ns = useNamespace('button')
const cssClass = useCss(props, ns)

const classList = computed(() => {
  const { variant, shape, size } = props
  return [ns.b(), ns.m(size), ns.m(shape), ns.m(variant)]
})
</script>

<template>
  <in-button-base :class="[...classList, textMapping[$props.size!], cssClass]">
    <slot v-bind="{ size: iconSize[props.size] }" />
    <in-ripple
      v-if="!props.disableRipple"
      :color="props.variant === 'filled' ? undefined : props.color"
    />
  </in-button-base>
</template>
