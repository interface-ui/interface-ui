<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import { css, themePaletteColor, useColor } from '@fusion-ui-vue/theme'
import FnIconButton from '../../icon-button'
import FnIcon from '../../icon'
import { switchHeight, switchProps } from './switch'

const props = defineProps(switchProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()
const ns = useNamespace('switch')
const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')
const $onColor = computed(() =>
  themePaletteColor.includes(props.color as any)
    ? `var(--md-sys-color-on-${props.color})`
    : 'var(--md-sys-color-on-primary)'
)

const checked = computed<boolean>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})

const cssClass = computed(
  () => css`
    --fn-switch-color: ${$color.value};
    --fn-switch-on-color: ${$onColor.value};
    --fn-switch-height: ${switchHeight[props.size]}px;
  `
)
</script>

<template>
  <span :class="[ns.b(), cssClass]">
    <fn-icon-button
      :class="[ns.e('thumb')]"
      :color="props.color"
      :disabled="$attrs.disabled"
      @click="checked = !checked"
    >
      <span :class="[ns.em('thumb', 'icon-wrapper')]">
        <slot v-bind="{ class: [ns.em('thumb', 'icon')], size: '16' }">
          <fn-icon
            v-if="!props.disabledIcon"
            :class="[ns.em('thumb', 'icon')]"
            icon="mdi:check"
            size="16"
          />
        </slot>
      </span>
    </fn-icon-button>
    <!-- eslint-disable vue/html-self-closing -->
    <input
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      type="checkbox"
    />
  </span>
</template>
