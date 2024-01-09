<script lang="ts" setup>
import { debugWarn, useNamespace } from '@interface-ui/utils'
import { computed, useSlots } from 'vue'
import InTypography from '../../typography'
import { badgeProps } from './badge'
import useCss from './index.jss'

const props = defineProps(badgeProps)
const slots = useSlots()
const ns = useNamespace('badge')
const cssStyles = useCss(props, ns, slots.default)

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
        'props.content can only be "string" or "number" when set props.max',
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
    <in-typography
      v-if="showTypography"
      :class="[ns.m('content'), cssStyles.cssClass]"
      :color="ns!.getCssVarBlock('onPrimary')"
      variant="label.small"
    >
      <template v-if="props.variant !== 'dot'">
        {{ badgeContent }}
      </template>
    </in-typography>
    <props.content v-else :class="[ns.m('content'), cssStyles.badgePosition]" />
  </span>
</template>
