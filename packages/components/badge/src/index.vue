<script lang="ts" setup>
import { debugWarn, useNamespace } from '@fusion-ui-vue/utils'
import { cx, styled, themePaletteColor, useColor } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import Typography from '../../typography'
import { badgeProps } from './badge'

const props = defineProps(badgeProps)
const ns = useNamespace('badge')
const $color = useColor(props.color)
const $onColor = computed(() =>
  themePaletteColor.includes(props.color as string)
    ? `var(--md-sys-color-on-${props.color})`
    : null
)

const translate = {
  top: '-50%',
  bottom: '50%',
  right: '50%',
  left: '-50%',
}
const BadgeTypography = styled(Typography)`
  background-color: ${$color.value ?? 'var(--md-sys-color-error)'};
  color: ${$onColor.value};
  height: ${props.variant === 'dot' ? '8px' : '20px'};
  min-width: ${props.variant === 'dot' ? '8px' : '20px'};
  border-radius: 10px;
  padding: ${props.variant === 'dot' ? '0' : '6px'} !important;
  ${props.xAlign}: 0;
  ${props.yAlign}: 0;
  transform: scale(1)
    translate(
      ${props.overlap ? '0%' : (translate as any)[props.xAlign]},
      ${props.overlap ? '0%' : (translate as any)[props.yAlign]}
    );
`

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
  <span :class="cx(ns.b())">
    <slot />
    <badge-typography
      v-if="showTypography"
      :class="cx(ns.em('span', 'icon'))"
      variant="label.small"
    >
      <template v-if="props.variant !== 'dot'">
        {{ badegContent }}
      </template>
    </badge-typography>
    <props.content v-else />
  </span>
</template>
