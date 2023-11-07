<script lang="ts" setup>
import { FnAlert } from '@fusion-ui-vue/components'
import { CloseOutlined } from 'fusion-ui-iconify'
</script>

<template>
  <div class="content">
    <fn-alert severity="success">
      This is an success alert — check it out!
    </fn-alert>
    <fn-alert severity="warning">
      This is an warning alert — check it out!
    </fn-alert>
    <fn-alert severity="info"> This is an info alert — check it out! </fn-alert>
    <fn-alert severity="error">
      This is an error alert — check it out!
    </fn-alert>
  </div>

  <div class="content" style="margin-top: 16px">
    <fn-alert variant="outlined" severity="success">
      This is an success alert — check it out!
    </fn-alert>
    <fn-alert variant="outlined" severity="warning">
      This is an warning alert — check it out!
    </fn-alert>
    <fn-alert variant="outlined" severity="info">
      This is an info alert — check it out!
    </fn-alert>
    <fn-alert variant="outlined" severity="error">
      This is an error alert — check it out!
    </fn-alert>
  </div>

  <div class="content" style="margin-top: 16px">
    <fn-alert variant="outlined" severity="success">
      <fn-typography variant="title.medium" component="h1" color="inherit">
        This is a Success Title
      </fn-typography>
      This is an success alert — check it out!
    </fn-alert>
    <fn-alert variant="outlined" severity="warning">
      <fn-typography variant="title.medium" component="h1" color="inherit">
        This is a Warning Title
      </fn-typography>
      This is an warning alert — check it out!
    </fn-alert>
    <fn-alert variant="outlined" severity="info">
      <fn-typography variant="title.medium" component="h1" color="inherit">
        This is a Info Title
      </fn-typography>
      This is an info alert — check it out!
    </fn-alert>
    <fn-alert variant="outlined" severity="error">
      <fn-typography variant="title.medium" component="h1" color="inherit">
        This is a Error Title
      </fn-typography>
      This is an error alert — check it out!
    </fn-alert>
  </div>

  <fn-alert variant="outlined" severity="success" style="margin-top: 16px">
    This is an success alert — check it out!
    <template #action="btn">
      <fn-icon-button v-bind="btn">
        <close-outlined />
      </fn-icon-button>
    </template>
  </fn-alert>

  <fn-alert variant="outlined" severity="warning" style="margin-top: 16px">
    This is an warning alert — check it out!
    <template #action="btn">
      <fn-button v-bind="btn" variant="text">undo</fn-button>
    </template>
  </fn-alert>

  <fn-alert severity="info" style="margin-top: 16px">
    This is an info alert — check it out!
    <template #action="btn">
      <fn-icon-button v-bind="btn">
        <close-outlined />
      </fn-icon-button>
    </template>
  </fn-alert>

  <fn-alert severity="error" style="margin-top: 16px">
    This is an error alert — check it out!
    <template #action="btn">
      <fn-button v-bind="btn" variant="text">undo</fn-button>
    </template>
  </fn-alert>

  <fn-alert severity="error" style="margin-top: 16px">
    <template #icon>
      <close-outlined />
    </template>
    This is an error alert — check it out!
  </fn-alert>

  <fn-alert severity="error" :icon="false" style="margin-top: 16px">
    <template #icon>
      <close-outlined />
    </template>
    This is an error alert — check it out!
  </fn-alert>
</template>
