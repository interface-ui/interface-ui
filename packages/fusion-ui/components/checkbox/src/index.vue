<script lang="ts" setup>
import { checkboxProps, CheckboxSize } from '../src/checkbox'
import { UseCheckbox } from '../../_hooks'
import { reactive } from 'vue'
import FnRipple from '../../ripple'
const props = defineProps(checkboxProps)

const { classList } = UseCheckbox(props)

const iconSize = reactive<Record<CheckboxSize, number>>({
  small: 20,
  medium: 24,
  large: 28,
})
</script>

<script lang="ts">
export default {
  name: 'FnCheckbox',
}
</script>

<template>
  <span :class="classList.root">
    <slot>
      <fn-icon
        icon="ic:baseline-check-box"
        :class="classList.icon"
        color="#3894ff"
        :size="iconSize[props.size]"
      />
    </slot>
    <input type="checkbox" v-bind="$attrs" :class="classList.input" />
    <fn-ripple />
  </span>
</template>
