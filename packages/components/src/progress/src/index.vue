<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { progressProps } from './progress'
import CircularProgressBar from './svg/circular.vue'
import LinearProgressBar from './svg/linear.vue'
import useCss from './index.jss'

const props = defineProps(progressProps)
const ns = useNamespace('progress')
const style = useCss(props)
</script>

<template>
  <span :class="[ns.b(), style.cssClass]">
    <circular-progress-bar
      v-if="$props.variant === 'circular'"
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
