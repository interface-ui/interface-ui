<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import { modalProps } from './modal'

const props = defineProps(modalProps)
const emits = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()
const ns = useNamespace('modal')

const open = computed<boolean>({
  get() {
    return props.modelValue
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})

const handleClick = () => {
  open.value = false
  emits('close')
}
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-show="open"
        :class="[ns.b(), open ? ns.m('open') : '']"
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
