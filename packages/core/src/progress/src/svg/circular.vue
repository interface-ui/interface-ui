<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { computed } from 'vue'
import InSvgIcon from '../../../svg-icon'
import { progressCircleSvgProps } from './props'

const props = defineProps(progressCircleSvgProps)
defineOptions({ inheritAttrs: false })
const ns = useNamespace('progress')

const size = computed(() => ((props.radius ?? 22) + 2) * 2)
const circles = computed<string[]>(() =>
  props.status === 'indeterminate'
    ? [ns.em('circular', 'left-track'), ns.em('circular', 'right-track')]
    : [ns.em('circular', 'active-track')]
)
const strokeDashoffset = computed(() => {
  if (props.status === 'indeterminate' || props.value === undefined) {
    return undefined
  }
  return 2 * Math.PI * (props.radius ?? 22) * (1 - +props.value / 100)
})
</script>

<template>
  <in-svg-icon :size="size">
    <svg viewBox="0 0 48 48" :class="[ns.e('circular'), ns.m($props.status)]">
      <circle
        v-for="circle in circles"
        :key="circle"
        :class="circle"
        :r="$props.radius"
        :stroke-dashoffset="strokeDashoffset"
        cx="50%"
        cy="50%"
        fill="none"
        stroke-width="4"
      />
    </svg>
  </in-svg-icon>
</template>
