<script lang="ts" setup>
import '@core/dialog/src/index.less'
import '@core/dialog-header/src/index.less'
import '@core/dialog-content/src/index.less'
import '@core/dialog-action/src/index.less'
import {
  InDialog,
  InDialogHeader,
  InDialogContent,
  InDialogAction,
} from '@interface-ui/core'
import { ref } from 'vue'

const openBasic = ref(false)
const openFullScreen = ref(false)
</script>

<template>
  <div class="content">
    <in-button @click="openBasic = !openBasic">Open Basic Dialog</in-button>
    <in-button @click="openFullScreen = !openFullScreen">
      Open Full Screen Dialog
    </in-button>
  </div>

  <in-dialog
    :open="openBasic"
    @close="openBasic = false"
    cs="min-width: 300px; max-width: 600px;"
  >
    <in-dialog-header>Dialog Header</in-dialog-header>
    <in-dialog-content>
      Tempor deserunt consequat Lorem veniam reprehenderit nulla. Eu anim ipsum
      incididunt commodo do nisi eu cupidatat non. Ullamco nulla aliqua do
      mollit. Cupidatat excepteur tempor excepteur ea. Excepteur deserunt elit
      proident id do consectetur et irure esse proident nulla sint in. Aute sit
      id amet incididunt velit anim exercitation exercitation amet est.
    </in-dialog-content>
    <in-dialog-action>
      <in-button variant="text" @click="openFullScreen = false">
        Cancel
      </in-button>
      <in-button @click="openFullScreen = false">Submit</in-button>
    </in-dialog-action>
  </in-dialog>

  <in-dialog :open="openFullScreen" variant="full-screen">
    <in-dialog-header>Dialog Header</in-dialog-header>
    <in-dialog-content>
      Tempor deserunt consequat Lorem veniam reprehenderit nulla. Eu anim ipsum
      incididunt commodo do nisi eu cupidatat non. Ullamco nulla aliqua do
      mollit. Cupidatat excepteur tempor excepteur ea. Excepteur deserunt elit
      proident id do consectetur et irure esse proident nulla sint in. Aute sit
      id amet incididunt velit anim exercitation exercitation amet est.
    </in-dialog-content>
    <in-dialog-action>
      <in-button variant="text" @click="openFullScreen = false">
        Cancel
      </in-button>
      <in-button @click="openFullScreen = false">Submit</in-button>
    </in-dialog-action>
  </in-dialog>
</template>
