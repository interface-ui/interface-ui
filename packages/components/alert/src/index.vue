<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { useTheme } from '@fusion-ui-vue/theme'
import FnTypography from '../../typography'
import { alertIcons, alertProps } from './alert'
import useCss from './index.jss'

const props = defineProps(alertProps)
const theme = useTheme()
const ns = useNamespace('alert')
const cssClass = useCss(props, ns)

const actionColor = computed(() => {
  const severityPalette = theme.value.palettes[props.severity]
  return theme.value.mode === 'dark' ? severityPalette[50] : severityPalette[40]
})
</script>

<template>
  <div :class="[ns.b(), ns.m(props.variant), cssClass]">
    <slot
      v-if="props.icon"
      name="icon"
      v-bind="{
        severity: $props.severity,
        class: [ns.m('icon')],
      }"
    >
      <component :is="alertIcons[$props.severity!]" :class="[ns.m('icon')]" />
    </slot>
    <fn-typography
      component="span"
      color="var(--fn-alert-on-color)"
      variant="body.medium"
      :class="[ns.m('message')]"
    >
      <slot />
    </fn-typography>
    <slot name="action" v-bind="{ color: actionColor, size: 'small' }" />
  </div>
</template>
