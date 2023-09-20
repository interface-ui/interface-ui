<script lang="ts" setup>
import {
  getCurrentInstance,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watchEffect,
} from 'vue'
import { addUnit } from '@fusion-ui/utils/dom'
import { useRipple } from '@fusion-ui/hooks'
import { useNamespace } from '@fusion-ui/utils/useNamespace'
import type { RippleStyle } from './ripple'
import { rippleProps } from './ripple'

const props = defineProps(rippleProps)
const ripplesArr = reactive<RippleStyle[]>([])
const duration = ref<number>(600)
const parent = getCurrentInstance()?.parent
const ns = useNamespace('ripple')
const { classes } = useRipple(props, ns)
let bounce: NodeJS.Timeout | null = null
let listener: EventListener | null = null

const addRipple = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const size = Math.max(target.clientWidth, target.clientHeight)
  const radius = size / 2

  const x = props.center ? 0 : event.clientX - rect.left - radius
  const y = props.center ? 0 : event.clientY - rect.top - radius
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
    }, duration.value * 4)
  }
})

onMounted(() => {
  if (parent)
    listener = parent.proxy?.$el.addEventListener('mousedown', addRipple)
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

<script lang="ts">
export default {
  name: 'FuRipple',
}
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
      }"
      :class="[ns.e('span'), classes[ns.e('span')]]"
      class="pressed-state-layer"
    />
  </span>
</template>
