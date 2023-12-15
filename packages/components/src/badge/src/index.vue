<script lang="ts" setup>
import { debugWarn, useNamespace } from '@fusion-ui-vue/utils'
import { css, styled, useColor } from '@fusion-ui-vue/theme'
import { computed, useSlots } from 'vue'
import Typography from '../../typography'
import { badgeProps } from './badge'

const props = defineProps(badgeProps)
const slots = useSlots()
const ns = useNamespace('badge')
const [$color, $onColor] = useColor(props, 'color')

const translate = {
  top: '-50%',
  bottom: '50%',
  right: '50%',
  left: '-50%',
}

const positionCss = computed(() =>
  slots.default
    ? css`
        ${props.xAlign}: 0;
        ${props.yAlign}: 0;
        position: absolute;
        transform: scale(1)
          translate(
            ${props.overlap ? '0%' : (translate as any)[props.xAlign]},
            ${props.overlap ? '0%' : (translate as any)[props.yAlign]}
          );
      `
    : ''
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
const badgeContent = computed(() => {
  const { content, max } = props
  if (!showTypography.value) {
    return null
  }

  if (content && max) {
    if (!['string', 'number'].includes(typeof content)) {
      debugWarn(
        '[Interface UI]',
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
        {{ badgeContent }}
      </template>
    </badge-typography>
    <props.content v-else :class="[ns.m('icon'), positionCss]" />
  </span>
</template>
