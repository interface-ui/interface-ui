<script lang="ts" setup>
import { ref } from 'vue'
import type { PopoverPlacements } from '@interface-ui/core'

const anchor = ref<HTMLElement | MouseEvent | null>(null)
const placement = ref<PopoverPlacements>({ x: 'right', y: 'top' })
const handleClick = (e: MouseEvent, p: PopoverPlacements) => {
  anchor.value = e.currentTarget as HTMLElement
  placement.value = p
}
</script>

<template>
  <in-button
    variant="outlined"
    @click="e => handleClick(e, { x: 'right', y: 'top' })"
  >
    Top right
  </in-button>
  <in-button
    variant="outlined"
    @click="e => handleClick(e, { x: 'left', y: 'top' })"
  >
    Top left
  </in-button>
  <in-button
    variant="outlined"
    @click="e => handleClick(e, { x: 'right', y: 'bottom' })"
  >
    Bottom right
  </in-button>
  <in-button
    variant="outlined"
    @click="e => handleClick(e, { x: 'left', y: 'bottom' })"
  >
    Bottom left
  </in-button>
  <in-menu
    keep-mounted
    :open="Boolean(anchor)"
    :placement="placement"
    :anchor="anchor"
    cs="width: 200px;"
    @close="anchor = null"
  >
    <in-list-item @click="anchor = null"> Copy </in-list-item>
    <in-list-item @click="anchor = null"> Cut </in-list-item>
    <in-list-item disabled @click="anchor = null"> Paste </in-list-item>
    <in-divider component="li" />
    <in-list-item-header> Other actions </in-list-item-header>
    <in-list-item @click="anchor = null"> Save </in-list-item>
  </in-menu>
</template>
