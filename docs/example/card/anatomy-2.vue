<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'

const { MoreVertFilled, FavoriteFilled, ShareFilled } = pkg
</script>

<template>
  <fn-card cs="max-width: 345px;">
    <fn-card-header>
      <template #avatar>
        <fn-avatar>R</fn-avatar>
      </template>
      <fn-headline-text
        headline="Health Essentials"
        supporting-text="November 14, 2023"
      />
      <template #action>
        <fn-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <more-vert-filled />
        </fn-icon-button>
      </template>
    </fn-card-header>
    <fn-card-media
      art="unsplast food photo"
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <fn-card-content>
      <fn-typography>
        A concise guide covering key health topics like diet, exercise, and
        mental well-being, designed for a quick yet informative read.
      </fn-typography>
    </fn-card-content>
    <fn-card-action>
      <fn-icon-button color="onSurfaceVariant" cs="opacity: .5;">
        <favorite-filled />
      </fn-icon-button>
      <fn-icon-button color="onSurfaceVariant" cs="opacity: .5;">
        <share-filled />
      </fn-icon-button>
    </fn-card-action>
  </fn-card>
</template>
