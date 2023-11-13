<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import FnButtonBase from '../../button-base'
import FnRipple from '../../ripple'
import { fbaProps } from './fba'
import useCss from './index.jss'

const props = defineProps(fbaProps)
const ns = useNamespace('fba')
const cssClass = useCss(props)
</script>

<template>
  <fn-button-base :class="[ns.b(), ns.m($props.size), cssClass]">
    <slot />
    <fn-ripple color="var(--fn-sys-color-switch-reverse)" />
  </fn-button-base>
</template>
