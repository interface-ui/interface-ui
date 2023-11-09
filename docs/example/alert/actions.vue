<script setup lang="ts">
import * as pkg from 'fusion-ui-iconify'
const { CloseOutlined } = pkg
// import { CloseOutlined } from 'fusion-ui-iconify'
</script>

<template>
  <div space-y-5 w-full>
    <fn-alert severity="error">
      This is an error alert — check it out!
      <template #action="btn">
        <fn-button v-bind="btn" variant="text">
          CLOSE
        </fn-button>
      </template>
    </fn-alert>
    <fn-alert severity="warning">
      This is an warning alert — check it out!
      <template #action="btn">
        <fn-icon-button v-bind="btn">
          <close-outlined />
        </fn-icon-button>
      </template>
    </fn-alert>
  </div>
</template>
