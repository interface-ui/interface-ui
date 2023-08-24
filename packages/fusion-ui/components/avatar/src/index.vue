<script setup lang="ts">
import { computed, ref, useSlots, watch } from 'vue'
import type { CSSProperties } from 'vue'
import { addUnit } from '../../../utils/dom'
import { isString } from '../../../utils/types'
import { useNamespace } from '../../../utils/useNamespace'
import { avatarEmits, avatarProps } from './avatar'

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)
const defaultSlot = useSlots().default

const ns = useNamespace('avatar')
const hasError = ref(false)

const avatarClassList = computed(() => {
  const { size, shape } = props
  const classList = [ns.b()]
  if (isString(size))
    classList.push(ns.m(size))
  if (isString(shape))
    classList.push(ns.m(shape))
  return classList
})

const sizeStyle = computed(() => {
  const { size } = props
  if (size) {
    const style = ns.cssVarBlock({
      size: addUnit(size),

    }) as CSSProperties
    return style
  }
  // if (isNumber(size)) {
  const style = ns.cssVar2({
    width: `${props.width}px`,
    height: `${props.height}px`,
  }) as CSSProperties
  return style
  // }

  // else { return {} }
})

const bgColorStyle = computed(() => {
  const { type } = props
  if (defaultSlot && isString(type)) {
    const style = ns.cssVarBlock({
      'background-color': props.background as string,
      'text-color': props.color,
      // 'bg-color': ns.getCssVarBlock(props.type, 'color'),
      // 'test': ns.getCssVarBlock('1', '2'),
    }) as CSSProperties
    return style
  }
  else {
    return {}
  }
})

const fitStyle = computed<CSSProperties>(() => ({
  objectFit: props.fit,
}))

watch(
  () => props.src,
  () => (hasError.value = false),
)

const handleError = (e: Event) => {
  hasError.value = true
  emit('error', e)
}
</script>

<template>
  <div
    :style="{ ...sizeStyle, ...bgColorStyle }"
    :class="avatarClassList"
  >
    <img
      v-if="(src || srcSet) && !hasError"
      :src="src"
      :srcset="srcSet"
      :alt="alt"
      :style="fitStyle"
      @error="handleError"
    >
    <slot v-else />
  </div>
</template>
