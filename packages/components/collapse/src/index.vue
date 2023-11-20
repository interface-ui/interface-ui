<script lang="ts" setup>
const onEnter = (el: Element) => {
  const element = el as HTMLElement
  element.classList.add('fn-collapse')
  element.style.height = 'auto'
  const endHeight = window.getComputedStyle(el).height
  element.style.height = '0px'
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight
  element.style.height = endHeight
}

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  element.classList.remove('fn-collapse')
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  element.classList.add('fn-collapse')
  element.style.height = window.getComputedStyle(el).height
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight
  element.style.height = '0px'
}

const onAfterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  element.classList.remove('fn-collapse')
}
</script>

<template>
  <transition
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <slot />
  </transition>
</template>
