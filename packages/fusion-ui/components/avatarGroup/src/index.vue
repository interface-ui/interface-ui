<script setup lang="ts">
import { isString } from '@vue/shared'
import type { VNode } from 'vue'
import { computed, onMounted, ref, useSlots } from 'vue'
import { useNamespace } from '../../../utils/useNamespace'
import { avatarGroupProps } from './avatar-group'

const props = defineProps(avatarGroupProps)
const defaultSlot = useSlots().default as () => VNode[]

const renderMax = ref(false)
const ns = useNamespace('avatar-group')

const displayedAvatars = computed(() => {
  if (props.total) {
    return props.total
  }
  else {
    const { max } = props
    if (isString(max))
      return defaultSlot?.().length - Number(max)
    else
      return 0
  }
})

onMounted(() => {
  const { max } = props
  if (props.total)
    renderMax.value = true
  if (isString(max)) {
    if (defaultSlot?.().length > Number(max))
      renderMax.value = true
  }
})

const avatarGroupClassList = computed(() => {
  const classList = [ns.b()]

  return classList
})
</script>

<template>
  <div
    :class="avatarGroupClassList"
  >
    <fnAvatar v-if="renderMax" type="primary" background="rgb(103, 58, 183)">
      +{{ displayedAvatars }}
    </fnAvatar>

    <slot />
  </div>
</template>
