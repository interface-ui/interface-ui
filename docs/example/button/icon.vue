<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { DeleteFilled, SaveFilled } = pkg
// import { DeleteFilled, SaveFilled } from 'fusion-ui-iconify'
</script>

<template>
  <in-button variant="outlined">
    <delete-filled />
    delete
  </in-button>
  <in-button>
    save
    <save-filled />
  </in-button>
</template>
