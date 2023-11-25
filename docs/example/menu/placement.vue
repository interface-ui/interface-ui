<script lang="ts" setup>
import { ref } from 'vue'
import type { PopoverPlacements } from 'fusion-ui-vue'

const anchor = ref<HTMLElement | MouseEvent | null>(null)
const placement = ref<PopoverPlacements>({ x: 'right', y: 'top' })
const handleClick = (e: MouseEvent, p: PopoverPlacements) => {
  anchor.value = e.currentTarget as HTMLElement
  placement.value = p
}
</script>

<template>
  <fn-button
    variant="outlined"
    @click="e => handleClick(e, { x: 'right', y: 'top' })"
  >
    Top right
  </fn-button>
  <fn-button
    variant="outlined"
    @click="e => handleClick(e, { x: 'left', y: 'top' })"
  >
    Top left
  </fn-button>
  <fn-button
    variant="outlined"
    @click="e => handleClick(e, { x: 'right', y: 'bottom' })"
  >
    Bottom right
  </fn-button>
  <fn-button
    variant="outlined"
    @click="e => handleClick(e, { x: 'left', y: 'bottom' })"
  >
    Bottom left
  </fn-button>
  <fn-menu
    :open="Boolean(anchor)"
    :placement="placement"
    :anchor="anchor"
    cs="width: 200px;"
    @close="anchor = null"
  >
    <fn-list-item @click="anchor = null"> Copy </fn-list-item>
    <fn-list-item @click="anchor = null"> Cut </fn-list-item>
    <fn-list-item disabled @click="anchor = null"> Paste </fn-list-item>
    <fn-divider component="li" />
    <fn-list-item-header> Other actions </fn-list-item-header>
    <fn-list-item @click="anchor = null"> Save </fn-list-item>
  </fn-menu>
</template>
