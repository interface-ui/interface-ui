<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { computed, useAttrs } from 'vue'
import { css, styled, useColor } from '@fusion-ui-vue/theme'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import Typography from '../../typography'
import { textFieldProps } from './text-field'

const props = defineProps(textFieldProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: string): void }>()
const attrs = useAttrs()
const ns = useNamespace('text-field')

const $color = useColor(props.color)
const cssClass = computed(
  () => css`
    --fn-text-field-color: ${$color.value ?? 'var(--md-sys-color-primary)'};
  `
)
const value = computed<string>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})
const id = computed<string>(() =>
  attrs?.id ? (attrs.id as string) : `text-field-${new Date().getTime()}`
)
const label = computed(() => props?.label ?? '')

const LabelTypography = computed(
  () => styled(Typography, {
    component: 'label',
    variant: 'body.medium',
    id: id.value,
  })`
    color: var(--md-sys-color-on-surface-variant);
  `
)
</script>

<template>
  <div
    :class="[
      ns.b(),
      ns.m(props.variant),
      ns.m(props.size),
      cssClass,
      !!value ? ns.m('content-within') : '',
    ]"
  >
    <label-typography v-if="props?.label" :class="[ns.e('label')]">
      {{ label }}
    </label-typography>
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <input
      :id="id"
      v-model="value"
      type="text"
      v-bind="$attrs"
      class="bady-large"
      :class="[ns.e('input')]"
    />
    <span
      v-if="props.variant === 'outlined'"
      :class="[ns.em('span', 'border')]"
    />
  </div>
</template>
