<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { DeleteFilled, SaveFilled } = pkg
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
