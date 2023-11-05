<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { css } from '@fusion-ui-vue/theme'
import { buttonBaseProps } from './button-base'

const props = defineProps(buttonBaseProps)
const ns = useNamespace('button-base')
const csStyle = props.cs ? css(props.cs) : ''
</script>

<template>
  <component :is="$props.component" :class="[ns.b(), csStyle]">
    <slot />
  </component>
</template>
