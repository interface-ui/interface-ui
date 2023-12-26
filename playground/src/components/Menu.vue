<script lang="ts" setup>
import '@interface-ui/core/src/collapse/src/index.less'
import { ref } from 'vue'

const anchor = ref<HTMLElement | MouseEvent | null>(null)
</script>

<template>
  <in-button @click="e => (anchor = e.currentTarget)"> Show Menu </in-button>
  <in-menu
    keep-mounted
    :open="Boolean(anchor)"
    :anchor="anchor"
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
