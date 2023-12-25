<script setup lang="ts">
import { useNamespace } from '@interface-ui/utils'
import { cardProps } from './card'
import useCss from './index.jss'

const props = defineProps(cardProps)
const ns = useNamespace('card')
const cssClass = useCss(props)
</script>

<template>
  <div :class="[ns.b(), ns.m($props.variant), cssClass]">
    <slot />
  </div>
</template>
