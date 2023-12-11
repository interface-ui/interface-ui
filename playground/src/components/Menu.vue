<script lang="ts" setup>
import '@fusion-ui-vue/components/src/collapse/src/index.less'
import { ref } from 'vue'

const anchor = ref<HTMLElement | MouseEvent | null>(null)
</script>

<template>
  <fn-button @click="e => (anchor = e.currentTarget)"> Show Menu </fn-button>
  <fn-menu
    keep-mounted
    :open="Boolean(anchor)"
    :anchor="anchor"
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
