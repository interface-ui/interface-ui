<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import FnActionArea from '../../action-area'
import FnIconButton from '../../icon-button'
import CloseFilled from '../../svg-icon/internal/CloseFilled.vue'
import { chipProps } from './chip'
import useCss from './index.jss'

const props = defineProps(chipProps)
defineEmits<{ delete: [] }>()
const ns = useNamespace('chip')
const cssClass = useCss(props)
</script>

<template>
  <component
    v-bind="$props.clickable ? { component: 'span' } : {}"
    :is="$props.clickable ? FnActionArea : $props.component"
    :class="[ns.b(), ns.m($props.variant), cssClass]"
    class="label-large"
  >
    <slot />
    <fn-icon-button
      v-if="$props.deletable"
      :class="[ns.em('button', 'close')]"
      size="small"
      cs="padding: 4px;"
      @click="$emit('delete')"
    >
      <close-filled />
    </fn-icon-button>
  </component>
</template>
