<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'

const { MoreVertFilled } = pkg
</script>

<template>
  <fn-card>
    <fn-card-header>
      <template #action>
        <fn-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <more-vert-filled />
        </fn-icon-button>
      </template>
    </fn-card-header>
    <fn-card-content>
      <fn-typography cs="opacity: .5;"> Elevated </fn-typography>
    </fn-card-content>
  </fn-card>

  <fn-card variant="filled">
    <fn-card-header>
      <template #action>
        <fn-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <more-vert-filled />
        </fn-icon-button>
      </template>
    </fn-card-header>
    <fn-card-content>
      <fn-typography cs="opacity: .5;"> Filled </fn-typography>
    </fn-card-content>
  </fn-card>

  <fn-card variant="outlined">
    <fn-card-header>
      <template #action>
        <fn-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <more-vert-filled />
        </fn-icon-button>
      </template>
    </fn-card-header>
    <fn-card-content>
      <fn-typography cs="opacity: .5;"> Outlined </fn-typography>
    </fn-card-content>
  </fn-card>
</template>
