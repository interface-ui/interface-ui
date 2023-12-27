<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '@interface-ui/constants'
import { modalProps } from './modal'

const props = defineProps(modalProps)
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()
defineOptions({ inheritAttrs: false })
const ns = useNamespace('modal')

const handleWheel = (e: WheelEvent) => {
  e.preventDefault()
}

const open = computed<boolean>({
  get() {
    return props.modelValue
  },
  set(newVal) {
    emit(UPDATE_MODEL_EVENT, newVal)
  },
})

const handleClick = () => {
  open.value = false
  emit('close')
}
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="$props.keepMounted || open"
        v-show="open"
        :class="[ns.b(), open ? ns.m('open') : '']"
        v-bind="$attrs"
        @wheel.prevent.stop="handleWheel"
        @click="handleClick"
      >
        <div
          v-if="$props.backdrop"
          :class="[ns.e('backdrop')]"
          @click="handleClick"
        >
          <slot />
        </div>
        <slot v-else />
      </div>
    </transition>
  </teleport>
</template>
