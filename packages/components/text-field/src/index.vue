<script lang="ts" setup>
import { isEmpty, useNamespace } from '@fusion-ui-vue/utils'
import { computed, useAttrs } from 'vue'
import { css, styled, useColor } from '@fusion-ui-vue/theme'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import Typography from '../../typography'
import FnInput from '../../input'
import { textFieldProps } from './text-field'

const props = defineProps(textFieldProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: string): void }>()
const attrs = useAttrs()
const ns = useNamespace('text-field')

const cssClass = computed(() => {
  const $color = useColor(props.error ? 'error' : props.color)
  return css`
    --fn-text-field-color: ${$color.value ?? 'var(--md-sys-color-primary)'};
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
const id: string = attrs?.id
  ? (attrs.id as string)
  : `text-field-${new Date().getTime()}`
const label = computed(() => props?.label ?? '')

const LabelTypography = computed(
  () => styled(Typography, {
    component: 'label',
    variant: 'body.medium',
    id,
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
      props.error ? ns.m('error') : '',
      !isEmpty(props.modelValue) ? ns.m('content-within') : '',
      cssClass,
    ]"
  >
    <label-typography v-if="props?.label" :class="[ns.e('label')]">
      {{ label }}
    </label-typography>
    <div :class="[ns.em('div', 'input-wrapper')]">
      <fn-input
        :id="id"
        v-model="value"
        type="text"
        v-bind="$attrs"
        :class="[ns.e('input')]"
      />
      <span :class="[ns.em('span', 'border')]" />
    </div>
    <typography
      v-if="props?.supportingText"
      :class="[ns.m('supporting-text')]"
      variant="body.small"
      no-warp
    >
      {{ props.supportingText }}
    </typography>
  </div>
</template>
