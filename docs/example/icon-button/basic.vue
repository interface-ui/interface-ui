<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const {
  CakeFilled
} = pkg
// import { CakeFilled } from 'fusion-ui-iconify'
</script>

<template>
  <fn-icon-button>
    <cake-filled />
  </fn-icon-button>
  <fn-icon-button disabled>
    <cake-filled />
  </fn-icon-button>
</template>
