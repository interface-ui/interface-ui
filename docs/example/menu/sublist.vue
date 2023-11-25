<script lang="ts" setup>
import { ref } from 'vue'
import * as pkg from 'fusion-ui-iconify'

const { ArrowRightFilled } = pkg
const anchor = ref<HTMLElement | MouseEvent | null>(null)
const showSublist = ref(false)
</script>

<template>
  <fn-button @click="e => (anchor = e.currentTarget)">Show Menu</fn-button>
  <fn-menu :open="Boolean(anchor)" :anchor="anchor" @close="anchor = null">
    <fn-list-item> Copy </fn-list-item>
    <fn-list-item
      @mouseenter="showSublist = true"
      @mouseleave="showSublist = false"
    >
      More
      <template #trailing="icon">
        <arrow-right-filled v-bind="icon" />
      </template>
      <fn-list v-if="showSublist" cs="width: 100px;" sublist>
        <fn-list-item> Cut </fn-list-item>
        <fn-list-item> Paste </fn-list-item>
      </fn-list>
    </fn-list-item>
  </fn-menu>
</template>
