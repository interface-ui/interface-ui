<script lang="ts" setup>
import { debugWarn, useNamespace } from '@fusion-ui-vue/utils'
import { css, styled, themeSchemes, useColor } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import Typography from '../../typography'
import { badgeProps } from './badge'

const props = defineProps(badgeProps)
const ns = useNamespace('badge')
const $color = useColor(props, 'color', 'var(--md-sys-color-error)')
const $onColor = computed(() =>
  themeSchemes.includes(props.color as any)
    ? `var(--md-sys-color-on-${props.color})`
    : 'var(--md-sys-color-on-primary)'
)

const translate = {
  top: '-50%',
  bottom: '50%',
  right: '50%',
  left: '-50%',
}

const positionCss = computed(
  () => css`
    ${props.xAlign}: 0;
    ${props.yAlign}: 0;
    transform: scale(1)
      translate(
        ${props.overlap ? '0%' : (translate as any)[props.xAlign]},
        ${props.overlap ? '0%' : (translate as any)[props.yAlign]}
      );
  `
)
const BadgeTypography = computed(
  () => styled(Typography, { color: $onColor.value })`
    background-color: ${$color.value};
    height: ${props.variant === 'dot' ? '8px' : '20px'};
    min-width: ${props.variant === 'dot' ? '8px' : '20px'};
    border-radius: 10px;
    padding: ${props.variant === 'dot' ? '0' : '6px'} !important;
  `
)

const showTypography = computed(() => {
  const { content, variant } = props
  return variant === 'dot' || ['string', 'number'].includes(typeof content)
})
const badegContent = computed(() => {
  const { content, max } = props
  if (!showTypography.value) {
    return null
  }

  if (content && max) {
    if (!['string', 'number'].includes(typeof content)) {
      debugWarn(
        '[Fusion UI]',
        'props.content can only be "string" or "number" when set props.max'
      )
      return null
    }
    return max ? (+max < +content! ? `${max}+` : content) : content!
  }

  return content
})
</script>

<template>
  <span :class="ns.b()">
    <slot />
    <badge-typography
      v-if="showTypography"
      :class="[ns.m('icon'), positionCss]"
      variant="label.small"
    >
      <template v-if="props.variant !== 'dot'">
        {{ badegContent }}
      </template>
    </badge-typography>
    <props.content v-else :class="[ns.m('icon'), positionCss]" />
  </span>
</template>
