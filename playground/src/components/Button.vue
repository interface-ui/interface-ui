<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const {
  DeleteFilled
} = pkg
// import { DeleteFilled } from 'fusion-ui-iconify'
</script>

<template>
  <div class="content">
    <fn-button variant="outlined" size="small">
      <delete-filled />
      delete
    </fn-button>
    <fn-button variant="outlined">
      <delete-filled />
      delete
    </fn-button>
    <fn-button variant="outlined" size="large" disabled>
      <delete-filled />
      delete
    </fn-button>
    <fn-icon-button>
      <delete-filled />
    </fn-icon-button>
  </div>
</template>
