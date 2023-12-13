<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { progressProps } from './progress'
import CircleProgressBar from './svg/circle.vue'
import LinearProgressBar from './svg/linear.vue'
import useCss from './index.jss'

const props = defineProps(progressProps)
const ns = useNamespace('progress')
const style = useCss(props)
</script>

<template>
  <span :class="[ns.b(), style.cssClass]">
    <circle-progress-bar
      v-if="$props.variant === 'circle'"
      :color="$props.color"
      :radius="style.radius"
      :status="$props.status"
      :value="$props.value"
    />
    <linear-progress-bar
      v-else
      :color="$props.color"
      :status="$props.status"
      :value="$props.value"
    />
  </span>
</template>
