<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { buttonBaseProps } from './button-base'
import useCss from './index.jss'

const props = defineProps(buttonBaseProps)
const ns = useNamespace('button-base')
const cssClass = useCss(props)
</script>

<template>
  <props.component :class="[ns.b(), cssClass]">
    <slot />
  </props.component>
</template>
