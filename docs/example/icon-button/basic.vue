<script lang="ts" setup>
// import { CakeFilled } from 'fusion-ui-iconify'
import * as pkg from 'fusion-ui-iconify'
const { CakeFilled } = pkg
</script>

<template>
  <fn-icon-button>
    <cake-filled />
  </fn-icon-button>
  <fn-icon-button disabled>
    <cake-filled />
  </fn-icon-button>
</template>
