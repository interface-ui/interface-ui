<script lang="ts" setup>
import '@css/popover/src/index.less' // 开发调试的样式
import { InPopover, InButton } from '@interface-ui/core'
import { ref } from 'vue'

const anchor = ref(null)
</script>

<template>
  <div class="content">
    <in-button @click="e => (anchor = e.currentTarget)">Popover</in-button>
    <in-popover
      :open="Boolean(anchor)"
      :anchor="anchor"
      @close="anchor = null"
      :placement="{ y: 'top' }"
    >
      <in-typography no-warp>
        This is a popover <br />
        This is a popover
      </in-typography>
    </in-popover>
  </div>
</template>
