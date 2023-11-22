<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import FnRipple from '../../ripple'
import { actionAreaProps } from './action-area'
import useCss from './index.jss'

const props = defineProps(actionAreaProps)
const ns = useNamespace('action-area')
const cssClass = useCss(props)
</script>

<template>
  <component
    :is="$props.component"
    :class="[
      ns.b(),
      $props.disabled ? ns.m('disabled') : '',
      $props.highlight ? ns.m('highlight') : '',
      cssClass,
    ]"
  >
    <slot />
    <fn-ripple v-if="!$props.disabled" color="onSurface" />
  </component>
</template>
