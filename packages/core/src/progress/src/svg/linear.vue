<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { computed } from 'vue'
import { progressCircleSvgProps } from './props'

const props = defineProps(progressCircleSvgProps)
const ns = useNamespace('progress')

const style = computed(() =>
  props.status === 'determinate'
    ? {
        width: `${props.value ?? 0}%`,
      }
    : {}
)
</script>

<template>
  <span
    :class="[ns.e('linear'), ns.em('linear', 'track'), ns.m($props.status)]"
  >
    <span :class="[ns.em('linear', 'indicator')]" :style="style" />
  </span>
</template>
