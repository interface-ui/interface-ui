<script lang="ts" setup>
import { InAlert } from '@interface-ui/core'
import Close from '@interface-ui/icons/CloseFilled'
</script>

<template>
  <div class="content">
    <in-alert severity="success">
      This is an success alert — check it out!
    </in-alert>
    <in-alert severity="warning">
      This is an warning alert — check it out!
    </in-alert>
    <in-alert severity="info"> This is an info alert — check it out! </in-alert>
    <in-alert severity="error">
      This is an error alert — check it out!
    </in-alert>
  </div>

  <div class="content" style="margin-top: 16px">
    <in-alert
      variant="outlined"
      severity="success"
      :cs="{ '& .in-alert--message': { opacity: 0 } }"
    >
      This is an success alert — check it out!
    </in-alert>
    <in-alert variant="outlined" severity="warning" cs="opacity: 0">
      This is an warning alert — check it out!
    </in-alert>
    <in-alert variant="outlined" severity="info">
      This is an info alert — check it out!
    </in-alert>
    <in-alert variant="outlined" severity="error">
      This is an error alert — check it out!
    </in-alert>
  </div>

  <div class="content" style="margin-top: 16px">
    <in-alert variant="outlined" severity="success">
      <in-typography variant="title.medium" component="h1" color="inherit">
        This is a Success Title
      </in-typography>
      This is an success alert — check it out!
    </in-alert>
    <in-alert variant="outlined" severity="warning">
      <in-typography variant="title.medium" component="h1" color="inherit">
        This is a Warning Title
      </in-typography>
      This is an warning alert — check it out!
    </in-alert>
    <in-alert variant="outlined" severity="info">
      <in-typography variant="title.medium" component="h1" color="inherit">
        This is a Info Title
      </in-typography>
      This is an info alert — check it out!
    </in-alert>
    <in-alert variant="outlined" severity="error">
      <in-typography variant="title.medium" component="h1" color="inherit">
        This is a Error Title
      </in-typography>
      This is an error alert — check it out!
    </in-alert>
  </div>

  <in-alert variant="outlined" severity="success" style="margin-top: 16px">
    This is an success alert — check it out!
    <template #action="btn">
      <in-icon-button v-bind="btn">
        <close />
      </in-icon-button>
    </template>
  </in-alert>

  <in-alert variant="outlined" severity="warning" style="margin-top: 16px">
    This is an warning alert — check it out!
    <template #action="btn">
      <in-button v-bind="btn" variant="text">undo</in-button>
    </template>
  </in-alert>

  <in-alert severity="info" style="margin-top: 16px">
    This is an info alert — check it out!
    <template #action="btn">
      <in-icon-button v-bind="btn">
        <close />
      </in-icon-button>
    </template>
  </in-alert>

  <in-alert severity="error" style="margin-top: 16px">
    This is an error alert — check it out!
    <template #action="btn">
      <in-button v-bind="btn" variant="text">undo</in-button>
    </template>
  </in-alert>

  <in-alert severity="error" style="margin-top: 16px">
    <template #icon>
      <close />
    </template>
    This is an error alert — check it out!
  </in-alert>

  <in-alert severity="error" :icon="false" style="margin-top: 16px">
    <template #icon>
      <close />
    </template>
    This is an error alert — check it out!
  </in-alert>
</template>
