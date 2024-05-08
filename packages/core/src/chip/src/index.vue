<!-- eslint-disable no-mixed-operators -->
<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import InActionArea from '../../action-area'
import InIconButton from '../../icon-button'
import CloseFilled from '../../svg-icon/internal/CloseFilled.vue'
import { chipProps } from './chip'
import useCss from './index.jss'

const props = defineProps(chipProps)
defineEmits<{ delete: [] }>()
const ns = useNamespace('chip')
const cssClass = useCss(props, ns)
</script>

<template>
  <component
    v-bind="$props.clickable ? { component: $props.component } : {}"
    :is="$props.clickable ? InActionArea : $props.component"
    :class="[ns.b(), ns.m($props.variant), cssClass]"
    class="label-large"
  >
    <slot />
    <in-icon-button
      v-if="$props.deletable"
      :class="[ns.em('button', 'delete')]"
      size="small"
      cs="padding: 4px;"
      @click="$emit('delete')"
    >
      <close-filled />
    </in-icon-button>
  </component>
</template>
