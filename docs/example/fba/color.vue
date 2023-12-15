<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { PaletteOutlined, EditOutlined } = pkg
</script>

<template>
  <in-fba color="infoContainer">
    <palette-outlined />
  </in-fba>
  <in-fba>
    <palette-outlined />
  </in-fba>
  <in-fba color="tertiaryContainer">
    <edit-outlined />
    Edit
  </in-fba>
</template>
