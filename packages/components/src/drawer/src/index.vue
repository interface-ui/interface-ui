<script setup lang="ts">
import { useNamespace } from '@interface-ui/utils'
import { Teleport, nextTick, ref, watch } from 'vue'
import InModal from '../../modal'
import InFragment from '../../fragment'
import type { DrawerEmits } from './drawer'
import { drawerProps } from './drawer'
import useCss from './index.jss'

const props = defineProps(drawerProps)
const emit = defineEmits<DrawerEmits>()
defineOptions({ inheritAttrs: false })

const ns = useNamespace('drawer')
const cssClass = useCss(props)
const handleWheel = (e: WheelEvent) => {
  e.preventDefault()
}
const drawerRef = ref<HTMLElement | null>(null)

watch(
  () => props.open,
  newVal => {
    nextTick(() => {
      if (newVal) {
        drawerRef.value?.focus()
      }
    })
  }
)

const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}
</script>

<template>
  <component
    :is="$props.variant === 'temporary' ? Teleport : InFragment"
    to="body"
  >
    <transition :name="ns.bm('animation', `slide-${$props.placement}`)">
      <div
        v-if="$props.keepMounted || $props.open"
        v-show="$props.open"
        v-bind="$attrs"
        ref="drawerRef"
        :class="[
          ns.b(),
          ns.m($props.variant),
          ns.m($props.placement),
          cssClass,
        ]"
        tabindex="0"
        @wheel.prevent.stop="handleWheel"
        @keydown.esc="handleEscKey"
      >
        <slot />
      </div>
    </transition>
  </component>
  <in-modal
    v-if="$props.variant === 'temporary'"
    :keep-mounted="$props.keepMounted"
    :model-value="$props.open"
    :backdrop="$props.backdrop"
    @click="$emit('close')"
  />
</template>
