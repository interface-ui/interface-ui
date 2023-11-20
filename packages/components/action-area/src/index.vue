<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import FnRipple from '../../ripple'
import { actionAreaProps } from './action-area'

defineProps(actionAreaProps)
const ns = useNamespace('action-area')
</script>

<template>
  <component :is="$props.component" :class="[ns.b()]">
    <slot />
    <fn-ripple v-if="!$attrs.disabled" color="onSurface" />
  </component>
</template>
