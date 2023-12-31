<script lang="ts" setup>
import '@core/fba/src/index.less' // 开发调试的样式
import { InFba } from '@core'
import Palette from '@interface-ui/icons/PaletteOutlined'
</script>

<template>
  <div class="content">
    <in-fba size="small">
      <palette />
    </in-fba>
    <in-fba>
      <palette />
    </in-fba>
    <in-fba size="large">
      <palette />
    </in-fba>
  </div>
  <div class="content" style="margin-top: 16px">
    <in-fba size="small">
      <palette />
      Extended
    </in-fba>
    <in-fba>
      <palette />
      Extended
    </in-fba>
    <in-fba size="large">
      <palette />
      Extended
    </in-fba>
  </div>
  <div class="content" style="margin-top: 16px">
    <in-fba color="infoContainer">
      <palette />
    </in-fba>
    <in-fba>
      <palette />
    </in-fba>
    <in-fba color="tertiaryContainer">
      <palette />
    </in-fba>
  </div>
</template>
