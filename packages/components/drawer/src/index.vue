<script setup lang="ts">
import { computed, ref } from 'vue'
import { useNamespace } from '@fusion-ui/utils/useNamespace'
import { isString } from '@fusion-ui/utils/types'
import { useDrawer } from '@fusion-ui/hooks'
import { FnIcon } from '../../icon'
import { drawerProps } from './drawer'
const props = defineProps(drawerProps)
const { visible, doClose } = useDrawer(props)

const targetDivRef = ref(null)

const ns = useNamespace('drawer')

const drawerClassList = computed(() => {
  const { direction } = props
  const classList = [ns.b()]
  if (isString(direction))
    classList.push(ns.m(direction))
  return classList
})

const handleClose = (event: MouseEvent) => {
  const targetDiv = targetDivRef.value as HTMLElement | null
  if (!targetDiv?.contains(event.target as HTMLElement)) {
    doClose()
  }
}
</script>

<script lang="ts">
export default {
  name: 'FnDrawer',
}
</script>

<template>
  <teleport to="body">
    <div
      v-if="visible"
      ref="elRef"
      class="fn-overlay"
      :class="`slide-fade-${props.direction}`"
      @click="handleClose"
    />

    <transition :name="`slide-fade-${props.direction}`">
      <div
        v-show="visible" ref="targetDivRef"
        :class="drawerClassList"
      >
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
    </transition>
  </teleport>
</template>
