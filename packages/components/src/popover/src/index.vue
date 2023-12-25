<script lang="ts" setup>
import { off, on, throttle, useNamespace } from '@interface-ui/utils'
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import InModal from '../../modal'
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
const style = ref({
  top: '0',
  left: '0',
  transformOrigin: 'top left',
  minWidth: '0',
})

const cssClass = useCss(props)
const DEFAULT_PLACEMENT: PopoverPlacements = { x: 'left', y: 'bottom' }

const calculateStyleFromAnchor = (anchor: HTMLElement) => {
  if (!popoverRef.value) {
    return
  }
  if (!props.anchor) {
    return
  }

  const { placement } = props
  let { x, y } = { ...DEFAULT_PLACEMENT, ...placement }
  const { top, left, width, height } = anchor.getBoundingClientRect()
  const popoverWidth = Math.max(popoverRef.value.offsetWidth, width)
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
    position.top = top - popoverHeight
  } else {
    position.top = top + height
  }

  style.value = {
    top: `${position.top}px`,
    left: `${position.left}px`,
    transformOrigin: `${x} ${y === 'top' ? 'bottom' : 'top'}`,
    minWidth: `${width}px`,
  }
}

const calculateStyleFromEvent = (e: MouseEvent) => {
  if (!popoverRef.value) {
    return
  }

  const { placement } = props
  let { x, y } = { ...DEFAULT_PLACEMENT, ...placement }
  const { x: left, y: top } = e

  const popoverWidth = popoverRef.value.offsetWidth
  const popoverHeight = popoverRef.value.offsetHeight
  const { innerWidth, innerHeight } = window

  if (x === 'center') {
    x = 'right'
  }
  if (x === 'left') {
    if (left < popoverWidth) {
      x = 'right'
    }
  } else {
    if (innerWidth - left < popoverWidth) {
      x = 'left'
    }
  }

  if (y === 'top') {
    if (top < popoverHeight) {
      y = 'bottom'
    }
  } else {
    if (innerHeight - top < popoverHeight) {
      y = 'top'
    }
  }

  const position = { top: 0, left: 0 }
  if (x === 'left') {
    position.left = left - popoverWidth
  } else {
    position.left = left
  }

  if (y === 'top') {
    position.top = top - popoverHeight
  } else {
    position.top = top
  }

  style.value = {
    top: `${position.top}px`,
    left: `${position.left}px`,
    transformOrigin: `${x === 'left' ? 'right' : 'left'} ${
      y === 'top' ? 'bottom' : 'top'
    }`,
    minWidth: `${popoverWidth}px`,
  }
}

const pageChange = throttle(() => {
  calculateStyleFromAnchor(props.anchor as HTMLElement)
}, 10)

onBeforeUnmount(() => {
  off(window, 'scroll', pageChange)
  off(window, 'resize', pageChange)
})

watch(
  () => props.open,
  newVal => {
    if (newVal) {
      nextTick(() => {
        on(window, 'scroll', pageChange)
        on(window, 'resize', pageChange)
        props.anchor instanceof HTMLElement
          ? calculateStyleFromAnchor(props.anchor as HTMLElement)
          : calculateStyleFromEvent(props.anchor as MouseEvent)
      })
    } else {
      off(window, 'scroll', pageChange)
      off(window, 'resize', pageChange)
    }
  }
)
</script>

<template>
  <in-modal
    :keep-mounted="$props.keepMounted"
    :model-value="$props.open"
    :backdrop="$props.backdrop"
    @click="$emit('close')"
  >
    <div
      ref="popoverRef"
      v-bind="$attrs"
      :class="[ns.b(), $props.open ? ns.m('open') : ns.m('close'), cssClass]"
      :style="style"
      @click.stop
    >
      <slot />
    </div>
  </in-modal>
</template>
