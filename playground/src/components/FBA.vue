<script lang="ts" setup>
import '@fusion-ui-vue/components/fba/src/index.less' // 开发调试的样式
import { FnFba } from '@fusion-ui-vue/components'
import { PaletteOutlined } from 'fusion-ui-iconify'
</script>

<template>
  <div class="content">
    <fn-fba size="small">
      <palette-outlined />
    </fn-fba>
    <fn-fba>
      <palette-outlined />
    </fn-fba>
    <fn-fba size="large">
      <palette-outlined />
    </fn-fba>
  </div>
  <div class="content" style="margin-top: 16px">
    <fn-fba size="small">
      <palette-outlined />
      Extended
    </fn-fba>
    <fn-fba>
      <palette-outlined />
      Extended
    </fn-fba>
    <fn-fba size="large">
      <palette-outlined />
      Extended
    </fn-fba>
  </div>
  <div class="content" style="margin-top: 16px">
    <fn-fba color="infoContainer">
      <palette-outlined />
    </fn-fba>
    <fn-fba>
      <palette-outlined />
    </fn-fba>
    <fn-fba color="tertiaryContainer">
      <palette-outlined />
    </fn-fba>
  </div>
</template>
