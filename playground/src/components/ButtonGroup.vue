<script lang="ts" setup>
import { InButton, InButtonGroup } from '@interface-ui/core'
</script>

<template>
  <div class="content">
    <in-button-group variant="outlined" size="small">
      <in-button>one</in-button>
      <in-button>two</in-button>
      <in-button>three</in-button>
    </in-button-group>
    <in-button-group variant="outlined" color="tertiary">
      <in-button>one</in-button>
      <in-button>two</in-button>
      <in-button>three</in-button>
    </in-button-group>
    <in-button-group variant="outlined" size="large">
      <in-button>one</in-button>
      <in-button>two</in-button>
      <in-button>three</in-button>
    </in-button-group>
  </div>
  <div fscw gap-2>
    <in-button variant="text" size="small">Small</in-button>
    <in-button variant="text" size="medium">Medium</in-button>
    <in-button variant="text" size="large">Large</in-button>
  </div>
  <div fscw gap-2>
    <in-button size="small">Small</in-button>
    <in-button size="medium">Medium</in-button>
    <in-button size="large">Large</in-button>
  </div>
  <div fscw gap-2>
    <in-button variant="outlined" size="small">Small</in-button>
    <in-button variant="outlined" size="medium">Medium</in-button>
    <in-button variant="outlined" size="large">Large</in-button>
  </div>
</template>
