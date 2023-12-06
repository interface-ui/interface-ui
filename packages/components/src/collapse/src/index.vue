<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { type RendererElement } from 'vue'

const ns = useNamespace('collapse')

const dataset = {
  oldPaddingTop: '',
  oldPaddingBottom: '',
  oldOverflow: '',
}

const reset = (el: RendererElement) => {
  el.style.maxHeight = ''
  el.style.overflow = dataset.oldOverflow
  el.style.paddingTop = dataset.oldPaddingTop
  el.style.paddingBottom = dataset.oldPaddingBottom
}

const listener = {
  beforeEnter(el: RendererElement) {
    dataset.oldPaddingTop = el.style.paddingTop
    dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.maxHeight = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },

  enter(el: RendererElement) {
    dataset.oldOverflow = el.style.overflow
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = `${el.scrollHeight}px`
    } else {
      el.style.maxHeight = 0
    }
    el.style.paddingTop = dataset.oldPaddingTop
    el.style.paddingBottom = dataset.oldPaddingBottom
  },

  afterEnter(el: RendererElement) {
    el.style.maxHeight = ''
    el.style.overflow = dataset.oldOverflow
  },

  enterCancelled(el: RendererElement) {
    reset(el)
  },

  beforeLeave(el: RendererElement) {
    dataset.oldPaddingTop = el.style.paddingTop
    dataset.oldPaddingBottom = el.style.paddingBottom
    dataset.oldOverflow = el.style.overflow

    el.style.maxHeight = `${el.scrollHeight}px`
  },

  leave(el: RendererElement) {
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },

  afterLeave(el: RendererElement) {
    reset(el)
  },

  leaveCancelled(el: RendererElement) {
    reset(el)
  },
}
</script>

<template>
  <transition :name="ns.b()" v-on="listener">
    <slot />
  </transition>
</template>
