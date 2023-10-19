<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import { useSwitchNew } from '@fusion-ui-vue/hooks'
import { useNamespace } from '@fusion-ui-vue/utils'
import FnRipple from '../../ripple'
import { SwitchPropsNew } from './switch'
const props = defineProps(SwitchPropsNew)
const emits = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()
const instance = getCurrentInstance()
const ns = useNamespace('switch')
const cssClass = useSwitchNew(props, ns)

const checked = computed<boolean>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})

const classList = computed(() => {
  const { size } = props
  const { disabled } = instance?.attrs || {}
  return [ns.b(), ns.m(size), disabled === '' ? ns.m('disabled') : '']
})

const classListOverlay = computed(() => {
  const { disabled } = instance?.attrs || {}
  return [
    disabled === '' ? ns.m('disabled') : ns.m('no-disabled'),
    checked.value ? ns.m('active') : '',
  ]
})
</script>

<template>
  <span :class="[...classList, cssClass]">
    <div :class="[ns.e('overlay'), classListOverlay]">
      <div :class="[ns.e('dot')]" />
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <input
        v-bind="$attrs"
        v-model="checked"
        :class="[ns.e('input')]"
        type="checkbox"
      />
      <fn-ripple :color="props.color" center />
    </div>
    <div :class="[ns.e('track')]" />
  </span>
</template>
