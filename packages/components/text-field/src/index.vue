<script lang="ts" setup>
import { isEmpty, useNamespace } from '@fusion-ui-vue/utils'
import { computed, useAttrs, useSlots } from 'vue'
import { css, useColor } from '@fusion-ui-vue/theme'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import Typography from '../../typography'
import FnInputBase from '../../input-base'
import { textFieldProps } from './text-field'

const props = defineProps(textFieldProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: string): void }>()
const attrs = useAttrs()
const slots = useSlots()
const ns = useNamespace('text-field')

const cssClass = computed(() => {
  const $color = props.error
    ? useColor(props, null, 'var(--md-sys-color-error)')
    : useColor(props, 'color', 'var(--md-sys-color-primary)')
  return css`
    --fn-text-field-color: ${$color.value};
  `
})
const value = computed<string>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})

const generateId = () => {
  return (Math.random() + 1).toString(36).substring(7)
}

const id: string = attrs?.id
  ? (attrs.id as string)
  : `text-field-${generateId()}`
const label = computed(() => props?.label ?? '')

const hasContent = computed<boolean>(() => {
  const startAdornment = slots?.startAdornment?.()

  return !isEmpty(props.modelValue) || !!startAdornment
})
</script>

<template>
  <div
    :class="[
      ns.b(),
      ns.m(props.variant),
      ns.m(props.size),
      props.error ? ns.m('error') : '',
      hasContent ? ns.m('content-within') : '',
      cssClass,
    ]"
  >
    <typography
      v-if="props?.label"
      component="label"
      :class="[ns.e('label')]"
      color="rgb(var(--md-sys-color-on-surface-rgb) / 0.6);"
      no-warp
    >
      {{ label }}
    </typography>
    <div :class="[ns.em('div', 'input-wrapper')]">
      <slot
        name="startAdornment"
        v-bind="{ class: [ns.m('start-adornment')], color: 'onSurfaceVariant' }"
      />
      <fn-input-base
        :id="id"
        v-bind="$attrs"
        v-model="value"
        :class="[ns.e('input')]"
        type="text"
        internal
      />
      <slot
        name="endAdornment"
        v-bind="{ class: [ns.m('end-adornment')], color: 'onSurfaceVariant' }"
      />
      <span :class="[ns.em('span', 'border')]" />
    </div>
    <typography
      v-if="props?.supportingText"
      :class="[ns.m('supporting-text')]"
      variant="body.small"
      color="var(--fn-text-field-color)"
      no-warp
    >
      {{ props.supportingText }}
    </typography>
  </div>
</template>
