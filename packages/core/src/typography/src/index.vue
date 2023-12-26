<!-- eslint-disable @typescript-eslint/indent -->
<script lang="ts" setup>
import { computed } from 'vue'
import type { TypographyMap } from '@interface-ui/theme'
import { typographyMapping } from '@interface-ui/theme'
import { useNamespace } from '@interface-ui/utils'
import { typographyProps } from './typography'
import useCss from './index.jss'

const props = defineProps(typographyProps)
const ns = useNamespace('typography')

const parsed = computed(() => {
  const { variant, component } = props
  const [_, $variant, size] = variant.match(/([\w\d]+)\.?(\w+)?/)!
  const renderTag =
    component ?? typographyMapping[$variant as keyof TypographyMap] ?? 'span'

  return [renderTag, $variant, size]
})

const cssClass = useCss(props)
</script>

<template>
  <component
    :is="parsed[0]"
    :class="[
      ns.b(),
      $props.noWarp ? ns.m('nowarp') : '',
      $props.gutter ? ns.m('gutter') : '',
      cssClass,
    ]"
  >
    <slot />
  </component>
</template>
@interface-ui/theme@interface-ui/theme
