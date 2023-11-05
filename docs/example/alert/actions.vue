<script setup lang="ts">
import * as pkg from 'fusion-ui-iconify'
const { CloseOutlined } = pkg
// import { CloseOutlined } from 'fusion-ui-iconify'
</script>

<template>
  <div space-y-5 w-full>
    <fn-alert severity="error">
      This is an error alert — check it out!
      <template #action>
        <fn-button variant="text">
          CLOSE
        </fn-button>
      </template>
    </fn-alert>
    <fn-alert severity="warning">
      This is an warning alert — check it out!
      <template #action>
        <fn-icon-button>
          <close-outlined />
        </fn-icon-button>
      </template>
    </fn-alert>
  </div>
  <br>
</template>
