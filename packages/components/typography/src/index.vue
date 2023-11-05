<!-- eslint-disable @typescript-eslint/indent -->
<script lang="ts" setup>
import { computed } from 'vue'
import type { TypographyMap } from '@fusion-ui-vue/theme'
import { typographyMapping } from '@fusion-ui-vue/theme'
import { useNamespace } from '@fusion-ui-vue/utils'
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

const is = computed<string>(() => parsed.value[0])
const cssClass = useCss(props)
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
