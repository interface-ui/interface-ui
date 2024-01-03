<script lang="ts" setup>
import Favorite from '@interface-ui/icons/FavoriteFilled'
import MoreVert from '@interface-ui/icons/MoreVertFilled'
import Share from '@interface-ui/icons/ShareFilled'
</script>

<template>
  <in-card cs="max-width: 345px;">
    <in-card-header>
      <template #avatar>
        <in-avatar>R</in-avatar>
      </template>
      <in-headline-text
        headline="Health Essentials"
        supporting-text="November 14, 2023"
      />
      <template #action>
        <in-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <more-vert />
        </in-icon-button>
      </template>
    </in-card-header>
    <in-card-media
      art="unsplast food photo"
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <in-card-content>
      <in-typography>
        A concise guide covering key health topics like diet, exercise, and
        mental well-being, designed for a quick yet informative read.
      </in-typography>
    </in-card-content>
    <in-card-action>
      <in-icon-button color="onSurfaceVariant" cs="opacity: .5;">
        <favorite />
      </in-icon-button>
      <in-icon-button color="onSurfaceVariant" cs="opacity: .5;">
        <share />
      </in-icon-button>
    </in-card-action>
  </in-card>
</template>
