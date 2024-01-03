<script lang="ts" setup>
import Palette from '@interface-ui/icons/PaletteOutlined'
import Edit from '@interface-ui/icons/EditOutlined'
</script>

<template>
  <in-fab color="infoContainer">
    <palette />
  </in-fab>
  <in-fab>
    <palette />
  </in-fab>
  <in-fab color="tertiaryContainer">
    <edit />
    Edit
  </in-fab>
</template>
