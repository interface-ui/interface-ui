<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { dialogActionProps } from './dialog-action'
import useCss from './index.jss'

const props = defineProps(dialogActionProps)
const ns = useNamespace('dialog-action')
const cssClass = useCss(props)
</script>

<template>
  <div :class="[ns.b(), cssClass]">
    <slot />
  </div>
</template>
