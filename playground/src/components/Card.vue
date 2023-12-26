<script lang="ts" setup>
import '@interface-ui/core/card/src/index.less'
import '@interface-ui/core/card-content/src/index.less'
import '@interface-ui/core/card-header/src/index.less'
import '@interface-ui/core/card-action/src/index.less'
import '@interface-ui/core/card-media/src/index.less'
import '@interface-ui/core/action-area/src/index.less'
import {
  InCard,
  InCardContent,
  InTypography,
  InIconButton,
  InActionArea,
} from '@interface-ui/core'
import { MoreVertFilled, FavoriteFilled, ShareFilled } from 'fusion-ui-iconify'
</script>

<template>
  <div class="content">
    <in-card>
      <in-card-content>
        <in-typography gutter cs="opacity: .5;">
          Word of the Day
        </in-typography>
        <in-typography variant="h5" component="div">
          be • nev • o • lent
        </in-typography>
        <in-typography cs="margin-bottom: 12px;"> adjective </in-typography>
        <in-typography cs="opacity: .5;">
          well meaning and kindly.
          <br />
          a benevolent smile
        </in-typography>
      </in-card-content>
    </in-card>
    <in-card variant="filled">
      <in-card-content>
        <in-typography gutter cs="opacity: .5;">
          Word of the Day
        </in-typography>
        <in-typography variant="h5" component="div">
          be • nev • o • lent
        </in-typography>
        <in-typography cs="margin-bottom: 12px;"> adjective </in-typography>
        <in-typography cs="opacity: .5;">
          well meaning and kindly.
          <br />
          a benevolent smile
        </in-typography>
      </in-card-content>
    </in-card>
    <in-card variant="outlined">
      <in-card-content>
        <in-typography gutter cs="opacity: .5;">
          Word of the Day
        </in-typography>
        <in-typography variant="h5" component="div">
          be • nev • o • lent
        </in-typography>
        <in-typography cs="margin-bottom: 12px;"> adjective </in-typography>
        <in-typography cs="opacity: .5;">
          well meaning and kindly.
          <br />
          a benevolent smile
        </in-typography>
      </in-card-content>
    </in-card>
  </div>
  <div class="content">
    <in-card cs="max-width: 345px;">
      <in-card-header>
        <template #avatar>
          <in-avatar>R</in-avatar>
        </template>
        <in-typography variant="title.medium" component="h1">
          Health Essentials
        </in-typography>
        <in-typography component="h2" variant="title.small" cs="opacity: .5;">
          November 14, 2023
        </in-typography>
        <template #action>
          <in-icon-button color="onSurfaceVariant" cs="opacity: .5;">
            <more-vert-filled />
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
          <favorite-filled />
        </in-icon-button>
        <in-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <share-filled />
        </in-icon-button>
      </in-card-action>
    </in-card>

    <in-card cs="max-width: 345px;">
      <in-card-media
        shape="rounded"
        art="A 3D fantasy virtual reality landscape with pastel blue and violet colors."
        src="https://plus.unsplash.com/premium_photo-1699821958487-083a45450c27?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <in-card-header>
        <in-typography variant="h6" component="h1">
          Glass Souls' World Tour
        </in-typography>
        <in-typography variant="title.small" component="h2" cs="opacity: .5;">
          From your recent favorites
        </in-typography>
      </in-card-header>
      <in-card-action>
        <in-button shape="fullRounded">Buy Tickets</in-button>
      </in-card-action>
    </in-card>
  </div>

  <div class="content">
    <in-card cs="max-width: 400px;">
      <in-action-area>
        <in-card-header>
          <in-typography variant="h6" component="h1">
            Word of the Day
          </in-typography>
          <in-typography component="h2" variant="title.small" cs="opacity: .5;">
            November 14, 2023
          </in-typography>
        </in-card-header>
        <in-card-content>
          <in-typography cs="opacity: .5">
            An exploration of nature's serene beauty, from lush forests to
            tranquil rivers, highlighting the delicate balance and intricate
            connections within ecosystems.
          </in-typography>
        </in-card-content>
        <in-card-media
          cs="padding-bottom: 16px;"
          gutter
          shape="rounded"
          art="nature"
          src="https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </in-action-area>
    </in-card>
  </div>
</template>
