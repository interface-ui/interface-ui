<script setup lang="ts">
import { useNamespace } from '@fusion-ui-vue/utils'
import { Teleport } from 'vue'
import FnModal from '../../modal'
import FnFragment from '../../fragment'
import type { DrawerEmits } from './drawer'
import { drawerProps } from './drawer'
import useCss from './index.jss'

const props = defineProps(drawerProps)
defineEmits<DrawerEmits>()
defineOptions({ inheritAttrs: false })

const ns = useNamespace('drawer')
const cssClass = useCss(props)
</script>

<template>
  <component
    :is="$props.variant === 'temporary' ? Teleport : FnFragment"
    to="body"
  >
    <transition :name="ns.bm('animation', `slide-${$props.placement}`)">
      <div
        v-if="$props.keepMounted || $props.open"
        v-show="$props.open"
        v-bind="$attrs"
        :class="[
          ns.b(),
          ns.m($props.variant),
          ns.m($props.placement),
          cssClass,
        ]"
      >
        <slot />
      </div>
    </transition>
  </component>
  <fn-modal
    v-if="$props.variant === 'temporary'"
    :keep-mounted="$props.keepMounted"
    :model-value="$props.open"
    :backdrop="$props.backdrop"
    @click="$emit('close')"
  />
</template>
