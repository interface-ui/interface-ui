<script lang="ts" setup>
import { FnAlert } from '@fusion-ui-vue/components'
</script>

<template>
 <!-- <FnAlert severity="error" icon="false" color="red" variant="outlined">
      <fn-typography gutter variant="title.medium" >
        Title
      </fn-typography>
        This is an error alert — check it out!
       
      <template #action>
        <fn-button variant="text" >CLOSE</fn-button>
      </template>
</FnAlert> -->
<!-- <FnAlert severity="info">This is a warning alert — check it out!</FnAlert> -->
<fn-alert severity="error" color="info">
      This is an error alert — check it out!
    </fn-alert>
<!-- <FnAlert severity="info">This is an info alert — check it out!</FnAlert>
<FnAlert severity="success">This is a success alert — check it out!</FnAlert> -->
</template>
