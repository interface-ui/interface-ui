<script setup lang="ts">
import { provide, ref, toRefs } from 'vue'
import { dialogProps } from '../src/props'
import { dialogInjectionKey, dialogkEmits } from './dialog'
import { useDialog } from './use-dialog'

const props = defineProps(dialogProps)
const emit = defineEmits(dialogkEmits)
const { showClose } = toRefs(props)

const containerRef = ref<HTMLElement>()
const targetDivRef = ref(null)
const dialogRef = ref<HTMLElement>()
const {
  visible,
  handleClose,
  overlayDialogStyle,
} = useDialog(props, containerRef)

provide(dialogInjectionKey, {
  dialogRef,
})

function handleClick(event: MouseEvent) {
  if (!props.closeOnClickModal)
    return
  const targetDiv = targetDivRef.value as unknown as HTMLElement
  if (!targetDiv?.contains(event.target as HTMLElement))
    handleClose()
  emit('click', event)
}
</script>

<template>
  <Teleport to="body">
    <transition name="dialog-fade">
      <div
        v-show="visible"
        ref="containerRef"
        class="dialog"
        role="dialog"
        @click.stop="handleClick"
      >
        <div ref="targetDivRef" class="fn-overlay " :style="overlayDialogStyle" :class="{ 'is-align-center': (props.center && !props.fullscreen), 'is-fullscreen': props.fullscreen }">
          <div v-show="props.title" class="header">
            <span>
              {{ props.title }}
            </span>
            <span v-if="!showClose" @click="handleClose">
              <fn-icon name="material-symbols:close" />
            </span>
          </div>
          <div class="dialog__content">
            --{{ dialogRef }}--
            <slot />
          </div>
          <div class="footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
