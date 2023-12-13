<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { type RendererElement } from 'vue'
import { collapseProps } from './collapse'

const props = defineProps(collapseProps)
const ns = useNamespace('collapse')

const dataset =
  props.orientation === 'vertical'
    ? {
        oldPaddingTop: '',
        oldPaddingBottom: '',
        oldOverflow: '',
      }
    : {
        oldPaddingLeft: '',
        oldPaddingRight: '',
        oldOverflow: '',
      }

const reset = (el: RendererElement) => {
  if (props.orientation === 'vertical') {
    el.style.maxHeight = ''
    el.style.overflow = dataset.oldOverflow
    el.style.paddingTop = dataset.oldPaddingTop
    el.style.paddingBottom = dataset.oldPaddingBottom
  } else {
    el.style.maxWidth = ''
    el.style.overflow = dataset.oldOverflow
    el.style.paddingLeft = dataset.oldPaddingLeft
    el.style.paddingRight = dataset.oldPaddingRight
  }
}

const listener = {
  beforeEnter(el: RendererElement) {
    if (props.orientation === 'vertical') {
      dataset.oldPaddingTop = el.style.paddingTop
      dataset.oldPaddingBottom = el.style.paddingBottom

      el.style.maxHeight = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    } else {
      dataset.oldPaddingLeft = el.style.paddingLeft
      dataset.oldPaddingRight = el.style.paddingRight

      el.style.maxWidth = 0
      el.style.paddingLeft = 0
      el.style.paddingRight = 0
    }
  },

  enter(el: RendererElement) {
    dataset.oldOverflow = el.style.overflow
    if (props.orientation === 'vertical') {
      if (el.scrollHeight !== 0) {
        el.style.maxHeight = `${el.scrollHeight}px`
      } else {
        el.style.maxHeight = 0
      }
      el.style.paddingTop = dataset.oldPaddingTop
      el.style.paddingBottom = dataset.oldPaddingBottom
    } else {
      if (el.scrollWidth !== 0) {
        el.style.maxWidth = `${el.scrollWidth}px`
      } else {
        el.style.maxWidth = 0
      }
      el.style.paddingLeft = dataset.oldPaddingLeft
      el.style.paddingRight = dataset.oldPaddingRight
    }
  },

  afterEnter(el: RendererElement) {
    if (props.orientation === 'vertical') {
      el.style.maxHeight = ''
      el.style.overflow = dataset.oldOverflow
    } else {
      el.style.maxWidth = ''
      el.style.overflow = dataset.oldOverflow
    }
  },

  enterCancelled(el: RendererElement) {
    reset(el)
  },

  beforeLeave(el: RendererElement) {
    if (props.orientation === 'vertical') {
      dataset.oldPaddingTop = el.style.paddingTop
      dataset.oldPaddingBottom = el.style.paddingBottom
      dataset.oldOverflow = el.style.overflow

      el.style.maxHeight = `${el.scrollHeight}px`
    } else {
      dataset.oldPaddingLeft = el.style.paddingLeft
      dataset.oldPaddingRight = el.style.paddingRight
      dataset.oldOverflow = el.style.overflow

      el.style.maxWidth = `${el.scrollWidth}px`
    }
  },

  leave(el: RendererElement) {
    if (props.orientation === 'vertical') {
      if (el.scrollHeight !== 0) {
        el.style.maxHeight = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      }
    } else {
      if (el.scrollWidth !== 0) {
        el.style.maxWidth = 0
        el.style.paddingLeft = 0
        el.style.paddingRight = 0
      }
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
