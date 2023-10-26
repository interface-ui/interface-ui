<script lang="ts" setup>
import {
  getCurrentInstance,
  onMounted,
  onUnmounted,
  reactive,
  watchEffect,
} from 'vue'
import { addUnit, useNamespace } from '@fusion-ui-vue/utils'
import { useRipple } from '@fusion-ui-vue/hooks'
import { css } from '@fusion-ui-vue/theme'
import type { RippleStyle } from './ripple'
import { rippleProps } from './ripple'

const props = defineProps(rippleProps)
const ripplesArr = reactive<RippleStyle[]>([])
const parent = getCurrentInstance()?.parent
const ns = useNamespace('ripple')
const cssClass = useRipple(props, ns)
let bounce: NodeJS.Timeout | null = null
let listener: EventListener | null = null

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
    // Check if the parent element already has a position
    if (window.getComputedStyle(parent.proxy?.$el).position === 'static') {
      parent.proxy?.$el.classList.add(css`
        position: relative;
      `)
    }
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
  <span :class="[ns.b(), cssClass]">
    <span
      v-for="(ripple, index) of ripplesArr"
      :key="`ripple_${index}`"
      :style="{
        top: addUnit(ripple.y),
        left: addUnit(ripple.x),
        width: addUnit(ripple.size),
        height: addUnit(ripple.size),
      }"
      :class="[ns.e('span')]"
      class="pressed-state-layer"
    />
  </span>
</template>
