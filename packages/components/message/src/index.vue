<script lang="ts" setup>
import { noop, useResizeObserver, useTimeoutFn } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import { getLastOffset, getSvgIncon } from './message'
import type { MessageType } from './types'
const props = withDefaults(
  defineProps<{
    message: string
    duration: number
    id: string
    showIcon: boolean
    offset: number
    closeBtn: boolean
    type: MessageType
  }>(),
  {
    type: 'info',
    duration: 2000,
    offset: 20,
    closeBtn: false,
    showIcon: true,
  },
)
defineEmits(['destroy'])

const visible = ref(false)
const height = ref(0)
const elRef = ref<HTMLDivElement>()
let clearTimer = noop

function startTimer() {
  if (props.duration === 0)
    return
  ;({ stop: clearTimer } = useTimeoutFn(() => {
    visible.value = false
    clearTimer = noop
  }, props.duration))
}

onMounted(() => {
  startTimer()
  visible.value = true
})

useResizeObserver(elRef as any, () => {
  height.value = elRef.value!.getBoundingClientRect().height
})
const lastOffset = computed(() => getLastOffset(props.id) + props.offset)
const bottom = computed((): number => height.value + lastOffset.value)

defineExpose({ bottom, lastOffset, visible })
</script>

<template>
  <Transition name="fn-message-fade" @after-leave="$emit('destroy')">
    <div
      v-show="visible"
      :id="id"
      ref="elRef"
      class="fn-message"
      :class="[`is-${type}`]"
      :style="{ top: `${lastOffset}px` }"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="message-content">
        <i v-if="props.showIcon" v-html="getSvgIncon(props.type)" />
        {{ message }}
      </div>
      <div v-if="closeBtn" class="close-btn" @click="visible = false">
        ×
      </div>
    </div>
  </Transition>
</template>
