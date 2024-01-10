<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '@interface-ui/constants'
import CheckFilled from '../../svg-icon/internal/CheckFilled.vue'
import InIconButton from '../../icon-button'
import InInputBase from '../../input-base'
import { switchProps } from './switch'
import useCss from './index.jss'

const props = defineProps(switchProps)
const emit = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()
const ns = useNamespace('switch')
const cssClass = useCss(props, ns)

const checked = computed<boolean>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emit(UPDATE_MODEL_EVENT, newVal)
  },
})
</script>

<template>
  <span :class="[ns.b(), checked ? ns.m('checked') : '', cssClass]">
    <in-icon-button
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
    </in-icon-button>
    <in-input-base
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      type="checkbox"
      internal
    />
  </span>
</template>
