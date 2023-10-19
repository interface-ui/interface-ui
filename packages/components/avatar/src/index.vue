<script setup lang="ts">
import { computed, defineComponent, useAttrs } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { css, useColor } from '@fusion-ui-vue/theme'
import { avatarProps } from './avatar'

const props = defineProps(avatarProps)
const ns = useNamespace('avatar')

const backgroundColor = useColor(props.backgroundColor)
const textColor = useColor(props.color)

const cssClass = computed(
  () => css`
    height: ${props.size}px;
    width: ${props.size}px;
    background-color: ${backgroundColor.value};
    color: ${textColor.value};
  `
)
const { class: classAttr, ...restAttrs } = useAttrs()
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
})
</script>

<template>
  <div :class="[classAttr, ns.b(), ns.m(props.variant), cssClass]">
    <slot>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img v-bind="restAttrs" />
    </slot>
  </div>
</template>
