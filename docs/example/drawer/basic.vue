<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import type { ComponentDirections } from '@interface-ui/constants'
import { componentDirections } from '@interface-ui/constants'
import AddCircleFilled from '@interface-ui/icons/AddCircleFilled'
import AppsFilled from '@interface-ui/icons/AppsFilled'
import CodeFilled from '@interface-ui/icons/CodeFilled'
import FoundationFilled from '@interface-ui/icons/FoundationFilled'
import LocalFireDepartmentFilled from '@interface-ui/icons/LocalFireDepartmentFilled'
import PaletteFilled from '@interface-ui/icons/PaletteFilled'
import StarsFilled from '@interface-ui/icons/StarsFilled'

const list = shallowRef([
  { icon: LocalFireDepartmentFilled, text: 'Home' },
  { icon: AppsFilled, text: 'Get Started' },
  { icon: CodeFilled, text: 'Develop' },
  { icon: FoundationFilled, text: 'Foundations' },
  { icon: PaletteFilled, text: 'Styles' },
  { icon: AddCircleFilled, text: 'Components' },
  { icon: StarsFilled, text: 'Blogs' },
])

const open = ref(false)
const placement = ref<ComponentDirections>('top')
const onClick = (p: ComponentDirections) => {
  placement.value = p
  open.value = true
}
</script>

<template>
  <in-button
    v-for="direction in componentDirections"
    :key="direction"
    variant="text"
    @click="onClick(direction)"
  >
    {{ direction }}
  </in-button>
  <in-drawer :open="open" :placement="placement" @close="open = false">
    <in-list
      :cs="{ width: ['top', 'bottom'].includes(placement) ? 'auto' : '250px' }"
    >
      <in-list-item v-for="item in list" :key="item.text">
        <template #leading="{ icon }">
          <component :is="item.icon" v-bind="icon" />
        </template>
        {{ item.text }}
      </in-list-item>
    </in-list>
  </in-drawer>
</template>
