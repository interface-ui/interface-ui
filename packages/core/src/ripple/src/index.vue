<script lang="ts" setup>
import {
  getCurrentInstance,
  onMounted,
  onUnmounted,
  reactive,
  watchEffect,
} from 'vue'
import { addUnit, useNamespace } from '@interface-ui/utils'
import { useColor } from '@interface-ui/theme'
import type { RippleStyle } from './ripple'
import { rippleProps } from './ripple'

const props = defineProps(rippleProps)
const ripplesArr = reactive<RippleStyle[]>([])
const parent = getCurrentInstance()?.parent
const ns = useNamespace('ripple')
let bounce: NodeJS.Timeout | null = null
let listener: EventListener | null = null

const $color = useColor(props, 'color')[0].value!
const addRipple = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const size = Math.max(target.clientWidth, target.clientHeight)
  const radius = size / 2

  const x = props.center
    ? target.clientWidth / 2 - radius
    : event.clientX - rect.left - radius
  const y = props.center
    ? target.clientHeight / 2 - radius
    : event.clientY - rect.top - radius
  ripplesArr.push({ x, y, size })
}

const clear = () => {
  if (bounce) {
    clearTimeout(bounce)
    bounce = null
  }
}

watchEffect(() => {
  if (ripplesArr.length > 0) {
    clear()

    bounce = setTimeout(() => {
      ripplesArr.length = 0
      clear()
    }, props.duration * 2)
  }
})

onMounted(() => {
  if (parent) {
    listener = parent.proxy?.$el.addEventListener('mousedown', addRipple)
  }
})
onUnmounted(() => {
  clear()
  if (listener) {
    parent?.proxy?.$el.removeEventListener(listener)
    listener = null
  }
})
defineExpose({ addRipple })
</script>

<template>
  <span :class="[ns.b()]">
    <span
      v-for="(ripple, index) of ripplesArr"
      :key="`ripple_${index}`"
      :style="{
        top: addUnit(ripple.y),
        left: addUnit(ripple.x),
        width: addUnit(ripple.size),
        height: addUnit(ripple.size),
        background: $color,
        animationDuration: `${$props.duration}ms`,
      }"
      :class="[ns.e('span')]"
      class="pressed-state-layer"
    />
  </span>
</template>
