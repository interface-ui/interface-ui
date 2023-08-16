<script lang="ts" setup>
import { computed } from 'vue'
import { UseProgress } from '../../_hooks'
import { progressProps } from '../src/progress'
const props = defineProps(progressProps)
const progerssValue = computed(() => {
  if (typeof props.percentage !== 'number')
    return 0
  return props.percentage > 100 ? 100 : props.percentage < 0 ? 0 : props.percentage
})

const circleSize = props.width || 120

const radius = computed(() => {
  return (circleSize - props.strokeWidth) / 2
})
const name = 'fn-progress'

const cx = circleSize / 2
const cy = circleSize / 2
const circumference = 2 * Math.PI * radius.value

/**
 * @description: circle progress
 * 获取角度
 */
const cirCleprogress = computed(() => {
  if (typeof props.percentage !== 'number') {
    return 0
  }
  else {
    const value = props.percentage > 100 ? 100 : props.percentage < 0 ? 0 : props.percentage
    return (1 - (Number(value)) / 100) * circumference
  }
})

const status = new Map([
  ['success', 'mdi:success-circle-outline'],
  ['danger', 'fluent-mdl2:error-badge'],
  ['warning', 'jam:triangle-danger-f'],
  ['info', 'info'],
])

const isKnown = computed((): string => {
  if (props.intermediate)
    return 'bar-intermediate'
  return ''
})

const isStriped = computed((): string => {
  let stripedClass = ''
  if (props.striped) {
    stripedClass += 'fn-progress-bar-striped '
    if (props.stripedFlow)
      stripedClass += 'fn-progress-bar-is-flow'
  }
  return stripedClass
})

const statusColor = new Map([
  ['success', '#67c23a'],
  ['danger', '#f56c6c'],
  ['warning', '#e6a23c'],
  ['info', '#909399'],
])

const getIcon = computed(() => {
  if (!props.status)
    return ''
  return status.get(props.status)
})
const getIconColor = computed(() => {
  if (!props.status)
    return ''
  return statusColor.get(props.status)
})
const { styleList, styleListCircle } = UseProgress(props)
</script>

<template>
  <!-- line -->
  <div v-if="props.type === 'line'" :class="`${name} ${name}-line`" :style="styleList">
    <!-- text-inner -->
    <div :class="`${name}-bar-out`">
      <div :class="[`${name}-bar ${isKnown} ${isStriped}`]" />
      <div v-show="props.textInside" :class="`${name}-text-inner`">
        {{ progerssValue }}%
      </div>
    </div>

    <!-- text-out -->
    <div v-show="!props.textInside" :class="`${name}-text`">
      <span v-show="!props.status && !props.intermediate" :class="`${name}-text-out`">
        {{ progerssValue }}%
      </span>

      <span v-show="props.status" style="margin-left: 5px;">
        <fn-icon :icon="getIcon" :color="getIconColor" />
      </span>
    </div>
  </div>

  <!-- circle -->
  <div v-if="props.type === 'circle'" class="fn-progress circle-progress" :style="styleListCircle">
    <div class="circle-content" :style="`width:${circleSize}px;height: ${circleSize}px;`">
      <svg width="circleSize" :height="circleSize" class="circle">
        <circle
          :r="radius"
          :cx="cx"
          :cy="cy"
          fill="transparent"
          :stroke="props.background"
          :stroke-width="props.strokeWidth"
        />
        <circle
          :r="radius"
          :cx="cx"
          :cy="cy"
          fill="transparent"
          :stroke="props.color"
          :stroke-width="props.strokeWidth"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="cirCleprogress"
        />
      </svg>
      <span class="count-num" :style="[{ 'font-size': `${circleSize * .3}px` }]">
        <span v-if="$slots.default">
          <slot />
        </span>
        <span v-else>
          {{ props.percentage }}%
        </span>
      </span>
    </div>
  </div>
</template>
