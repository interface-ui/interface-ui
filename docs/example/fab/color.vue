<script lang="ts" setup>
import Palette from '@interface-ui/icons/PaletteOutlined.js'
import Edit from '@interface-ui/icons/EditOutlined.js'
</script>

<template>
  <in-fab color="infoContainer">
    <palette />
  </in-fab>
  <in-fab>
    <PaletteOutlined />
  </in-fab>
  <in-fab color="tertiaryContainer">
    <edit />
    Edit
  </in-fab>
</template>
