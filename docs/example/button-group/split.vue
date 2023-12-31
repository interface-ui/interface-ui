<script lang="ts" setup>
import { ref } from 'vue'
import ArrowDropDown from '@interface-ui/icons/ArrowDropDownFilled.js'

const anchor = ref<HTMLElement | MouseEvent | null>(null)
const selected = ref<string>('')
</script>

<template>
  <in-button-group variant="elevated">
    <in-button>
      {{ selected || 'Expand All Options' }}
    </in-button>
    <in-button @click="e => (anchor = e.currentTarget)">
      <arrow-drop-down />
    </in-button>
  </in-button-group>
  <in-menu
    keep-mounted
    :open="Boolean(anchor)"
    :anchor="anchor"
    @close="anchor = null"
  >
    <in-list-item @click="selected = '🍎 Apple'"> 🍎 Apple </in-list-item>
    <in-list-item @click="selected = '🍌 Banana'"> 🍌 Banana </in-list-item>
    <in-list-item @click="selected = '🍇 Grape'"> 🍇 Grape </in-list-item>
    <in-list-item @click="selected = '🍊 Orange'"> 🍊 Orange </in-list-item>
  </in-menu>
</template>
