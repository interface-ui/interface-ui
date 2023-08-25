<script lang="ts" setup>
import { reactive, watchEffect, onUnmounted, ref } from 'vue'
import { RippleStyle, rippleProps } from './ripple'
const props = defineProps(rippleProps)

const ripplesArr = reactive<RippleStyle[]>([])
const duration = ref<number>(600)
let bounce: NodeJS.Timeout | null = null

const handleMouseDown = (event: MouseEvent) => {
  const target = <HTMLElement>event.currentTarget
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

onUnmounted(clear)
</script>

<script lang="ts">
export default {
  name: 'FuRipple',
}
</script>

<template>
  <span class="fn-ripple-root" @mousedown="handleMouseDown">
    <span
      v-for="(ripple, index) of ripplesArr"
      :key="`ripple_${index}`"
      :style="{
        top: `${ripple.y}px`,
        left: `${ripple.x}px`,
        width: `${ripple.size}px`,
        height: `${ripple.size}px`,
        '--fn-ripple-color': props.color,
      }"
      class="fn-ripple"
    ></span>
  </span>
</template>
