<script setup lang="ts">
import { computed, ref } from 'vue'
import { useNamespace } from '@fusion-ui/utils/useNamespace'
import { isString } from '@fusion-ui/utils/types'
import { FnIcon } from '../../icon'
import { avatarProps } from './drawer'

const props = defineProps(avatarProps)

const targetDivRef = ref(null)

const ns = useNamespace('drawer')

const avatarClassList = computed(() => {
  const { direction } = props
  const classList = [ns.b()]
  if (isString(direction))
    classList.push(ns.m(direction))
  return classList
})

const visible = ref(true)

const handleClose = (event: MouseEvent) => {
  const targetDiv = targetDivRef.value as HTMLElement | null
  if (!targetDiv?.contains(event.target as HTMLElement))
    visible.value = false
}
</script>

<script lang="ts">
export default {
  name: 'FnDrawer',
}
</script>

<template>
  <Transition name="fn-drawer">
    <div
      v-show="visible"
      ref="elRef"
      class="fn-overlay"
      @click="handleClose"
    >
      <div ref="targetDivRef" :class="avatarClassList">
        <header>
          <span class="drawer-title">
            Title
          </span>
          <span class="drawer-close" @click="visible = false">
            <fn-icon icon="ic:round-close" size="25" />
          </span>
        </header>
        <div class="drawer-body">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>
