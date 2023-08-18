<script setup lang="ts">
import { computed } from 'vue'
import { cardProps } from './card'

const props = defineProps(cardProps)

const { border, hover } = props

const classList = computed(() => {
  return [
    {
      'has-border': border,
      'has-hover': hover,
    },
  ]
})
</script>

<template>
  <div
    class="fn-card" :class="classList" :style="{
      backgroundColor: props.background,
      width: `${props.width}px`,
    }"
  >
    <div class="fn-card--title">
      <span>
        <slot name="header">
          {{ title }}
        </slot>
      </span>
    </div>
    <div class="fn-card--content">
      <slot>content</slot>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
