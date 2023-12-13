<script lang="ts" setup>
import '@fusion-ui-vue/components/src/dialog/src/index.less'
import '@fusion-ui-vue/components/src/dialog-header/src/index.less'
import '@fusion-ui-vue/components/src/dialog-content/src/index.less'
import '@fusion-ui-vue/components/src/dialog-action/src/index.less'
import {
  FnDialog,
  FnDialogHeader,
  FnDialogContent,
  FnDialogAction,
} from '@fusion-ui-vue/components'
import { ref } from 'vue'

const openBasic = ref(false)
const openFullScreen = ref(false)
</script>

<template>
  <div class="content">
    <fn-button @click="openBasic = !openBasic">Open Basic Dialog</fn-button>
    <fn-button @click="openFullScreen = !openFullScreen">
      Open Full Screen Dialog
    </fn-button>
  </div>

  <fn-dialog
    :open="openBasic"
    @close="openBasic = false"
    cs="min-width: 300px; max-width: 600px;"
  >
    <fn-dialog-header>Dialog Header</fn-dialog-header>
    <fn-dialog-content>
      Tempor deserunt consequat Lorem veniam reprehenderit nulla. Eu anim ipsum
      incididunt commodo do nisi eu cupidatat non. Ullamco nulla aliqua do
      mollit. Cupidatat excepteur tempor excepteur ea. Excepteur deserunt elit
      proident id do consectetur et irure esse proident nulla sint in. Aute sit
      id amet incididunt velit anim exercitation exercitation amet est.
    </fn-dialog-content>
    <fn-dialog-action>
      <fn-button variant="text" @click="openFullScreen = false">
        Cancel
      </fn-button>
      <fn-button @click="openFullScreen = false">Submit</fn-button>
    </fn-dialog-action>
  </fn-dialog>

  <fn-dialog :open="openFullScreen" variant="full-screen">
    <fn-dialog-header>Dialog Header</fn-dialog-header>
    <fn-dialog-content>
      Tempor deserunt consequat Lorem veniam reprehenderit nulla. Eu anim ipsum
      incididunt commodo do nisi eu cupidatat non. Ullamco nulla aliqua do
      mollit. Cupidatat excepteur tempor excepteur ea. Excepteur deserunt elit
      proident id do consectetur et irure esse proident nulla sint in. Aute sit
      id amet incididunt velit anim exercitation exercitation amet est.
    </fn-dialog-content>
    <fn-dialog-action>
      <fn-button variant="text" @click="openFullScreen = false">
        Cancel
      </fn-button>
      <fn-button @click="openFullScreen = false">Submit</fn-button>
    </fn-dialog-action>
  </fn-dialog>
</template>
