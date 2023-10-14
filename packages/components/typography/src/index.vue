<script lang="ts" setup>
import { computed } from 'vue'
import type { TypographyMap } from '@fusion-ui-vue/theme'
import { typographyMapping } from '@fusion-ui-vue/theme'
import { useTypography } from '@fusion-ui-vue/hooks'
import { useNamespace } from '@fusion-ui-vue/utils'
import { typographyProps } from './typography'

const props = defineProps(typographyProps)
const ns = useNamespace('typography')
const classes = useTypography(props, ns)

const is = computed<string>(() => {
  const { variant, component } = props
  const [_, $variant] = variant.match(/([\w\d]+)\.?(\w+)?/)!
  const renderTag =
    component ?? typographyMapping[$variant as keyof TypographyMap] ?? 'span'

  return renderTag
})

const classList = computed(() => {
  const list = [ns.b(), classes.value[ns.b()]]

  if (props.noWarp) {
    list.push(ns.m('nowarp'))
  }

  return list
})
</script>

<template>
  <component :is="is" :class="classList">
    <slot />
  </component>
</template>
