<script setup lang="ts">
import { defineComponent, useAttrs } from 'vue'
import { useNamespace } from '@interface-ui/utils'
import { avatarProps } from './avatar'
import useCss from './index.jss'

const props = defineProps(avatarProps)
const ns = useNamespace('avatar')
const cssClass = useCss(props, ns)
const { class: classAttr, ...restAttrs } = useAttrs()
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
})
</script>

<template>
  <div :class="[classAttr, ns.b(), ns.m(props.variant), cssClass]">
    <slot>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img v-bind="restAttrs" />
    </slot>
  </div>
</template>
