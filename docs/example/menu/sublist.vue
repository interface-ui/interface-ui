<script lang="ts" setup>
import { ref } from 'vue'
import * as pkg from 'fusion-ui-iconify'

const { ArrowRightFilled } = pkg
const anchor = ref<HTMLElement | MouseEvent | null>(null)
const showSublist = ref(false)
</script>

<template>
  <in-button @click="e => (anchor = e.currentTarget)">Show Menu</in-button>
  <in-menu
    keep-mounted
    :open="Boolean(anchor)"
    :anchor="anchor"
    @close="anchor = null"
  >
    <in-list-item> Copy </in-list-item>
    <in-list-item
      @mouseenter="showSublist = true"
      @mouseleave="showSublist = false"
    >
      More
      <template #trailing="icon">
        <arrow-right-filled v-bind="icon" />
      </template>
      <in-list v-if="showSublist" cs="width: 100px;" sublist>
        <in-list-item> Cut </in-list-item>
        <in-list-item> Paste </in-list-item>
      </in-list>
    </in-list-item>
  </in-menu>
</template>
