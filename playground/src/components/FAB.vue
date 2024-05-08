<script lang="ts" setup>
import '@core/fab/src/index.less'
import { InFab } from '@core'
import Palette from '@interface-ui/icons/PaletteOutlined'
</script>

<template>
  <div class="content">
    <in-fab size="small">
      <palette />
    </in-fab>
    <in-fab>
      <palette />
    </in-fab>
    <in-fab size="large">
      <palette />
    </in-fab>
  </div>
  <div class="content" style="margin-top: 16px">
    <in-fab size="small">
      <palette />
      Extended
    </in-fab>
    <in-fab>
      <palette />
      Extended
    </in-fab>
    <in-fab size="large">
      <palette />
      Extended
    </in-fab>
  </div>
  <div class="content" style="margin-top: 16px">
    <in-fab color="infoContainer">
      <palette />
    </in-fab>
    <in-fab>
      <palette />
    </in-fab>
    <in-fab color="tertiaryContainer">
      <palette />
    </in-fab>
  </div>
</template>
