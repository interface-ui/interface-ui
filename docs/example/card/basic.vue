<script lang="ts" setup>
import MoreVert from '@interface-ui/icons/MoreVertFilled'
</script>

<template>
  <in-card>
    <in-card-header>
      <template #action>
        <in-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <more-vert />
        </in-icon-button>
      </template>
    </in-card-header>
    <in-card-content>
      <in-typography cs="opacity: .5;"> Elevated </in-typography>
    </in-card-content>
  </in-card>

  <in-card variant="filled">
    <in-card-header>
      <template #action>
        <in-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <more-vert />
        </in-icon-button>
      </template>
    </in-card-header>
    <in-card-content>
      <in-typography cs="opacity: .5;"> Filled </in-typography>
    </in-card-content>
  </in-card>

  <in-card variant="outlined">
    <in-card-header>
      <template #action>
        <in-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <more-vert />
        </in-icon-button>
      </template>
    </in-card-header>
    <in-card-content>
      <in-typography cs="opacity: .5;"> Outlined </in-typography>
    </in-card-content>
  </in-card>
</template>
