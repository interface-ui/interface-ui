<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import InModal from '../../modal'
import type { DialogEmits } from './dialog'
import { dialogProps } from './dialog'
import useCss from './index.jss'

const props = defineProps(dialogProps)
defineEmits<DialogEmits>()
defineOptions({ inheritAttrs: false })
const ns = useNamespace('dialog')
const cssClass = useCss(props)
</script>

<template>
  <in-modal
    :keep-mounted="$props.keepMounted"
    :model-value="$props.open"
    :backdrop="$props.backdrop"
    @click="$emit('close')"
  >
    <div :class="[ns.m('container')]">
      <div v-bind="$attrs" :class="[ns.b(), ns.m($props.variant), cssClass]">
        <slot />
      </div>
    </div>
  </in-modal>
</template>
