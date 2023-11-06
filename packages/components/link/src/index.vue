<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import FnTypography from '../../typography'
import { linkProps } from './link'
import useCss from './index.jss'

const props = defineProps(linkProps)
const ns = useNamespace('link')
const cssClass = useCss(props)
</script>

<template>
  <fn-typography
    component="a"
    :class="[ns.b(), ns.m(`underline-${$props.underline}`), cssClass]"
    :color="$props.color"
  >
    <slot />
  </fn-typography>
</template>
