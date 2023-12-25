<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { CakeFilled } = pkg
// import { CakeFilled } from 'fusion-ui-iconify'
</script>

<template>
  <in-icon-button>
    <cake-filled />
  </in-icon-button>
  <in-icon-button disabled>
    <cake-filled />
  </in-icon-button>
</template>
