<script lang="ts" setup>
import { generateId, isEmpty, useNamespace } from '@interface-ui/utils'
import { computed, useAttrs, useSlots } from 'vue'
import Typography from '../../typography'
import InInputBase from '../../input-base'
import { textFieldProps } from './text-field'
import useCss from './index.jss'

const props = defineProps(textFieldProps)
const attrs = useAttrs()
const slots = useSlots()
const ns = useNamespace('text-field')
const cssClass = useCss(props, ns)
const value = defineModel()

const id: string = attrs?.id
  ? (attrs.id as string)
  : `text-field-${generateId()}`
const label = computed(() => props?.label ?? '')

const hasContent = computed<boolean>(
  () => !isEmpty(props.modelValue) || !!slots?.leading?.(),
)
</script>

<template>
  <div
    :class="[
      ns.b(),
      ns.m($props.variant),
      ns.m($props.size),
      $props.error ? ns.m('error') : '',
      hasContent ? ns.m('content-within') : '',
      cssClass,
    ]"
  >
    <typography
      v-if="$props?.label"
      :id="id"
      component="label"
      :class="[ns.e('label')]"
      color="rgb(var(--md-sys-color-on-surface-rgb) / 0.6);"
      no-warp
    >
      {{ label }}
    </typography>
    <div :class="[ns.m('input-wrapper')]">
      <slot
        name="leading"
        v-bind="{ class: [ns.m('leading')], color: 'onSurfaceVariant' }"
      />
      <in-input-base
        :id="id"
        v-bind="$attrs"
        v-model="value"
        :class="[ns.e('input')]"
      />
      <slot
        name="trailing"
        v-bind="{ class: [ns.m('trailing')], color: 'onSurfaceVariant' }"
      />
      <fieldset
        v-if="$props.variant === 'outlined' && $props?.label"
        :class="[ns.m('border')]"
      >
        <typography component="legend" no-warp>
          {{ label }}
        </typography>
      </fieldset>
      <span v-else :class="[ns.m('border')]" />
    </div>
    <typography
      v-if="$props?.supportingText"
      :class="[ns.m('supporting-text')]"
      variant="body.small"
      no-warp
    >
      {{ $props.supportingText }}
    </typography>
  </div>
</template>
