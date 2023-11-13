<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { PaletteOutlined, EditOutlined } = pkg
</script>

<template>
  <fn-fba color="infoContainer">
    <palette-outlined />
  </fn-fba>
  <fn-fba>
    <palette-outlined />
  </fn-fba>
  <fn-fba color="tertiaryContainer">
    <edit-outlined />
    Edit
  </fn-fba>
</template>
