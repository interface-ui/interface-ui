<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { inputBaseProps } from './input-base'
import useCss from './index.jss'

const props = defineProps(inputBaseProps)
const ns = useNamespace('input-base')
const cssClass = useCss(props)
const value = defineModel()
</script>

<template>
  <!-- eslint-disable-next-line vue/html-self-closing -->
  <input
    v-model="value"
    :type="$props.type"
    :class="[ns.b(), cssClass]"
    class="body-large"
  />
</template>
