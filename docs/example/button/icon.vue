<script lang="ts" setup>
// import { DeleteFilled, SaveFilled } from 'fusion-ui-iconify'
import * as pkg from 'fusion-ui-iconify'
const { DeleteFilled, SaveFilled } = pkg
</script>

<template>
  <fn-button variant="outlined">
    <delete-filled />
    delete
  </fn-button>
  <fn-button>
    save
    <save-filled />
  </fn-button>
</template>
