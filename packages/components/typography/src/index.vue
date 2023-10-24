<script lang="ts" setup>
import { computed } from 'vue'
import type { TypographyMap, TypographyProp } from '@fusion-ui-vue/theme'
import { css, typographyMapping, useTheme } from '@fusion-ui-vue/theme'
import { useNamespace } from '@fusion-ui-vue/utils'
import { typographyProps } from './typography'

const props = defineProps(typographyProps)
const ns = useNamespace('typography')
const theme = useTheme()

const parsed = computed(() => {
  const { variant, component } = props
  const [_, $variant, size] = variant.match(/([\w\d]+)\.?(\w+)?/)!
  const renderTag =
    component ?? typographyMapping[$variant as keyof TypographyMap] ?? 'span'

  return [renderTag, $variant, size]
})

const is = computed<string>(() => parsed.value[0])

const cssClass = computed(() => {
  const [_, variant, size] = parsed.value

  const style: TypographyProp = size
    // @ts-expect-error: ignore
    ? theme.value.typography[variant][size]
    // @ts-expect-error: ignore
    : theme.value.typography[variant]

  return css({
    [`&:is(${is.value})`]: {
      margin: 0,
      border: 'none',
      ...style,
    },
  } as any)
})
</script>

<template>
  <component
    :is="is"
    :class="[
      ns.b(),
      props.noWarp ? ns.m('nowarp') : '',
      props.gutter ? ns.m('gutter') : '',
      cssClass,
    ]"
  >
    <slot />
  </component>
</template>
