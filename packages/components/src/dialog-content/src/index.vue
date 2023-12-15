<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { dialogContentProps } from './dialog-content'
import useCss from './index.jss'

const props = defineProps(dialogContentProps)
const ns = useNamespace('dialog-content')
const cssClass = useCss(props)
</script>

<template>
  <div :class="[ns.b(), cssClass]">
    <slot />
  </div>
</template>
