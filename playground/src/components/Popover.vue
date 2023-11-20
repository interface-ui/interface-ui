<script lang="ts" setup>
import '@fusion-ui-vue/components/popover/src/index.less' // 开发调试的样式
import { FnPopover, FnButton } from '@fusion-ui-vue/components'
import { ref } from 'vue'

const anchor = ref(null)
</script>

<template>
  <div class="content">
    <fn-button @click="e => (anchor = e.currentTarget)">Popover</fn-button>
    <fn-popover
      :open="Boolean(anchor)"
      :anchor="anchor"
      @close="anchor = null"
      :placement="{ y: 'top' }"
    >
      <fn-typography no-warp>
        This is a popover <br />
        This is a popover
      </fn-typography>
    </fn-popover>
  </div>
</template>
