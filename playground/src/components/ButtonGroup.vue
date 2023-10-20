<script lang="ts" setup>
import { FnButton, FnButtonGroup } from 'fusion-ui-vue'
</script>

<template>
  <fn-button-group variant="outlined">
    <fn-button>one</fn-button>
    <fn-button>two</fn-button>
    <fn-button>three</fn-button>
  </fn-button-group>
  <fn-button-group variant="text">
    <fn-button>one</fn-button>
    <fn-button>two</fn-button>
    <fn-button>three</fn-button>
  </fn-button-group>
  <fn-button-group variant="outlined" orientation="vertical">
    <fn-button>one</fn-button>
    <fn-button>two</fn-button>
    <fn-button>three</fn-button>
  </fn-button-group>
  <fn-button-group orientation="vertical">
    <fn-button>one</fn-button>
    <fn-button>two</fn-button>
    <fn-button>three</fn-button>
  </fn-button-group>
  <fn-button-group variant="text" orientation="vertical">
    <fn-button>one</fn-button>
    <fn-button>two</fn-button>
    <fn-button>three</fn-button>
  </fn-button-group>
</template>
