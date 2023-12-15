<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { cardActionProps } from './card-action'
import useCss from './index.jss'

const props = defineProps(cardActionProps)
const ns = useNamespace('card-action')
const cssClass = useCss(props)
</script>

<template>
  <div :class="[ns.b(), cssClass]">
    <slot />
  </div>
</template>
