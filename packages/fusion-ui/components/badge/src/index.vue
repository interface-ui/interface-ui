<script lang="ts" setup>
import { computed } from 'vue'
import { UseBadge } from '../../_hooks'
import { badgeProps } from './badge'
const props = defineProps(badgeProps)
const { classList, styleList } = UseBadge(props)

const supValue = computed<string>(() => {
  if (props.dot)
    return ''
  // 如果大于显示最大值+，否则显示当前值
  const displayValue = Number(props.max)
    ? (
        Number(props.max) < Number(props.value) ? `${props.max}+` : props.value
      )
    : props.value

  return `${displayValue}`
})
</script>

<template>
  <div :class="classList" :style="styleList">
    <slot />
    <sup class="badge__content" v-text="supValue" />
  </div>
</template>
