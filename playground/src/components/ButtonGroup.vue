<script lang="ts" setup>
import { FnButton, FnButtonGroup } from '@fusion-ui-vue/components'
</script>

<template>
  <div class="content">
    <fn-button-group variant="outlined" size="small">
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
    <fn-button-group variant="outlined" color="tertiary">
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
    <fn-button-group variant="outlined" size="large">
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
  </div>
  <div fscw gap-2>
    <fn-button variant="text" size="small">Small</fn-button>
    <fn-button variant="text" size="medium">Medium</fn-button>
    <fn-button variant="text" size="large">Large</fn-button>
  </div>
  <div fscw gap-2>
    <fn-button size="small">Small</fn-button>
    <fn-button size="medium">Medium</fn-button>
    <fn-button size="large">Large</fn-button>
  </div>
  <div fscw gap-2>
    <fn-button variant="outlined" size="small">Small</fn-button>
    <fn-button variant="outlined" size="medium">Medium</fn-button>
    <fn-button variant="outlined" size="large">Large</fn-button>
  </div>
</template>
