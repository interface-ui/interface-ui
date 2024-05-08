<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import InTypography from '../../typography'
import { linkProps } from './link'
import useCss from './index.jss'

const props = defineProps(linkProps)
const ns = useNamespace('link')
const cssClass = useCss(props, ns)
</script>

<template>
  <in-typography
    :component="$props.component"
    :class="[ns.b(), ns.m(`underline-${$props.underline}`), cssClass]"
    :color="$props.color"
  >
    <slot />
  </in-typography>
</template>
