<script lang="ts" setup>
import { reactive, watchEffect, onUnmounted } from "vue"
import { RippleLocate } from "./ripple"

const ripplesArr = reactive<RippleLocate[]>([])
let bounce: NodeJS.Timeout | null = null

const handleMouseDown = (event: MouseEvent) => {
  const target = <HTMLElement>event.currentTarget
  const rect = target.getBoundingClientRect()
  const size = Math.max(target.clientWidth, target.clientHeight)
  const radius = size / 2

  const x = event.clientX - rect.left - radius
  const y = event.clientY - rect.top - radius
  ripplesArr.push({ x, y, size })
}

watchEffect(() => {
  if (ripplesArr.length > 0) {
    bounce && clearTimeout(bounce)

    bounce = setTimeout(() => {
      ripplesArr.length = 0
      bounce && clearTimeout(bounce)
      bounce = null
    }, 600 * 4)
  }
})

onUnmounted(() => bounce && clearTimeout(bounce))
</script>

<script lang="ts">
export default {
  name: "FuRipple",
}
</script>

<template>
  <span class="ripple-root" @mousedown="handleMouseDown">
    <span
      v-for="(ripple, index) of ripplesArr"
      :key="`ripple_${index}`"
      :style="{
        top: `${ripple.y}px`,
        left: `${ripple.x}px`,
        width: `${ripple.size}px`,
        height: `${ripple.size}px`,
      }"
      class="ripple"
    ></span>
  </span>
</template>

<style lang="less">
@import "./index.less";
</style>
