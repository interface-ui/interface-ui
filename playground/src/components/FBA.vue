<script lang="ts" setup>
import '@css/fba/src/index.less' // 开发调试的样式
import { InFba } from '@interface-ui/core'
import { PaletteOutlined } from 'fusion-ui-iconify'
</script>

<template>
  <div class="content">
    <in-fba size="small">
      <palette-outlined />
    </in-fba>
    <in-fba>
      <palette-outlined />
    </in-fba>
    <in-fba size="large">
      <palette-outlined />
    </in-fba>
  </div>
  <div class="content" style="margin-top: 16px">
    <in-fba size="small">
      <palette-outlined />
      Extended
    </in-fba>
    <in-fba>
      <palette-outlined />
      Extended
    </in-fba>
    <in-fba size="large">
      <palette-outlined />
      Extended
    </in-fba>
  </div>
  <div class="content" style="margin-top: 16px">
    <in-fba color="infoContainer">
      <palette-outlined />
    </in-fba>
    <in-fba>
      <palette-outlined />
    </in-fba>
    <in-fba color="tertiaryContainer">
      <palette-outlined />
    </in-fba>
  </div>
</template>
