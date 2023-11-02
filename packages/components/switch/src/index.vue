<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import CheckFilled from '../../svg-icon/internal/CheckFilled.vue'
import FnIconButton from '../../icon-button'
import FnInputBase from '../../input-base'
import { switchProps } from './switch'
import useCss from './index.jss'

const props = defineProps(switchProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()
const ns = useNamespace('switch')
const cssClass = useCss(props, ns)

const checked = computed<boolean>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})
</script>

<template>
  <span
    :class="[ns.b(), checked ? ns.m('checked') : ns.m('unchecked'), cssClass]"
  >
    <fn-icon-button
      :class="[ns.e('thumb')]"
      :color="props.color"
      :disabled="$attrs.disabled"
      @click="checked = !checked"
    >
      <span :class="[ns.em('thumb', 'icon-wrapper')]">
        <slot v-bind="{ size: 16 }">
          <check-filled v-if="!props.disabledIcon" />
        </slot>
      </span>
    </fn-icon-button>
    <fn-input-base
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      type="checkbox"
      internal
    />
  </span>
</template>
