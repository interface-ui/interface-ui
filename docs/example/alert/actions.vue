<script setup lang="ts">
import Close from '@interface-ui/icons/CloseOutlined.js'
</script>

<template>
  <div space-y-5 w-full>
    <in-alert severity="error">
      This is an error alert — check it out!
      <template #action="btn">
        <in-button v-bind="btn" variant="text"> CLOSE </in-button>
      </template>
    </in-alert>
    <in-alert severity="warning">
      This is an warning alert — check it out!
      <template #action="btn">
        <in-icon-button v-bind="btn">
          <close />
        </in-icon-button>
      </template>
    </in-alert>
  </div>
</template>
