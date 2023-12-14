<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import * as pkg from 'fusion-ui-iconify'
import type { ComponentDirections } from '@fusion-ui-vue/constants'
import { componentDirections } from '@fusion-ui-vue/constants'

const {
  LocalFireDepartmentFilled,
  AppsFilled,
  CodeFilled,
  FoundationFilled,
  PaletteFilled,
  AddCircleFilled,
  StarsFilled,
} = pkg

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
  <fn-button
    v-for="direction in componentDirections"
    :key="direction"
    variant="text"
    @click="onClick(direction)"
  >
    {{ direction }}
  </fn-button>
  <fn-drawer :open="open" :placement="placement" @close="open = false">
    <fn-list
      :cs="{ width: ['top', 'bottom'].includes(placement) ? 'auto' : '250px' }"
    >
      <fn-list-item v-for="item in list" :key="item.text">
        <template #leading="{ icon }">
          <component :is="item.icon" v-bind="icon" />
        </template>
        {{ item.text }}
      </fn-list-item>
    </fn-list>
  </fn-drawer>
</template>
