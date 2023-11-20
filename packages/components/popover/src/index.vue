<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { nextTick, ref, watch } from 'vue'
import FnModal from '../../modal'
import type { PopoverPlacements } from './popover'
import { popoverProps } from './popover'
import useCss from './index.jss'

const props = defineProps(popoverProps)
defineEmits<{
  'update:modelValue': [value: boolean]
  close: [void]
}>()
defineOptions({ inheritAttrs: false })
const ns = useNamespace('popover')
const popoverRef = ref<HTMLElement | null>(null)
const style = ref({ top: '0', left: '0', transformOrigin: 'top left' })

const cssClass = useCss(props)
const DEFAULT_PLACEMENT: PopoverPlacements = { x: 'left', y: 'bottom' }

const calculatePosition = (anchor: HTMLElement) => {
  if (!popoverRef.value) {
    return
  }
  const offset = 8

  const { placement } = props
  let { x, y } = { ...DEFAULT_PLACEMENT, ...placement }
  const { top, left, width, height } = anchor.getBoundingClientRect()
  const popoverWidth = popoverRef.value.offsetWidth
  const popoverHeight = popoverRef.value.offsetHeight
  const { innerWidth, innerHeight } = window

  if (x === 'left') {
    if (innerWidth - left < popoverWidth) {
      x = 'right'
    }
  } else if (x === 'right') {
    if (left + width < popoverWidth) {
      x = 'left'
    }
  } else {
    if (left + width / 2 < popoverWidth / 2) {
      x = 'right'
    } else if (innerWidth - left - width / 2 < popoverWidth / 2) {
      x = 'left'
    }
  }

  if (y === 'top') {
    if (top < popoverHeight) {
      y = 'bottom'
    }
  } else {
    if (innerHeight - top - height < popoverHeight) {
      y = 'top'
    }
  }

  const position = { top: 0, left: 0 }
  if (x === 'left') {
    position.left = left
  } else if (x === 'right') {
    position.left = left + width - popoverWidth
  } else {
    position.left = left + width / 2 - popoverWidth / 2
  }

  if (y === 'top') {
    position.top = top - popoverHeight - offset
  } else {
    position.top = top + height + offset
  }

  style.value = {
    top: `${position.top}px`,
    left: `${position.left}px`,
    transformOrigin: `${x} ${y === 'top' ? 'bottom' : 'top'}`,
  }
}

watch(
  () => props.open,
  newVal => {
    if (newVal) {
      nextTick(() => calculatePosition(props.anchor as HTMLElement))
    }
  }
)
</script>

<template>
  <fn-modal
    :model-value="$props.open"
    :backdrop="$props.backdrop"
    @click="$emit('close')"
  >
    <div
      ref="popoverRef"
      v-bind="$attrs"
      :class="[ns.b(), cssClass, $props.open ? ns.m('open') : ns.m('close')]"
      :style="style"
      @click.stop
    >
      <slot />
    </div>
  </fn-modal>
</template>
